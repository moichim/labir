const Za="@labir/embed",tn="1.2.16",Ka="Embedded display of thermograms",Ja="dist/embed.js",eo="module",rn={type:"git",url:"https://github.com/moichim/labir"},to={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},sn="Jan Jáchim <jachim5@gmail.com>",ro="ISC",io={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/emotion":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11"},so={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},Ni={name:Za,version:tn,description:Ka,main:Ja,type:eo,repository:rn,scripts:to,author:sn,license:ro,dependencies:io,devDependencies:so};var As=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function no(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ei={exports:{}};(function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof As<"u"&&As,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(a){var l=typeof n<"u"&&n||typeof self<"u"&&self||typeof l<"u"&&l,u={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function d(p){return p&&DataView.prototype.isPrototypeOf(p)}if(u.arrayBuffer)var f=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=ArrayBuffer.isView||function(p){return p&&f.indexOf(Object.prototype.toString.call(p))>-1};function w(p){if(typeof p!="string"&&(p=String(p)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(p)||p==="")throw new TypeError('Invalid character in header field name: "'+p+'"');return p.toLowerCase()}function x(p){return typeof p!="string"&&(p=String(p)),p}function C(p){var v={next:function(){var T=p.shift();return{done:T===void 0,value:T}}};return u.iterable&&(v[Symbol.iterator]=function(){return v}),v}function _(p){this.map={},p instanceof _?p.forEach(function(v,T){this.append(T,v)},this):Array.isArray(p)?p.forEach(function(v){this.append(v[0],v[1])},this):p&&Object.getOwnPropertyNames(p).forEach(function(v){this.append(v,p[v])},this)}_.prototype.append=function(p,v){p=w(p),v=x(v);var T=this.map[p];this.map[p]=T?T+", "+v:v},_.prototype.delete=function(p){delete this.map[w(p)]},_.prototype.get=function(p){return p=w(p),this.has(p)?this.map[p]:null},_.prototype.has=function(p){return this.map.hasOwnProperty(w(p))},_.prototype.set=function(p,v){this.map[w(p)]=x(v)},_.prototype.forEach=function(p,v){for(var T in this.map)this.map.hasOwnProperty(T)&&p.call(v,this.map[T],T,this)},_.prototype.keys=function(){var p=[];return this.forEach(function(v,T){p.push(T)}),C(p)},_.prototype.values=function(){var p=[];return this.forEach(function(v){p.push(v)}),C(p)},_.prototype.entries=function(){var p=[];return this.forEach(function(v,T){p.push([T,v])}),C(p)},u.iterable&&(_.prototype[Symbol.iterator]=_.prototype.entries);function D(p){if(p.bodyUsed)return Promise.reject(new TypeError("Already read"));p.bodyUsed=!0}function z(p){return new Promise(function(v,T){p.onload=function(){v(p.result)},p.onerror=function(){T(p.error)}})}function I(p){var v=new FileReader,T=z(v);return v.readAsArrayBuffer(p),T}function Q(p){var v=new FileReader,T=z(v);return v.readAsText(p),T}function ee(p){for(var v=new Uint8Array(p),T=new Array(v.length),q=0;q<v.length;q++)T[q]=String.fromCharCode(v[q]);return T.join("")}function Z(p){if(p.slice)return p.slice(0);var v=new Uint8Array(p.byteLength);return v.set(new Uint8Array(p)),v.buffer}function ye(){return this.bodyUsed=!1,this._initBody=function(p){this.bodyUsed=this.bodyUsed,this._bodyInit=p,p?typeof p=="string"?this._bodyText=p:u.blob&&Blob.prototype.isPrototypeOf(p)?this._bodyBlob=p:u.formData&&FormData.prototype.isPrototypeOf(p)?this._bodyFormData=p:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)?this._bodyText=p.toString():u.arrayBuffer&&u.blob&&d(p)?(this._bodyArrayBuffer=Z(p.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(p)||g(p))?this._bodyArrayBuffer=Z(p):this._bodyText=p=Object.prototype.toString.call(p):this._bodyText="",this.headers.get("content-type")||(typeof p=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var p=D(this);if(p)return p;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var p=D(this);return p||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(I)}),this.text=function(){var p=D(this);if(p)return p;if(this._bodyBlob)return Q(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ee(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(se)}),this.json=function(){return this.text().then(JSON.parse)},this}var L=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function te(p){var v=p.toUpperCase();return L.indexOf(v)>-1?v:p}function me(p,v){if(!(this instanceof me))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v=v||{};var T=v.body;if(p instanceof me){if(p.bodyUsed)throw new TypeError("Already read");this.url=p.url,this.credentials=p.credentials,v.headers||(this.headers=new _(p.headers)),this.method=p.method,this.mode=p.mode,this.signal=p.signal,!T&&p._bodyInit!=null&&(T=p._bodyInit,p.bodyUsed=!0)}else this.url=String(p);if(this.credentials=v.credentials||this.credentials||"same-origin",(v.headers||!this.headers)&&(this.headers=new _(v.headers)),this.method=te(v.method||this.method||"GET"),this.mode=v.mode||this.mode||null,this.signal=v.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&T)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(T),(this.method==="GET"||this.method==="HEAD")&&(v.cache==="no-store"||v.cache==="no-cache")){var q=/([?&])_=[^&]*/;if(q.test(this.url))this.url=this.url.replace(q,"$1_="+new Date().getTime());else{var ie=/\?/;this.url+=(ie.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}me.prototype.clone=function(){return new me(this,{body:this._bodyInit})};function se(p){var v=new FormData;return p.trim().split("&").forEach(function(T){if(T){var q=T.split("="),ie=q.shift().replace(/\+/g," "),U=q.join("=").replace(/\+/g," ");v.append(decodeURIComponent(ie),decodeURIComponent(U))}}),v}function ge(p){var v=new _,T=p.replace(/\r?\n[\t ]+/g," ");return T.split("\r").map(function(q){return q.indexOf(`
`)===0?q.substr(1,q.length):q}).forEach(function(q){var ie=q.split(":"),U=ie.shift().trim();if(U){var gt=ie.join(":").trim();v.append(U,gt)}}),v}ye.call(me.prototype);function W(p,v){if(!(this instanceof W))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v||(v={}),this.type="default",this.status=v.status===void 0?200:v.status,this.ok=this.status>=200&&this.status<300,this.statusText=v.statusText===void 0?"":""+v.statusText,this.headers=new _(v.headers),this.url=v.url||"",this._initBody(p)}ye.call(W.prototype),W.prototype.clone=function(){return new W(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new _(this.headers),url:this.url})},W.error=function(){var p=new W(null,{status:0,statusText:""});return p.type="error",p};var oe=[301,302,303,307,308];W.redirect=function(p,v){if(oe.indexOf(v)===-1)throw new RangeError("Invalid status code");return new W(null,{status:v,headers:{location:p}})},a.DOMException=l.DOMException;try{new a.DOMException}catch{a.DOMException=function(v,T){this.message=v,this.name=T;var q=Error(v);this.stack=q.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function G(p,v){return new Promise(function(T,q){var ie=new me(p,v);if(ie.signal&&ie.signal.aborted)return q(new a.DOMException("Aborted","AbortError"));var U=new XMLHttpRequest;function gt(){U.abort()}U.onload=function(){var Ce={status:U.status,statusText:U.statusText,headers:ge(U.getAllResponseHeaders()||"")};Ce.url="responseURL"in U?U.responseURL:Ce.headers.get("X-Request-URL");var nt="response"in U?U.response:U.responseText;setTimeout(function(){T(new W(nt,Ce))},0)},U.onerror=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},U.ontimeout=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},U.onabort=function(){setTimeout(function(){q(new a.DOMException("Aborted","AbortError"))},0)};function Yr(Ce){try{return Ce===""&&l.location.href?l.location.href:Ce}catch{return Ce}}U.open(ie.method,Yr(ie.url),!0),ie.credentials==="include"?U.withCredentials=!0:ie.credentials==="omit"&&(U.withCredentials=!1),"responseType"in U&&(u.blob?U.responseType="blob":u.arrayBuffer&&ie.headers.get("Content-Type")&&ie.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(U.responseType="arraybuffer")),v&&typeof v.headers=="object"&&!(v.headers instanceof _)?Object.getOwnPropertyNames(v.headers).forEach(function(Ce){U.setRequestHeader(Ce,x(v.headers[Ce]))}):ie.headers.forEach(function(Ce,nt){U.setRequestHeader(nt,Ce)}),ie.signal&&(ie.signal.addEventListener("abort",gt),U.onreadystatechange=function(){U.readyState===4&&ie.signal.removeEventListener("abort",gt)}),U.send(typeof ie._bodyInit>"u"?null:ie._bodyInit)})}return G.polyfill=!0,l.fetch||(l.fetch=G,l.Headers=_,l.Request=me,l.Response=W),a.Headers=_,a.Request=me,a.Response=W,a.fetch=G,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(Ei,Ei.exports);var ao=Ei.exports;const oo=no(ao);var lo={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},co=`\r
`,ho="\uFEFF",Sr=t=>Object.assign({},lo,t);class uo extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let po=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class mo extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}let go=class extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}};var Ft=t=>t,Te=t=>t,Wt=Ft,Or=Ft,At=Ft,Ps=Ft,Es=Ft,fo=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},bo=t=>Ps(typeof t=="object"?t.key:t),vo=t=>Es(typeof t=="object"?t.displayLabel:t),yo=(t,...e)=>e.reduce((r,i)=>i(r),t),wo=t=>e=>t.useBom?Or(Te(e)+ho):e,xo=t=>e=>t.showTitle?Ui(Or(Te(e)+t.title))(At("")):e,Ui=t=>e=>Or(Te(t)+Te(e)+co),nn=t=>(e,r)=>_o(t)(At(Te(e)+Te(r))),_o=t=>e=>Ft(Te(e)+t.fieldSeparator),$o=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new po("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=At("");for(let s=0;s<e.length;s++){const n=vo(e[s]);i=nn(t)(i,an(t,Te(n)))}return i=At(Te(i).slice(0,-1)),Ui(r)(i)},Co=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=At("");for(let l=0;l<e.length;l++){const u=bo(e[l]),d=r[n][Te(u)];a=nn(t)(a,an(t,d))}a=At(Te(a).slice(0,-1)),s=Ui(s)(a)}return s},Ao=t=>+t===t&&(!isFinite(t)||!!(t%1)),Po=(t,e)=>{if(Ao(e)){if(t.decimalSeparator==="locale")return Wt(e.toLocaleString());if(t.decimalSeparator)return Wt(e.toString().replace(".",t.decimalSeparator))}return Wt(e.toString())},vr=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+fo(e,t.quoteCharacter)+t.quoteCharacter),Wt(r)},Eo=(t,e)=>{const r=e?"true":"false";return Wt(t.boolDisplay[r])},ko=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?vr(t,t.replaceUndefinedWith+""):e===null?vr(t,"null"):vr(t,""),an=(t,e)=>{if(typeof e=="number")return Po(t,e);if(typeof e=="string")return vr(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Eo(t,e);if(e===null||typeof e>"u")return ko(t,e);throw new go(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},To=t=>e=>{const r=Sr(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=yo(Or(""),wo(r),xo(r),$o(r,i),Co(r,i,e));if(Te(s).length<1)throw new uo("Output is empty. Is your data formatted correctly?");return s},So=t=>e=>{const r=Sr(t),i=Te(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Oo=t=>e=>{if(!window)throw new mo("Downloading only supported in a browser environment.");const r=So(t)(e),i=Sr(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function ne(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function De(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function ks(t,e){const r=ne(t);return isNaN(e)?De(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function on(t,e){const r=ne(t);if(isNaN(e))return De(t,NaN);if(!e)return r;const i=r.getDate(),s=De(t,r.getTime());s.setMonth(r.getMonth()+e+1,0);const n=s.getDate();return i>=n?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}function Mo(t,e){const r=+ne(t);return De(t,r+e)}const ln=6048e5,Do=864e5,Lo=36e5;function Ro(t,e){return Mo(t,e*Lo)}let Fo={};function tr(){return Fo}function Pt(t,e){var l,u,d,f;const r=tr(),i=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??r.weekStartsOn??((f=(d=r.locale)==null?void 0:d.options)==null?void 0:f.weekStartsOn)??0,s=ne(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function wr(t){return Pt(t,{weekStartsOn:1})}function cn(t){const e=ne(t),r=e.getFullYear(),i=De(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=wr(i),n=De(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=wr(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function ki(t){const e=ne(t);return e.setHours(0,0,0,0),e}function Ts(t){const e=ne(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function jo(t,e){const r=ki(t),i=ki(e),s=+r-Ts(r),n=+i-Ts(i);return Math.round((s-n)/Do)}function Bo(t){const e=cn(t),r=De(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),wr(r)}function Ho(t,e){return on(t,e*12)}function No(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function hn(t){if(!No(t)&&typeof t!="number")return!1;const e=ne(t);return!isNaN(Number(e))}function Uo(t){const e=ne(t);return e.setHours(23,59,59,999),e}function Vo(t){const e=ne(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function Io(t){const e=ne(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Wo(t){const e=ne(t),r=e.getFullYear();return e.setFullYear(r+1,0,0),e.setHours(23,59,59,999),e}function un(t){const e=ne(t),r=De(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}function qo(t){const e=ne(t);return e.setMinutes(59,59,999),e}function Yo(t,e){var l,u;const r=tr(),i=r.weekStartsOn??((u=(l=r.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,s=ne(t),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const zo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Go=(t,e,r)=>{let i;const s=zo[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function yi(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const Xo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Qo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Zo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ko={date:yi({formats:Xo,defaultWidth:"full"}),time:yi({formats:Qo,defaultWidth:"full"}),dateTime:yi({formats:Zo,defaultWidth:"full"})},Jo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},el=(t,e,r,i)=>Jo[t];function Ut(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const tl={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rl={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},il={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},sl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},nl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},al={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},ol=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},ll={ordinalNumber:ol,era:Ut({values:tl,defaultWidth:"wide"}),quarter:Ut({values:rl,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ut({values:il,defaultWidth:"wide"}),day:Ut({values:sl,defaultWidth:"wide"}),dayPeriod:Ut({values:nl,defaultWidth:"wide",formattingValues:al,defaultFormattingWidth:"wide"})};function Vt(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?hl(l,g=>g.test(a)):cl(l,g=>g.test(a));let d;d=t.valueCallback?t.valueCallback(u):u,d=r.valueCallback?r.valueCallback(d):d;const f=e.slice(a.length);return{value:d,rest:f}}}function cl(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function hl(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function ul(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const dl=/^(\d+)(th|st|nd|rd)?/i,pl=/\d+/i,ml={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},gl={any:[/^b/i,/^(a|c)/i]},fl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},bl={any:[/1/i,/2/i,/3/i,/4/i]},vl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},yl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},wl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_l={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},$l={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Cl={ordinalNumber:ul({matchPattern:dl,parsePattern:pl,valueCallback:t=>parseInt(t,10)}),era:Vt({matchPatterns:ml,defaultMatchWidth:"wide",parsePatterns:gl,defaultParseWidth:"any"}),quarter:Vt({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:bl,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Vt({matchPatterns:vl,defaultMatchWidth:"wide",parsePatterns:yl,defaultParseWidth:"any"}),day:Vt({matchPatterns:wl,defaultMatchWidth:"wide",parsePatterns:xl,defaultParseWidth:"any"}),dayPeriod:Vt({matchPatterns:_l,defaultMatchWidth:"any",parsePatterns:$l,defaultParseWidth:"any"})},Al={code:"en-US",formatDistance:Go,formatLong:Ko,formatRelative:el,localize:ll,match:Cl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Pl(t){const e=ne(t);return jo(e,un(e))+1}function El(t){const e=ne(t),r=+wr(e)-+Bo(e);return Math.round(r/ln)+1}function dn(t,e){var f,g,w,x;const r=ne(t),i=r.getFullYear(),s=tr(),n=(e==null?void 0:e.firstWeekContainsDate)??((g=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(w=s.locale)==null?void 0:w.options)==null?void 0:x.firstWeekContainsDate)??1,a=De(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=Pt(a,e),u=De(t,0);u.setFullYear(i,0,n),u.setHours(0,0,0,0);const d=Pt(u,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function kl(t,e){var l,u,d,f;const r=tr(),i=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((f=(d=r.locale)==null?void 0:d.options)==null?void 0:f.firstWeekContainsDate)??1,s=dn(t,e),n=De(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),Pt(n,e)}function Tl(t,e){const r=ne(t),i=+Pt(r,e)-+kl(r,e);return Math.round(i/ln)+1}function N(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Ke={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return N(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):N(r+1,2)},d(t,e){return N(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return N(t.getHours()%12||12,e.length)},H(t,e){return N(t.getHours(),e.length)},m(t,e){return N(t.getMinutes(),e.length)},s(t,e){return N(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return N(s,e.length)}},wt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ss={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Ke.y(t,e)},Y:function(t,e,r,i){const s=dn(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return N(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):N(n,e.length)},R:function(t,e){const r=cn(t);return N(r,e.length)},u:function(t,e){const r=t.getFullYear();return N(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return N(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return N(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Ke.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return N(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=Tl(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):N(s,e.length)},I:function(t,e,r){const i=El(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):N(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Ke.d(t,e)},D:function(t,e,r){const i=Pl(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):N(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return N(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return N(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return N(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=wt.noon:i===0?s=wt.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=wt.evening:i>=12?s=wt.afternoon:i>=4?s=wt.morning:s=wt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Ke.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Ke.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Ke.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Ke.s(t,e)},S:function(t,e){return Ke.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Ms(i);case"XXXX":case"XX":return ct(i);case"XXXXX":case"XXX":default:return ct(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Ms(i);case"xxxx":case"xx":return ct(i);case"xxxxx":case"xxx":default:return ct(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Os(i,":");case"OOOO":default:return"GMT"+ct(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Os(i,":");case"zzzz":default:return"GMT"+ct(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return N(i,e.length)},T:function(t,e,r){const i=t.getTime();return N(i,e.length)}};function Os(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+N(n,2)}function Ms(t,e){return t%60===0?(t>0?"-":"+")+N(Math.abs(t)/60,2):ct(t,e)}function ct(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=N(Math.trunc(i/60),2),n=N(i%60,2);return r+s+e+n}const Ds=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},pn=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Sl=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Ds(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Ds(i,e)).replace("{{time}}",pn(s,e))},Ol={p:pn,P:Sl},Ml=/^D+$/,Dl=/^Y+$/,Ll=["D","DD","YY","YYYY"];function Rl(t){return Ml.test(t)}function Fl(t){return Dl.test(t)}function jl(t,e,r){const i=Bl(t,e,r);if(console.warn(i),Ll.includes(t))throw new RangeError(i)}function Bl(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Hl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ul=/^'([^]*?)'?$/,Vl=/''/g,Il=/[a-zA-Z]/;function mn(t,e,r){var f,g,w,x;const i=tr(),s=i.locale??Al,n=i.firstWeekContainsDate??((g=(f=i.locale)==null?void 0:f.options)==null?void 0:g.firstWeekContainsDate)??1,a=i.weekStartsOn??((x=(w=i.locale)==null?void 0:w.options)==null?void 0:x.weekStartsOn)??0,l=ne(t);if(!hn(l))throw new RangeError("Invalid time value");let u=e.match(Nl).map(C=>{const _=C[0];if(_==="p"||_==="P"){const D=Ol[_];return D(C,s.formatLong)}return C}).join("").match(Hl).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const _=C[0];if(_==="'")return{isToken:!1,value:Wl(C)};if(Ss[_])return{isToken:!0,value:C};if(_.match(Il))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const d={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return u.map(C=>{if(!C.isToken)return C.value;const _=C.value;(Fl(_)||Rl(_))&&jl(_,e,String(t));const D=Ss[_[0]];return D(l,_,s.localize,d)}).join("")}function Wl(t){const e=t.match(Ul);return e?e[1].replace(Vl,"'"):t}function Vi(t,e){const r=ne(t);if(!hn(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const u=N(r.getDate(),2),d=N(r.getMonth()+1,2);n=`${N(r.getFullYear(),4)}${a}${d}${a}${u}`}if(s!=="date"){const u=N(r.getHours(),2),d=N(r.getMinutes(),2),f=N(r.getSeconds(),2);n=`${n}${n===""?"":" "}${u}${l}${d}${l}${f}`}return n}function ql(t){const e=ne(t);return e.setMinutes(0,0,0),e}var je=class{constructor(t,e){this.parent=t,this._initial=e,this._listeners={},this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Yl=class extends je{constructor(t,e){super(t,e),this.parent=t,this.framesByTimestamp=new Map,this.framesByMs=new Map,this.framesByIndex=new Map,this.localTimeline=[],this._onChangeListeners=new Map;const r=this.parent.frames[0].timestamp;this.frames=this.parent.frames.map((i,s)=>{const n=i.timestamp-r,a={...i,index:s,ms:n};return this.framesByIndex.set(s,a),this.framesByMs.set(a.ms,a),this.framesByTimestamp.set(a.timestamp,a),this.localTimeline.push(a.ms),a}),this._currentFrame=this.frames[0],console.log("timeline",this.localTimeline)}get duration(){return this.parent.duration}get frameCount(){return this.frames.length}set currentFrame(t){t.ms!==this._currentFrame.ms&&(this._currentFrame=t,this._onChangeListeners.forEach(e=>e(this._currentFrame)),console.log("změnil se mi frame"),this.parent.pixels=t.pixels)}get currentFrame(){return this._currentFrame}get nextFrame(){const e=this.currentFrame.index+1;if(e<=this.frameCount)return this.framesByIndex.get(e)}get nextFrameTimeoutDuration(){if(this.nextFrame!==void 0)return this.nextFrame.ms-this.currentFrame.ms}addChangeListener(t,e){this._onChangeListeners.set(t,e)}removeChangeListener(t){this._onChangeListeners.delete(t)}getNextFrameToMs(t){const e=this.localTimeline.find(r=>r>t);if(e!==void 0)return this.framesByMs.get(e)}getPreviousFrameToMs(t){const e=this.localTimeline.reverse().find(r=>r<t);if(e!==void 0)return this.framesByMs.get(e)}validate(t){return t<0?0:t<=this.duration?t:this.duration}afterSetEffect(t){if(t!==this.currentFrame.ms)if(this.localTimeline.includes(t)){const e=this.framesByMs.get(t);this.currentFrame.ms!==e.ms&&(this.currentFrame=e)}else{const e=this.getPreviousFrameToMs(t);e&&e.ms!==this.currentFrame.ms&&(this.currentFrame=e)}}setMs(t){this.value=t}setPercentage(t){const e=Math.min(Math.max(t,0),100),r=this.duration/100*e;this.value=Math.floor(r),console.log("Nastavil jsem čas na",this.value)}goToNextFrame(){this.nextFrame&&(this.value=this.nextFrame.ms)}static formatDuration(t){const e=t%1e3,r=(t-e)%(1e3*60);return[(t-e-r)/(1e3*60*60),r,e].join(":")}play(){this.timer=setInterval(()=>{this.goToNextFrame()},this.nextFrameTimeoutDuration)}pause(){clearInterval(this.timer)}stop(){clearInterval(this.timer),this.setMs(0)}},zl=class extends je{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Gl=class{constructor(t){this.file=t}canvasAsPng(){return this.file.canvasLayer.exportAsPng()}thermalDataAsCsv(t="__thermal-data"){const e=Sr({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.file.fileName.replace(".lrc",t)}),r=this.file.frames.map(s=>{const{pixels:n,...a}=s;return console.log(n),a}),i=To(e)(r);Oo(e)(i)}},Mr=class{constructor(t){this.instance=t,this._mounted=!1}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},He=class Ti{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=Ti.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=Ti.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},Xl=class extends Mr{constructor(t,e){super(t),this._url=e,this.container=He.createVisibleLayer(),this._url&&(this.image=He.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(t){this._url=t,this.image&&t&&(this.image.src=t)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Ql=class extends Mr{constructor(t){super(t),this._opacity=1,this.container=He.createCanvasContainer(),this.canvas=He.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(t){this._opacity=Math.max(Math.min(t,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}draw(){const t=this.to-this.from;for(let e=0;e<=this.width;e++)for(let r=0;r<=this.height;r++){const i=e+r*this.width;let s=this.pixels[i];s<this.from&&(s=this.from),s>this.to&&(s=this.to);const a=(s-this.from)/t,l=Math.round(255*a),u=this.getPalette()[l];this.context.fillStyle=u,this.context.fillRect(e,r,1,1)}}exportAsPng(){const t=this.canvas.toDataURL(),e=document.createElement("a");e.download=this.instance.fileName.replace(".lrc","_exported.png"),e.href=t,e.click()}},Zl=class extends Mr{constructor(t){super(t),this._show=!1,this._hover=!1,this.layerRoot=He.createCursorLayerRoot(),this.center=He.createCursorLayerCenter(),this.axisX=He.createCursorLayerX(),this.axisY=He.createCursorLayerY(),this.label=He.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(t){this._show=t,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(t){this._hover=t,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(t,e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(t*i),n=Math.round(e*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),t>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),e>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${r.toFixed(3)} °C`}}setValue(t){t&&(this.label.innerHTML=`${t.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(t){return`${t}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Kl=class extends Mr{constructor(t){super(t),this.container=He.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Jl=class extends EventTarget{constructor(t,e){super(),this.source=t,this.group=e,this.root=null,this.canvasLayer=new Ql(this),this.visibleLayer=new Xl(this,this.visibleUrl),this.cursorLayer=new Zl(this),this.listenerLayer=new Kl(this),this._mounted=!1,this._onHover=void 0,this._onClick=void 0,this.cursorValue=new zl(this,void 0),this._isHover=!1,this.timeline=new Yl(this,0),this.id=`instance_${this.group.id}_${this.source.url}`,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=this.timeline.currentFrame.pixels}get url(){return this.source.url}get fileName(){return this.source.fileName}get visibleUrl(){return this.source.visibleUrl}get signature(){return this.source.signature}get dataType(){return this.source.fileDataType}get unit(){return this.source.unit}get width(){return this.source.width}get height(){return this.source.height}get timestamp(){return this.source.timestamp}get version(){return this.source.version}get streamCount(){return this.source.streamCount}get fileDataType(){return this.source.fileDataType}get frameCount(){return this.source.frameCount}get frames(){return this.source.frames}get duration(){return this.source.duration}get min(){return this.source.min}get max(){return this.source.max}get pixelsForHistogram(){return this.source.pixelsForHistogram}get pixels(){return this._pixels}set pixels(t){if(this._pixels=t,this._mounted&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const e=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(e)}}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}reset(){}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(t){this._mounted=t}attachToDom(t){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=t,this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const e=this.width,r=this.root.clientWidth,i=e/r,s=Math.round(t.offsetX*i),n=Math.round(t.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:n}),this._onHover&&this._onHover(t,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=t=>{this._onClick&&this._onClick(t,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(t){this.attachToDom(t)}unmountFromDom(){this.detachFromDom()}setHoverHandler(t){this._onHover=t}setHoverCursor(t){this.root&&this.root.style.cursor!==t&&(this.root.style.cursor=t)}setClickHandler(t=void 0){this._onClick=t}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(t){console.log(t),this.draw()}get isHover(){return this._isHover}set isHover(t){this._isHover=t}recieveCursorPosition(t){this.cursorValue.recalculateFromCursor(t),t!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(t.x,t.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(t,e){const r=e*this.width+t;return this.pixels[r]}recieveRange(t){t!==void 0&&this.draw()}recieveOpacity(t){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=t)}get unitHuman(){return this.unit===0?"none":this.unit===1?"intensity":this.unit===2?"°C":this.unit===3?"Kelvin":"unit not specified"}get dataTypeHuman(){return this.dataType===0?"Float16":this.dataType===1?"Float32":this.dataType===2?"Int16":"error parsing data type"}get export(){if(!this._export){const t=new Gl(this);this._export=t}return this._export}exportAsPng(){this.export.canvasAsPng()}exportThermalDataAsSvg(){this.export.thermalDataAsCsv()}},_t=class extends EventTarget{constructor(t,e,r,i,s,n,a,l,u,d,f,g,w,x,C){super(),this.url=t,this.signature=e,this.version=r,this.streamCount=i,this.fileDataType=s,this.unit=n,this.width=a,this.height=l,this.timestamp=u,this.pixels=d,this.min=f,this.max=g,this.frameCount=w,this.frames=x,this.visibleUrl=C,this.fileName=this.url.substring(this.url.lastIndexOf("/")+1);let _=[];this.frames.forEach(D=>{_=_.concat(D.pixels)}),this.pixelsForHistogram=_,this.duration=this.frames.length===0?0:this.frames[this.frames.length-1].timestamp-this.frames[0].timestamp}static async fromUrl(t,e){try{return await Si.fromUrl(t,e)}catch{return null}}static async fromUrlWithErrors(t,e){return await Si.fromUrl(t,e)}createInstance(t){return new Jl(this,t)}},ec=class{constructor(t,e,r){this.url=t,this.blob=e,this.visibleUrl=r,this.isValidTimestamp=i=>Number.isInteger(i),this.isValidWidth=i=>Number.isInteger(i),this.isValidHeight=i=>Number.isInteger(i),this.isValidPixels=i=>i!==void 0&&i.length===this.width*this.height,this.isValidMin=i=>i!==void 0,this.isValidMax=i=>i!==void 0,this.isValidFrameCount=i=>Number.isInteger(i),this.isValidFrames=i=>i===void 0||this.frameCount===void 0?!1:i.length===this.frameCount,this.errors=[]}async init(){const t=await this.blob.arrayBuffer();this.data=new DataView(t);const e=t.slice(25);return this.frameSubset=e,this}async parse(){return await this.init(),await this.parseFile(),this.getThermalFile()}parseTimestamp(){const t=this.getTimestamp();this.isValidTimestamp(t)||this.logValidationError("timestamp",t),this.timestamp=t}parseWidth(){const t=this.getWidth();this.isValidWidth(t)||this.logValidationError("width",t),this.width=t}parseHeight(){const t=this.getHeight();this.isValidHeight(t)||this.logValidationError("height",t),this.height=t}async parsePixels(){const t=this.getPixels();this.pixels=t}parseMin(){const t=this.getMin();this.isValidMin(t)||this.logValidationError("min",t),this.min=t}parseMax(){const t=this.getMax();this.isValidMax(t)||this.logValidationError("max",t),this.max=t}parseFrameCount(){const t=this.getFrameCount();this.isValidFrameCount(t)||this.logValidationError("frameCount",t),this.frameCount=t}parseFrames(){const t=this.getFrames();this.isValidFrames(t)||this.logValidationError("frames",t.toString()),this.frames=t}logError(t){console.error(t),this.errors.push(t)}logValidationError(t,e){const r=`Invalid ${t} of ${this.url}: '${e.toString()}'`;this.logError(r)}getErrors(){return this.errors}encodeErrors(){return this.errors.join("+|+")}static decodeErrors(t){return t.split("+|+")}},xe=class{static readDotnetTimestamp(t,e){const r=e.getBigInt64(t,!0),i=62135596800000n,s=10000n,n=24n*60n*60n*1000n*s,a=0x4000000000000000n,l=0x8000000000000000n;let d=r&0x3FFFFFFFFFFFFFFFn;r&l&&(d>a-n&&(d-=a),d<0&&(d+=n));const g=d/s-i;return Number(g)}static readFloat32(t,e){return e.getFloat32(t,!0)}static read8bNumber(t,e){return e.getUint8(t)}static readTemperatureArray(t,e,r,i,s){const n=e.buffer.slice(t);if(r===0){const a=new Uint16Array(n),l=Math.abs(i-s),u=65535;return[...a].map(d=>{const f=d/u;return i+l*f})}else if(r===1)return[...new Float32Array(n)];return[]}},tc=class{constructor(t,e,r,i,s,n,a){this.arrayBuffer=t,this.width=e,this.height=r,this.dataType=i,this.frameCount=s,this.frameByteSize=n,this.pixelByteSize=a}parseFrame(t){if(!Number.isInteger(t))throw new Error(`The frame index ${t} is invalid!`);const e=t*this.frameByteSize,r=e+this.frameByteSize,i=this.arrayBuffer.slice(e,r),s=new DataView(i),n=xe.readFloat32(8,s),a=xe.readFloat32(12,s);return{timestamp:xe.readDotnetTimestamp(0,s),min:n,max:a,modeMinInKelvin:xe.readFloat32(16,s),modeMaxInKelvin:xe.readFloat32(20,s),emissivity:xe.readFloat32(24,s),reflectedTemperaatureInKelvin:xe.readFloat32(28,s),distance:xe.readFloat32(32,s),atmosphereTemperatureInKelvin:xe.readFloat32(36,s),relativeHumidity:xe.readFloat32(40,s),tau:xe.readFloat32(44,s),windowTemperature:xe.readFloat32(48,s),windowTransmissivity:xe.readFloat32(52,s),isTauSet:xe.read8bNumber(53,s),pixels:xe.readTemperatureArray(57,s,this.dataType,n,a)}}},rc=class extends ec{constructor(){super(...arguments),this.isValidSignature=t=>t==="LRC\0",this.isValidVersion=t=>t===2,this.isStreamCountValid=t=>t===1,this.isDataTypeValid=t=>t===void 0?!1:[0,1,2].includes(t),this.isValidUnit=t=>t===2}async parseFile(){await this.parseSignature(),this.parseVersion(),this.parseDataType(),this.parseStreamCount(),this.parseTimestamp(),this.parseUnit(),this.parseWidth(),this.parseHeight(),this.parseFrameCount(),this.parseFrames(),this.parseMin(),this.parseMax(),await this.parsePixels()}async parseSignature(){const t=await this.readString(0,4);this.isValidSignature(t)||this.logValidationError("signature",t),this._signature=t}parseVersion(){const t=this.read8bNumber(4);this.isValidVersion(t)||this.logValidationError("version",t),this._version=t}parseStreamCount(){const t=this.read8bNumber(14);this.isStreamCountValid(t)||this.logValidationError("streamCount",t),this._streamCount=t}parseDataType(){const t=this.read8bNumber(15);this.isDataTypeValid(t)||this.logValidationError("fileDataType",t),this._fileDataType=t,this._pixelByteLength=t===0?2:4}get pixelByteLength(){return this._pixelByteLength}parseUnit(){const t=this.read8bNumber(16);this.isValidUnit(t)||this.logValidationError("unit",t),this._unit=t}getFrameCount(){return this.getNumberOfFrames()}getMin(){return this.frames.reduce((t,e)=>e.min<t?e.min:t,1/0)}getMax(){return this.frames.reduce((t,e)=>e.max>t?e.max:t,-1/0)}getWidth(){return this.read16bNumber(17)}getHeight(){return this.read16bNumber(19)}getTimestamp(){return xe.readDotnetTimestamp(5,this.data)}getFrameSize(){if(this._fileDataType===void 0||this.width===void 0||this.height===void 0||this.pixelByteLength===void 0)throw new Error("Trying to read frame size before necessary attributes are known");return 57+this.width*this.height*this.pixelByteLength}getNumberOfFrames(){const t=this.getFrameSize();return this.frameSubset.byteLength/t}getFrames(){const t=[],e=new tc(this.frameSubset,this.width,this.height,this._fileDataType,this.frameCount,this.getFrameSize(),this.pixelByteLength);for(let r=0;r<this.frameCount;r++)t.push(e.parseFrame(r));return t}async readTemperatureArray(t){const e=(await this.blob.arrayBuffer()).slice(t,t+this.width*this.height*this.pixelByteLength);if(this._fileDataType===0){const r=new Uint16Array(e),i=Math.abs(this.min-this.max),s=65535;return[...r].map(n=>{const a=n/s;return this.min+i*a})}else if(this._fileDataType===1)return[...new Float32Array(e)];return[]}getPixels(){return this.frames&&this.frames.length>0?this.frames[0].pixels:[]}isValid(){return this.errors.length===0&&this.isValidSignature(this._signature)&&this.isStreamCountValid(this._streamCount)&&this.isDataTypeValid(this._fileDataType)&&this.isValidVersion(this._version)&&this.isValidUnit(this._unit)&&this.isValidTimestamp(this.timestamp)&&this.isValidWidth(this.width)&&this.isValidHeight(this.height)&&this.isValidPixels(this.pixels)&&this.isValidMin(this.min)&&this.isValidMax(this.max)&&this.isValidFrameCount(this.frameCount)}getThermalFile(){if(!this.isValid())throw new Error(this.encodeErrors());return new _t(this.url,this._signature,this._version,this._streamCount,this._fileDataType,this._unit,this.width,this.height,this.timestamp,this.pixels,this.min,this.max,this.frameCount,this.frames,this.visibleUrl)}async readString(t,e){return await this.blob.slice(t,e).text()}read16bNumber(t){return this.data.getUint16(t,!0)}read8bNumber(t){return this.data.getUint8(t)}},Si=class Oi{constructor(){}static async fromUrl(e,r){const i=new Oi;return i.thermalUrl=e,i.visibleUrl=r,await i.loadFromUrl()}async loadFromUrl(){const e=await oo(this.thermalUrl);if(this.blob=await e.blob(),e.status!==200)throw new Error(`There was an error loading '${this.thermalUrl}'`);return this.parser=this.getParserInstance(),await this.parser.parse()}static async fromFile(e){const r=new Oi;return r.thermalUrl=e.name,r.blob=e,await r.loadFromBlob()}async loadFromBlob(){return this.parser=this.getParserInstance(),await this.parser.parse()}getParserInstance(){if(this.thermalUrl.endsWith(".lrc"))return new rc(this.thermalUrl,this.blob,this.visibleUrl);throw new Error("No parser found!")}},ic=class extends je{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},sc=class extends je{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e);console.log(this.parent.histogram.value);const i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},nc=class extends je{constructor(){super(...arguments),this._hover=this.value!==void 0}get hover(){return this._hover}validate(t){return t}afterSetEffect(t){this._hover=this.value!==void 0,this.parent.instances.forEveryInstance(e=>e.recieveCursorPosition(t))}recieveCursorPosition(t){this.value=t}},ac=class extends je{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(t,e,r){this.parent.registry.fetcher.request(t,e,(i,s)=>{if(i instanceof _t){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(t,e){this._requestedRemovals.has(t)?e&&this._requestedRemovals.get(t).callbacks.push(e):this._requestedRemovals.set(t,{url:t,callbacks:e?[e]:[]})}async cleanup(){const t=Object.values(this._requestedRemovals).map(e=>e.url);this.value=this.value.filter(e=>{var i;return t.includes(e.url)?((i=this._requestedRemovals.get(e.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(t){return t}afterSetEffect(t){this.map.clear(),t.forEach(e=>this._map.set(e.url,e))}instantiateSource(t){if(this._map.has(t.url))return this._map.get(t.url);{const e=t.createInstance(this.parent);return this.value=[...this.value,e],e}}instantiateSources(t){const e=[];t.forEach(r=>{this._map.has(r.url)||e.push(r.createInstance(this.parent))}),this.value=e}removeAllInstances(){this.forEveryInstance(t=>t.destroySelfAndBelow()),this.value=[]}forEveryInstance(t){this.value.forEach(e=>t(e))}},gn=class extends je{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},oc=class extends gn{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.instances.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},lc=class{constructor(t,e,r,i){this.registry=t,this.id=e,this.name=r,this.description=i,this.hash=Math.random(),this.minmax=new oc(this,void 0),this.instances=new ac(this,[]),this.cursorPosition=new nc(this,void 0),this.forEveryInstance=s=>{this.instances.value.forEach(n=>s(n))}}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.instances.removeAllInstances()}reset(){this.instances.reset(),this.minmax.reset(),this.cursorPosition.reset()}},cc=class extends je{constructor(){super(...arguments),this._map=new Map}get map(){return this._map}validate(t){return t}afterSetEffect(t){this._map.clear(),t.forEach(e=>this._map.set(e.id,e))}addOrGetGroup(t,e,r){if(this._map.has(t))return this._map.get(t);const i=new lc(this.parent,t,e,r);return this._map.set(t,i),this.value.push(i),this.value=[...this.value],i}removeGroup(t){var e;this._map.has(t)&&((e=this._map.get(t))==null||e.destroySelfAndBelow(),this._map.delete(t),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(t=>t.destroySelfAndBelow()),this.value=[]}},hc=class extends je{constructor(){super(...arguments),this._resolution=150,this.buffer=new Map,this.bufferPixelsCount=0,this._bufferResolution=1e3}get resolution(){return this._resolution}set bufferResolution(t){this._bufferResolution=Math.round(Math.max(t,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(t){this._resolution=Math.round(Math.min(Math.max(t,2),400))}validate(t){return t.length!==this.resolution+1&&t.length,t}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}refreshBufferFromCurrentPixels(){const t=new Map;let e=0;if(this.parent.minmax!==void 0&&this.parent.groups.value.length!==0){const r=this.parent.minmax.distanceInCelsius;if(r!==void 0){const i=r/this._bufferResolution,s=this.parent.minmax.value;let n=[];this.parent.forEveryInstance(l=>{n=n.concat(l.pixelsForHistogram)}),n.sort((l,u)=>l-u);let a=s.min+i;for(;a!==!1;){const l=n.findIndex(f=>f>=a),u=n.slice(0,l).length;t.set(a-i/2,u),e+=u,n=n.slice(l);const d=a+i;a=d<=s.max?d:!1}}}this.buffer=t,this.bufferPixelsCount=e}recalculateHistogram(){if(this.parent.minmax.value!==void 0&&this.parent.minmax.distanceInCelsius!==void 0){let t=Array.from(this.buffer.keys()),e=Array.from(this.buffer.values());const r=this.parent.minmax.value,i=this.parent.minmax.distanceInCelsius/this.resolution,s=[];let n=0,a=r.min;for(;a<r.max;){const u=a,d=a+i,f=t.findIndex(C=>C>=d),w=e.slice(0,f).reduce((C,_)=>C+_,0),x=w/this.bufferPixelsCount;s.push({from:u,to:d,percentage:x,count:w}),n<w&&(n=w),t=t.slice(f),e=e.slice(f),a+=i}const l=s.map(u=>({...u,height:u.count/n*100}));this.value=l}}_getHistorgramFromAllGroups(){if(this.parent.minmax.value===void 0||this.parent.groups.value.length,this.parent.minmax.value===void 0||this.parent.groups.value.length===0)return[];{const t=this.parent.groups.value.reduce((d,f)=>{const g=f.instances.value.reduce((w,x)=>(w=[...w,...x.pixels],w),[]);return[...d,...g]},[]),e=[],r=this.resolution,s=(this.parent.minmax.value.max-this.parent.minmax.value.min)/r;for(let d=0;d<r;d++){const f=s*d+this.parent.minmax.value.min,g=f+s;e.push([f,g])}const n=[];let a=t.length;for(const d of e){const f=t.filter(g=>g>=d[0]&&g<d[1]).length;a=a+f,n.push({from:d[0],to:d[1],count:f})}const l=n.map(d=>({...d,percentage:d.count/a*100})),u=Math.max(...l.map(d=>d.percentage));return l.map(d=>({...d,height:d.percentage/u*100}))}}},uc=class extends je{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},dc=class extends gn{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},pc=class{constructor(t){this.registry=t,this.requests=new Map}get requestArray(){return Array.from(this.requests.values())}request(t,e,r){var i;if(this.requests.has(t))r&&((i=this.requests.get(t))==null||i.callbacks.push(r));else{const s={thermalUrl:t,visibleUrl:e,callbacks:r?[r]:[]};this.requests.set(t,s)}this.timer===void 0&&(this.timer=setTimeout(this.resolve.bind(this),0))}async resolve(){const t=await Promise.all(this.requestArray.map(async e=>{const r={request:e};if(this.registry.manager.isUrlRegistered(e.thermalUrl))r.output=this.registry.manager.sourcesByUrl[e.thermalUrl];else try{const i=await _t.fromUrlWithErrors(e.thermalUrl,e.visibleUrl);i&&(r.output=i)}catch(i){i instanceof Error&&(r.output=i.message)}return r})).then(e=>e.map(r=>(r.output instanceof _t?r.request.callbacks.forEach(i=>{i(r.output),this.registry.manager.registerSource(r.output)}):r.request.callbacks.forEach(i=>{r.output instanceof _t||i(void 0,r.output??"Něco se pokazilo")}),r.output)));return clearTimeout(this.timer),this.timer=void 0,this.registry.postLoadedProcessing(),t}},Ls=class Mi extends EventTarget{constructor(e,r,i){super(),this.group=e,this.url=r,this.visibleUrl=i}static single(e,r,i){return new Mi(e,r,i)}static multiple(e,r){return r.map(i=>new Mi(e,i.thermalUrl,i.visibleUrl))}async fetch(){if(this.group.registry.manager.isUrlRegistered(this.url))return{file:this.group.registry.manager.sourcesByUrl[this.url],request:this};const e=await _t.fromUrl(this.url,this.visibleUrl);if(e){if(e!==null)return{file:e,request:this}}else return null;return null}},mc=class{constructor(t){this.registry=t,this._requests=[]}get requests(){return this._requests}get loading(){return this.registry.loading.value}requestFile(t,e,r){if(this.loading===!0){console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);return}this._requests.push(Ls.single(t,e,r))}requestFiles(t,e){if(this.loading===!0){console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);return}this._requests=[...this._requests,...Ls.multiple(t,e)]}async resolveQuery(){this.loading;const t=await Promise.all(this._requests.map(r=>r.fetch())),e={};for(const r of t)if(r!==null){const i=this.registry.manager.registerSource(r.file);r.request.group.id in e?e[r.request.group.id].push(i):e[r.request.group.id]=[i]}for(const r in e){const i=this.registry.groups.map.get(r);i==null||i.instances.instantiateSources(e[r])}return this._requests=[],this.registry.groups.value}},gc=class{constructor(t,e,r){this.id=t,this.manager=e,this.hash=Math.random(),this.loader=new mc(this),this.groups=new cc(this,[]),this.fetcher=new pc(this),this.opacity=new ic(this,1),this.minmax=new dc(this,void 0),this.loading=new uc(this,!1),this.range=new sc(this,void 0),this.histogram=new hc(this,[]),this.palette=this.manager.palette,r&&r.histogramResolution!==void 0&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}forEveryGroup(t){this.groups.value.forEach(t)}forEveryInstance(t){this.forEveryGroup(e=>e.instances.forEveryInstance(t))}async loadFiles(t){this.reset(),Object.entries(t).forEach(([e,r])=>{const i=this.groups.addOrGetGroup(e);r.forEach(s=>{this.loader.requestFile(i,s.thermalUrl,s.visibleUrl)})}),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async loadOneFile(t,e){this.reset();const r=this.groups.addOrGetGroup(e);this.loader.requestFile(r,t.thermalUrl,t.visibleUrl),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async processDroppedFiles(t,e){this.reset(),this.loading.markAsLoading(),this.removeAllChildren();const r=await Promise.all(t.map(s=>Si.fromFile(s))).then(s=>s.filter(n=>n!==null));r.forEach(s=>this.manager.registerSource(s)),this.groups.addOrGetGroup(e).instances.instantiateSources(r),this.postLoadedProcessing()}enqueueFile(t,e,r){const i=this.groups.addOrGetGroup(t);this.loader.requestFile(i,e,r)}async loadQuery(){this.reset(),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}postLoadedProcessing(){console.log("postprocessing"),this.forEveryGroup(t=>t.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.refreshBufferFromCurrentPixels(),this.histogram.recalculateWithCurrentSetting(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(t=>t.reset()),this.loader.loading===!1&&(this.opacity.reset(),this.minmax.reset())}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},fc=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},bc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],vc=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],yc=fc(),fn={iron:{pixels:vc,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:bc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:yc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},wc=class extends je{get availablePalettes(){return fn}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},bn=class extends EventTarget{constructor(t){super(),this.registries={},this.palette=new wc(this,"jet"),this._sourcesByUrl={},this.isUrlRegistered=e=>Object.keys(this.sourcesByUrl).includes(e),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(t){Object.values(this.registries).forEach(e=>t(e))}addOrGetRegistry(t,e){return this.registries[t]===void 0&&(this.registries[t]=new gc(t,this,e)),this.registries[t]}removeRegistry(t){this.registries[t]!==void 0&&(this.registries[t].destroySelfAndBelow(),delete this.registries[t])}get sourcesByUrl(){return this._sourcesByUrl}getSourcesArray(){return Object.values(this.sourcesByUrl)}getRegisteredUrls(){return Object.keys(this.sourcesByUrl)}registerSource(t){return this.getRegisteredUrls().includes(t.url)?this.sourcesByUrl[t.url]:(this.sourcesByUrl[t.url]=t,t)}},Ii=class{};Ii.inputToDate=t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t};var Le=class Je extends Ii{static humanRangeDates(e,r){return e=Je.inputToDate(e),r=Je.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Je.humanDate(e):[Je.humanDate(e),Je.humanDate(r)].join(" - ")}static human(e){return`${Je.humanDate(e)} ${Je.humanTime(e,!0)} `}};Le.isoDate=t=>(t=Le.inputToDate(t),Vi(t,{representation:"date"}));Le.isoTime=t=>(t=Le.inputToDate(t),Vi(t,{representation:"time"}));Le.isoComplete=t=>(t=Le.inputToDate(t),Vi(t));Le.humanTime=(t,e=!1)=>(t=Le.inputToDate(t),mn(t,e?"HH:mm:ss":"HH:mm"));Le.humanDate=(t,e=!1)=>(t=Le.inputToDate(t),mn(t,e?"d. M.":"d. M. yyyy"));var xc=Le,$t=class extends Ii{};$t.down=(t,e)=>e==="jednu hodinu"?ql(t):e==="jeden den"?ki(t):e==="jeden týden"?Pt(t):e==="jeden měsíc"?Io(t):un(t);$t.up=(t,e)=>e==="jednu hodinu"?qo(t):e==="jeden den"?Uo(t):e==="jeden týden"?Yo(t):e==="jeden měsíc"?Vo(t):Wo(t);$t.pick=(t,e)=>[$t.down(t,e),$t.up(t,e)];$t.modify=(t,e,r)=>{switch(r){case"jednu hodinu":return Ro(t,e);case"jeden den":return ks(t,e);case"jeden týden":return ks(t,e*7);case"jeden měsíc":return on(t,e);case"jeden rok":return Ho(t,e)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vn=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dr=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new vn(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _c=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $c=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Gt=class extends _c{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const u=new Set;for(const[d,{consumerHost:f}]of this.subscriptions)u.has(d)||(u.add(d),f.dispatchEvent(new vn(this.context,d,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new $c(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cc({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Gt(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Gt(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yr=globalThis,Wi=yr.ShadowRoot&&(yr.ShadyCSS===void 0||yr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qi=Symbol(),Rs=new WeakMap;let yn=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Wi&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Rs.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Rs.set(r,e))}return e}toString(){return this.cssText}};const Ac=t=>new yn(typeof t=="string"?t:t+"",void 0,qi),be=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new yn(r,t,qi)},Pc=(t,e)=>{if(Wi)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=yr.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Fs=Wi?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Ac(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ec,defineProperty:kc,getOwnPropertyDescriptor:Tc,getOwnPropertyNames:Sc,getOwnPropertySymbols:Oc,getPrototypeOf:Mc}=Object,tt=globalThis,js=tt.trustedTypes,Dc=js?js.emptyScript:"",wi=tt.reactiveElementPolyfillSupport,qt=(t,e)=>t,xr={toAttribute(t,e){switch(e){case Boolean:t=t?Dc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Yi=(t,e)=>!Ec(t,e),Bs={attribute:!0,type:String,converter:xr,reflect:!1,hasChanged:Yi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),tt.litPropertyMetadata??(tt.litPropertyMetadata=new WeakMap);class xt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Bs){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&kc(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Tc(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bs}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;const e=Mc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){const r=this.properties,i=[...Sc(r),...Oc(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Fs(s))}else e!==void 0&&r.push(Fs(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:xr).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:xr;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Yi)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},xt[qt("elementProperties")]=new Map,xt[qt("finalized")]=new Map,wi==null||wi({ReactiveElement:xt}),(tt.reactiveElementVersions??(tt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis,_r=Yt.trustedTypes,Hs=_r?_r.createPolicy("lit-html",{createHTML:t=>t}):void 0,wn="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,xn="?"+et,Lc=`<${xn}>`,ut=document,Xt=()=>ut.createComment(""),Qt=t=>t===null||typeof t!="object"&&typeof t!="function",_n=Array.isArray,Rc=t=>_n(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",xi=`[ 	
\f\r]`,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ns=/-->/g,Us=/>/g,lt=RegExp(`>|${xi}(?:([^\\s"'>=/]+)(${xi}*=${xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vs=/'/g,Is=/"/g,$n=/^(?:script|style|textarea|title)$/i,Fc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),R=Fc(1),Et=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Ws=new WeakMap,ht=ut.createTreeWalker(ut,129);function Cn(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hs!==void 0?Hs.createHTML(e):e}const jc=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=It;for(let l=0;l<r;l++){const u=t[l];let d,f,g=-1,w=0;for(;w<u.length&&(a.lastIndex=w,f=a.exec(u),f!==null);)w=a.lastIndex,a===It?f[1]==="!--"?a=Ns:f[1]!==void 0?a=Us:f[2]!==void 0?($n.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=lt):f[3]!==void 0&&(a=lt):a===lt?f[0]===">"?(a=s??It,g=-1):f[1]===void 0?g=-2:(g=a.lastIndex-f[2].length,d=f[1],a=f[3]===void 0?lt:f[3]==='"'?Is:Vs):a===Is||a===Vs?a=lt:a===Ns||a===Us?a=It:(a=lt,s=void 0);const x=a===lt&&t[l+1].startsWith("/>")?" ":"";n+=a===It?u+Lc:g>=0?(i.push(d),u.slice(0,g)+wn+u.slice(g)+et+x):u+et+(g===-2?l:x)}return[Cn(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class Zt{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,u=this.parts,[d,f]=jc(e,r);if(this.el=Zt.createElement(d,i),ht.currentNode=this.el.content,r===2){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=ht.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(wn)){const w=f[a++],x=s.getAttribute(g).split(et),C=/([.?@])?(.*)/.exec(w);u.push({type:1,index:n,name:C[2],strings:x,ctor:C[1]==="."?Hc:C[1]==="?"?Nc:C[1]==="@"?Uc:Lr}),s.removeAttribute(g)}else g.startsWith(et)&&(u.push({type:6,index:n}),s.removeAttribute(g));if($n.test(s.tagName)){const g=s.textContent.split(et),w=g.length-1;if(w>0){s.textContent=_r?_r.emptyScript:"";for(let x=0;x<w;x++)s.append(g[x],Xt()),ht.nextNode(),u.push({type:2,index:++n});s.append(g[w],Xt())}}}else if(s.nodeType===8)if(s.data===xn)u.push({type:2,index:n});else{let g=-1;for(;(g=s.data.indexOf(et,g+1))!==-1;)u.push({type:7,index:n}),g+=et.length-1}n++}}static createElement(e,r){const i=ut.createElement("template");return i.innerHTML=e,i}}function kt(t,e,r=t,i){var a,l;if(e===Et)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=Qt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=kt(t,s._$AS(t,e.values),s,i)),e}class Bc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ut).importNode(r,!0);ht.currentNode=s;let n=ht.nextNode(),a=0,l=0,u=i[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new rr(n,n.nextSibling,this,e):u.type===1?d=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(d=new Vc(n,this,e)),this._$AV.push(d),u=i[++l]}a!==(u==null?void 0:u.index)&&(n=ht.nextNode(),a++)}return ht.currentNode=ut,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class rr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=kt(this,e,r),Qt(e)?e===J||e==null||e===""?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Rc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==J&&Qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ut.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Zt.createElement(Cn(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new Bc(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=Ws.get(e.strings);return r===void 0&&Ws.set(e.strings,r=new Zt(e)),r}k(e){_n(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new rr(this.S(Xt()),this.S(Xt()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Lr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=kt(this,e,r,0),a=!Qt(e)||e!==this._$AH&&e!==Et,a&&(this._$AH=e);else{const l=e;let u,d;for(e=n[0],u=0;u<n.length-1;u++)d=kt(this,l[i+u],r,u),d===Et&&(d=this._$AH[u]),a||(a=!Qt(d)||d!==this._$AH[u]),d===J?e=J:e!==J&&(e+=(d??"")+n[u+1]),this._$AH[u]=d}a&&!s&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Hc extends Lr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}class Nc extends Lr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class Uc extends Lr{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=kt(this,e,r,0)??J)===Et)return;const i=this._$AH,s=e===J&&i!==J||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==J&&(i===J||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class Vc{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){kt(this,e)}}const _i=Yt.litHtmlPolyfillSupport;_i==null||_i(Zt,rr),(Yt.litHtmlVersions??(Yt.litHtmlVersions=[])).push("3.1.4");const Ic=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new rr(e.insertBefore(Xt(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ne=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ic(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Et}};var en;Ne._$litElement$=!0,Ne.finalized=!0,(en=globalThis.litElementHydrateSupport)==null||en.call(globalThis,{LitElement:Ne});const $i=globalThis.litElementPolyfillSupport;$i==null||$i({LitElement:Ne});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wc={attribute:!0,type:String,converter:xr,reflect:!1,hasChanged:Yi},qc=(t=Wc,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,u,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const u=this[a];e.call(this,l),this.requestUpdate(a,u,t)}}throw Error("Unsupported decorator location: "+i)};function re(t){return(e,r)=>typeof r=="object"?qc(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(t){return re({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Rr(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Yc(e,r,{get(){var u;const a=(u=this.renderRoot)==null?void 0:u.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}class An extends Ne{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),Ni.version,this.hash].join("__")}log(...e){console.log(this.identificator,...e)}}const Pn="manager",En="registry",kn="group",Tn="group";var zc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Sn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zc(e,r,s),s};let $r=class extends An{constructor(){super(...arguments),this.manager=new bn}getClassName(){return"ThermalManagerElement"}render(){return R`
            <slot></slot>
        `}};$r.styles=be`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;Sn([Cc({context:Pn})],$r.prototype,"manager",2);$r=Sn([ae("thermal-manager")],$r);class zi extends An{constructor(){super(...arguments),this._injectedManager=new Dr(this,{context:Pn,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new bn}}var Xc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,On=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xc(e,r,s),s};let Kt=class extends zi{constructor(){super(...arguments),this.uuid=Kt.DEFAULT_NAME,this.provider=new Gt(this,{context:En,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const t=this.manager.addOrGetRegistry(this.uuid);this.provider.setValue(t,!0)}render(){return R`
            <slot></slot>
        `}};Kt.DEFAULT_NAME="default_registry";On([re({type:String,attribute:!0,reflect:!0})],Kt.prototype,"uuid",2);Kt=On([ae("thermal-registry")],Kt);var Zc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,Mn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Kc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zc(e,r,s),s};class We extends zi{constructor(){super(...arguments),this._injectedRegistry=new Dr(this,{context:En,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}Mn([pe()],We.prototype,"_registry",2);Mn([pe()],We.prototype,"registry",1);var Jc=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,Fr=(t,e,r,i)=>{for(var s=i>1?void 0:i?eh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Jc(e,r,s),s};let dt=class extends We{constructor(){super(...arguments),this.uuid=dt.DEFAULT_NAME,this.provider=new Gt(this,{context:kn,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.provider.setValue(this.group,!0)}updated(t){t.has("name")&&this.log(t,this.name)}render(){return R`
            <slot></slot>
        `}};dt.DEFAULT_NAME="default_group";Fr([re({type:String,attribute:!0,reflect:!0})],dt.prototype,"uuid",2);Fr([re({type:String,attribute:!0,reflect:!0})],dt.prototype,"name",2);Fr([re({type:String,attribute:!0,reflect:!0})],dt.prototype,"description",2);dt=Fr([ae("thermal-group")],dt);class Gi extends We{constructor(){super(...arguments),this._injectedGroup=new Dr(this,{context:kn,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const th=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rh={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ih=t=>(...e)=>({_$litDirective$:t,values:e});class sh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),zt(s,e);return!0},Cr=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Dn=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),oh(e)}};function nh(t){this._$AN!==void 0?(Cr(this),this._$AM=t,Dn(this)):this._$AM=t}function ah(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)zt(i[n],!1),Cr(i[n]);else i!=null&&(zt(i,!1),Cr(i));else zt(this,t)}const oh=t=>{t.type==rh.CHILD&&(t._$AP??(t._$AP=ah),t._$AQ??(t._$AQ=nh))};class lh extends sh{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),Dn(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(zt(this,e),Cr(this))}setValue(e){if(th(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=()=>new ch;class ch{}const Ci=new WeakMap,$e=ih(class extends lh{render(t){return J}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),J}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=Ci.get(e);r===void 0&&(r=new WeakMap,Ci.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=Ci.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var hh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Xe=(t,e,r,i)=>{for(var s=i>1?void 0:i?uh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hh(e,r,s),s};let Re=class extends Gi{constructor(){super(),this.canvasContainer=_e(),this.errors=[],this.provider=new Gt(this,{context:Tn,initialValue:void 0})}getClassName(){return"FileContextElement"}onFileChanged(t,e){console.log(t,e)}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}enqueueInTheRegistry(){if(this.thermal){const t=(e,r)=>{e?(this.log("file loaded",this.thermal),this.provider.setValue(e),this.file=e,this.errors=[]):r&&(this.errors=r.split("+|+"))};this.group.instances.enqueueAdd(this.thermal,this.visible,t.bind(this))}}willUpdate(t){super.willUpdate(t),t.has("thermal")||t.has("visible"),t.has("file")&&this.file&&this.file.unmountFromDom()}update(t){var e,r;if(super.update(t),t.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(e=this.file)==null||e.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return R`

            
        ${this.barElements.length>=0?R`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?R`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?R`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${$e(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?R`
                <div class="errors">
                    <div class="wrapper">

                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                    </div>

                    <div>
                        File loading error
                    </div>

                    <div class="url">
                        ${this.thermal}
                    </div>

                        <thermal-dialog-component label="Loading error">

                            <thermal-button slot="invoker">Info</thermal-button>

                            <div slot="content">
                            
                                <dl>
                                    <dt>URL:</dt>
                                    <dd>${this.thermal}</dd>
                                    <dt>Errors:</dt>
                                    <ul>
                                    ${this.errors.map(t=>R`<li>${t}</li>`)}
                                    </ul>
                                </dl>
                            
                            </div>
                        
                        
                        </thermal-dialog-component>

                    </div>
                </div>    
            `:""}
            <slot></slot>

            </div>
        </div>
        
        `}};Re.styles=be`

        @keyframes gradient {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .container {

            box-sizing: border-box;
            width: 100%;
            aspect-ratio: 4 / 3;
        
            margin: 0;
            padding: 0;
        
            position: relative;

            background: var( --thermal-slate-light );

            color: var( --thermal-foreground );

            font-size: var( --thermal-fs );

        }

        .errors {
            box-sizing: border-box;
            padding: var( --thermal-gap );
            width: 100%;
            height: 100%;
            margin: 0;
            background: var( --thermal-slate-light );
            color: var( --thermal-foreground );

            .wrapper {
            
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: calc( var( --thermal-gap ) * 0.5 );

                box-sizing: border-box;
                width: 100%;
                height: 100%;

                border: 2px dashed var( --thermal-slate-dark );
                border-radius: calc( var( --thermal-radius ) * 2 );

                padding: var( --thermal-gap );

            }

            .icon {
                width: 1.5rem;
            }

            .url {
                font-size: small;
                color: var( --thermal-slate-dark );
            }

            .error-button {
                margin: 0;
                padding: 0;
                background: transparent;
                min-width: 2rem;
                border: 0;
                cursor: pointer;
                font-size: small;
                color: var( --thermal-slate-dark );
                border-bottom: 1px dotted var( --thermal-slate-dark );
            }        

        }

        .bar {
            padding-bottom: calc( var( --thermal-gap ) * 0.5 );
            display: flex;
            gap: 5px;
            align-items: center;
        }

            /* HTML: <div class="loader"></div> */

        .placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var( --thermal-slate );
        }
        .loader {
        width: calc( var( --thermal-gap ) * 2);
        aspect-ratio: 1;
        --c: no-repeat linear-gradient(var(--thermal-background) calc(50% - 10px),#0000 0 calc(50% + 10px),var(--thermal-background) 0);
        background: 
            var(--c) 0%   100%,
            var(--c) 50%  100%,
            var(--c) 100% 100%;
        background-size: 20% calc(200% + 20px);
        animation:l4 1s infinite linear;
        }
        @keyframes l4 {
            33%  {background-position: 0% 50%,50% 100%,100% 100%}
            50%  {background-position: 0%  0%,50%  50%,100% 100%}
            66%  {background-position: 0%  0%,50%   0%,100%  50%}
            100% {background-position: 0%  0%,50%   0%,100%   0%}
        }
    
    `;Xe([re({type:String,reflect:!0})],Re.prototype,"thermal",2);Xe([re({type:String,reflect:!0})],Re.prototype,"visible",2);Xe([re({type:Object})],Re.prototype,"file",2);Xe([pe()],Re.prototype,"errors",2);Xe([Rr({slot:"bar",flatten:!0})],Re.prototype,"barItems",2);Xe([pe()],Re.prototype,"provider",2);Xe([Rr({slot:"bar",flatten:!0})],Re.prototype,"barElements",2);Xe([Rr({slot:"pre",flatten:!0})],Re.prototype,"pre",2);Re=Xe([ae("thermal-image")],Re);var dh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,Ln=(t,e,r,i)=>{for(var s=i>1?void 0:i?ph(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&dh(e,r,s),s};let Ar=class extends Ne{constructor(){super(),this.dialogRef=_e(),this.closeButtonRef=_e(),this.invokerRef=_e()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return R`
            <slot name="invoker" ${$e(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${$e(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${$e(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Ar.styles=be`

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
            flex-wrap: no-wrap;
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

        
    
    `;Ln([re({type:String,reflect:!0})],Ar.prototype,"label",2);Ar=Ln([ae("thermal-dialog")],Ar);var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,Xi=(t,e,r,i)=>{for(var s=i>1?void 0:i?gh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&mh(e,r,s),s};let pt=class extends Ne{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return R`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};pt.VARIANTS=["slate","primary","foreground","background"];pt.styles=be`

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
        

        &:hover {
            box-shadow: var( --thermal-shadow );
        }

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
    
    `;Xi([re({type:String,converter:{fromAttribute:t=>pt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],pt.prototype,"variant",2);Xi([re({type:String})],pt.prototype,"size",2);pt=Xi([ae("thermal-button")],pt);const Tt=Math.min,Ye=Math.max,Pr=Math.round,rt=t=>({x:t,y:t}),fh={left:"right",right:"left",bottom:"top",top:"bottom"},bh={start:"end",end:"start"};function qs(t,e,r){return Ye(t,Tt(e,r))}function ir(t,e){return typeof t=="function"?t(e):t}function ze(t){return t.split("-")[0]}function jr(t){return t.split("-")[1]}function Rn(t){return t==="x"?"y":"x"}function Fn(t){return t==="y"?"height":"width"}function sr(t){return["top","bottom"].includes(ze(t))?"y":"x"}function jn(t){return Rn(sr(t))}function vh(t,e,r){r===void 0&&(r=!1);const i=jr(t),s=jn(t),n=Fn(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=Er(a)),[a,Er(a)]}function yh(t){const e=Er(t);return[Di(t),e,Di(e)]}function Di(t){return t.replace(/start|end/g,e=>bh[e])}function wh(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function xh(t,e,r,i){const s=jr(t);let n=wh(ze(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Di)))),n}function Er(t){return t.replace(/left|right|bottom|top/g,e=>fh[e])}function _h(t){return{top:0,right:0,bottom:0,left:0,...t}}function Bn(t){return typeof t!="number"?_h(t):{top:t,right:t,bottom:t,left:t}}function St(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Ys(t,e,r){let{reference:i,floating:s}=t;const n=sr(e),a=jn(e),l=Fn(a),u=ze(e),d=n==="y",f=i.x+i.width/2-s.width/2,g=i.y+i.height/2-s.height/2,w=i[l]/2-s[l]/2;let x;switch(u){case"top":x={x:f,y:i.y-s.height};break;case"bottom":x={x:f,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:g};break;case"left":x={x:i.x-s.width,y:g};break;default:x={x:i.x,y:i.y}}switch(jr(e)){case"start":x[a]-=w*(r&&d?-1:1);break;case"end":x[a]+=w*(r&&d?-1:1);break}return x}const $h=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:f,y:g}=Ys(d,i,u),w=i,x={},C=0;for(let _=0;_<l.length;_++){const{name:D,fn:z}=l[_],{x:I,y:Q,data:ee,reset:Z}=await z({x:f,y:g,initialPlacement:i,placement:w,strategy:s,middlewareData:x,rects:d,platform:a,elements:{reference:t,floating:e}});f=I??f,g=Q??g,x={...x,[D]:{...x[D],...ee}},Z&&C<=50&&(C++,typeof Z=="object"&&(Z.placement&&(w=Z.placement),Z.rects&&(d=Z.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):Z.rects),{x:f,y:g}=Ys(d,w,u)),_=-1)}return{x:f,y:g,placement:w,strategy:s,middlewareData:x}};async function Hn(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:w=!1,padding:x=0}=ir(e,t),C=Bn(x),D=l[w?g==="floating"?"reference":"floating":g],z=St(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(D)))==null||r?D:D.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:f,strategy:u})),I=g==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,Q=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),ee=await(n.isElement==null?void 0:n.isElement(Q))?await(n.getScale==null?void 0:n.getScale(Q))||{x:1,y:1}:{x:1,y:1},Z=St(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:I,offsetParent:Q,strategy:u}):I);return{top:(z.top-Z.top+C.top)/ee.y,bottom:(Z.bottom-z.bottom+C.bottom)/ee.y,left:(z.left-Z.left+C.left)/ee.x,right:(Z.right-z.right+C.right)/ee.x}}const Ch=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:u,elements:d}=e,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:w,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:_=!0,...D}=ir(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const z=ze(s),I=ze(l)===l,Q=await(u.isRTL==null?void 0:u.isRTL(d.floating)),ee=w||(I||!_?[Er(l)]:yh(l));!w&&C!=="none"&&ee.push(...xh(l,_,C,Q));const Z=[l,...ee],ye=await Hn(e,D),L=[];let te=((i=n.flip)==null?void 0:i.overflows)||[];if(f&&L.push(ye[z]),g){const W=vh(s,a,Q);L.push(ye[W[0]],ye[W[1]])}if(te=[...te,{placement:s,overflows:L}],!L.every(W=>W<=0)){var me,se;const W=(((me=n.flip)==null?void 0:me.index)||0)+1,oe=Z[W];if(oe)return{data:{index:W,overflows:te},reset:{placement:oe}};let G=(se=te.filter(p=>p.overflows[0]<=0).sort((p,v)=>p.overflows[1]-v.overflows[1])[0])==null?void 0:se.placement;if(!G)switch(x){case"bestFit":{var ge;const p=(ge=te.map(v=>[v.placement,v.overflows.filter(T=>T>0).reduce((T,q)=>T+q,0)]).sort((v,T)=>v[1]-T[1])[0])==null?void 0:ge[0];p&&(G=p);break}case"initialPlacement":G=l;break}if(s!==G)return{reset:{placement:G}}}return{}}}};function Nn(t){const e=Tt(...t.map(n=>n.left)),r=Tt(...t.map(n=>n.top)),i=Ye(...t.map(n=>n.right)),s=Ye(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function Ah(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>St(Nn(s)))}const Ph=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:u,y:d}=ir(t,e),f=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),g=Ah(f),w=St(Nn(f)),x=Bn(l);function C(){if(g.length===2&&g[0].left>g[1].right&&u!=null&&d!=null)return g.find(D=>u>D.left-x.left&&u<D.right+x.right&&d>D.top-x.top&&d<D.bottom+x.bottom)||w;if(g.length>=2){if(sr(r)==="y"){const se=g[0],ge=g[g.length-1],W=ze(r)==="top",oe=se.top,G=ge.bottom,p=W?se.left:ge.left,v=W?se.right:ge.right,T=v-p,q=G-oe;return{top:oe,bottom:G,left:p,right:v,width:T,height:q,x:p,y:oe}}const D=ze(r)==="left",z=Ye(...g.map(se=>se.right)),I=Tt(...g.map(se=>se.left)),Q=g.filter(se=>D?se.left===I:se.right===z),ee=Q[0].top,Z=Q[Q.length-1].bottom,ye=I,L=z,te=L-ye,me=Z-ee;return{top:ee,bottom:Z,left:ye,right:L,width:te,height:me,x:ye,y:ee}}return w}const _=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:a});return s.reference.x!==_.reference.x||s.reference.y!==_.reference.y||s.reference.width!==_.reference.width||s.reference.height!==_.reference.height?{reset:{rects:_}}:{}}}};async function Eh(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=ze(r),l=jr(r),u=sr(r)==="y",d=["left","top"].includes(a)?-1:1,f=n&&u?-1:1,g=ir(e,t);let{mainAxis:w,crossAxis:x,alignmentAxis:C}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return l&&typeof C=="number"&&(x=l==="end"?C*-1:C),u?{x:x*f,y:w*d}:{x:w*d,y:x*f}}const kh=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,u=await Eh(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+u.x,y:n+u.y,data:{...u,placement:a}}}}},Th=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:D=>{let{x:z,y:I}=D;return{x:z,y:I}}},...u}=ir(t,e),d={x:r,y:i},f=await Hn(e,u),g=sr(ze(s)),w=Rn(g);let x=d[w],C=d[g];if(n){const D=w==="y"?"top":"left",z=w==="y"?"bottom":"right",I=x+f[D],Q=x-f[z];x=qs(I,x,Q)}if(a){const D=g==="y"?"top":"left",z=g==="y"?"bottom":"right",I=C+f[D],Q=C-f[z];C=qs(I,C,Q)}const _=l.fn({...e,[w]:x,[g]:C});return{..._,data:{x:_.x-r,y:_.y-i}}}}};function jt(t){return Un(t)?(t.nodeName||"").toLowerCase():"#document"}function ke(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(Un(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Un(t){return t instanceof Node||t instanceof ke(t).Node}function Ue(t){return t instanceof Element||t instanceof ke(t).Element}function Ve(t){return t instanceof HTMLElement||t instanceof ke(t).HTMLElement}function zs(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ke(t).ShadowRoot}function nr(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=Fe(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function Sh(t){return["table","td","th"].includes(jt(t))}function Br(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Qi(t){const e=Zi(),r=Fe(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Oh(t){let e=it(t);for(;Ve(e)&&!Ot(e);){if(Br(e))return null;if(Qi(e))return e;e=it(e)}return null}function Zi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ot(t){return["html","body","#document"].includes(jt(t))}function Fe(t){return ke(t).getComputedStyle(t)}function Hr(t){return Ue(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function it(t){if(jt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||zs(t)&&t.host||st(t);return zs(e)?e.host:e}function Vn(t){const e=it(t);return Ot(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ve(e)&&nr(e)?e:Vn(e)}function Li(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Vn(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=ke(s);return n?e.concat(a,a.visualViewport||[],nr(s)?s:[],a.frameElement&&r?Li(a.frameElement):[]):e.concat(s,Li(s,[],r))}function In(t){const e=Fe(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ve(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=Pr(r)!==n||Pr(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function Wn(t){return Ue(t)?t:t.contextElement}function Ct(t){const e=Wn(t);if(!Ve(e))return rt(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=In(e);let a=(n?Pr(r.width):r.width)/i,l=(n?Pr(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Mh=rt(0);function qn(t){const e=ke(t);return!Zi()||!e.visualViewport?Mh:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Dh(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==ke(t)?!1:e}function Jt(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Wn(t);let a=rt(1);e&&(i?Ue(i)&&(a=Ct(i)):a=Ct(t));const l=Dh(n,r,i)?qn(n):rt(0);let u=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,f=s.width/a.x,g=s.height/a.y;if(n){const w=ke(n),x=i&&Ue(i)?ke(i):i;let C=w,_=C.frameElement;for(;_&&i&&x!==C;){const D=Ct(_),z=_.getBoundingClientRect(),I=Fe(_),Q=z.left+(_.clientLeft+parseFloat(I.paddingLeft))*D.x,ee=z.top+(_.clientTop+parseFloat(I.paddingTop))*D.y;u*=D.x,d*=D.y,f*=D.x,g*=D.y,u+=Q,d+=ee,C=ke(_),_=C.frameElement}}return St({width:f,height:g,x:u,y:d})}function Lh(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=st(i),l=e?Br(e.floating):!1;if(i===a||l&&n)return r;let u={scrollLeft:0,scrollTop:0},d=rt(1);const f=rt(0),g=Ve(i);if((g||!g&&!n)&&((jt(i)!=="body"||nr(a))&&(u=Hr(i)),Ve(i))){const w=Jt(i);d=Ct(i),f.x=w.x+i.clientLeft,f.y=w.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+f.x,y:r.y*d.y-u.scrollTop*d.y+f.y}}function Rh(t){return Array.from(t.getClientRects())}function Yn(t){return Jt(st(t)).left+Hr(t).scrollLeft}function Fh(t){const e=st(t),r=Hr(t),i=t.ownerDocument.body,s=Ye(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=Ye(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+Yn(t);const l=-r.scrollTop;return Fe(i).direction==="rtl"&&(a+=Ye(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function jh(t,e){const r=ke(t),i=st(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,u=0;if(s){n=s.width,a=s.height;const d=Zi();(!d||d&&e==="fixed")&&(l=s.offsetLeft,u=s.offsetTop)}return{width:n,height:a,x:l,y:u}}function Bh(t,e){const r=Jt(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Ve(t)?Ct(t):rt(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,u=s*n.x,d=i*n.y;return{width:a,height:l,x:u,y:d}}function Gs(t,e,r){let i;if(e==="viewport")i=jh(t,r);else if(e==="document")i=Fh(st(t));else if(Ue(e))i=Bh(e,r);else{const s=qn(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return St(i)}function zn(t,e){const r=it(t);return r===e||!Ue(r)||Ot(r)?!1:Fe(r).position==="fixed"||zn(r,e)}function Hh(t,e){const r=e.get(t);if(r)return r;let i=Li(t,[],!1).filter(l=>Ue(l)&&jt(l)!=="body"),s=null;const n=Fe(t).position==="fixed";let a=n?it(t):t;for(;Ue(a)&&!Ot(a);){const l=Fe(a),u=Qi(a);!u&&l.position==="fixed"&&(s=null),(n?!u&&!s:!u&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||nr(a)&&!u&&zn(t,a))?i=i.filter(f=>f!==a):s=l,a=it(a)}return e.set(t,i),i}function Nh(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?Br(e)?[]:Hh(e,this._c):[].concat(r),i],l=a[0],u=a.reduce((d,f)=>{const g=Gs(e,f,s);return d.top=Ye(g.top,d.top),d.right=Tt(g.right,d.right),d.bottom=Tt(g.bottom,d.bottom),d.left=Ye(g.left,d.left),d},Gs(e,l,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Uh(t){const{width:e,height:r}=In(t);return{width:e,height:r}}function Vh(t,e,r){const i=Ve(e),s=st(e),n=r==="fixed",a=Jt(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const u=rt(0);if(i||!i&&!n)if((jt(e)!=="body"||nr(s))&&(l=Hr(e)),i){const g=Jt(e,!0,n,e);u.x=g.x+e.clientLeft,u.y=g.y+e.clientTop}else s&&(u.x=Yn(s));const d=a.left+l.scrollLeft-u.x,f=a.top+l.scrollTop-u.y;return{x:d,y:f,width:a.width,height:a.height}}function Ai(t){return Fe(t).position==="static"}function Xs(t,e){return!Ve(t)||Fe(t).position==="fixed"?null:e?e(t):t.offsetParent}function Gn(t,e){const r=ke(t);if(Br(t))return r;if(!Ve(t)){let s=it(t);for(;s&&!Ot(s);){if(Ue(s)&&!Ai(s))return s;s=it(s)}return r}let i=Xs(t,e);for(;i&&Sh(i)&&Ai(i);)i=Xs(i,e);return i&&Ot(i)&&Ai(i)&&!Qi(i)?r:i||Oh(t)||r}const Ih=async function(t){const e=this.getOffsetParent||Gn,r=this.getDimensions,i=await r(t.floating);return{reference:Vh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Wh(t){return Fe(t).direction==="rtl"}const qh={convertOffsetParentRelativeRectToViewportRelativeRect:Lh,getDocumentElement:st,getClippingRect:Nh,getOffsetParent:Gn,getElementRects:Ih,getClientRects:Rh,getDimensions:Uh,getScale:Ct,isElement:Ue,isRTL:Wh},Yh=kh,zh=Th,Gh=Ch,Xh=Ph,Qh=(t,e,r)=>{const i=new Map,s={platform:qh,...r},n={...s.platform,_c:i};return $h(t,e,{...s,platform:n})};var Zh=Object.defineProperty,Kh=Object.getOwnPropertyDescriptor,Nr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Kh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Zh(e,r,s),s};let Mt=class extends Ne{constructor(){super(...arguments),this.dropdownRef=_e(),this.invokerRef=_e(),this.optionsRef=_e(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Qh(this.invokerRef.value,this.optionsRef.value,{middleware:[Yh(2),Gh(),Xh(),zh()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return R`

            <div class="dropdown" ${$e(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${$e(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?R`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:R`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${$e(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Mt.styles=be`

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
    
    `;Nr([Rr({slot:"option"})],Mt.prototype,"_options",2);Nr([re({type:String,reflect:!0})],Mt.prototype,"open",2);Nr([re({type:String,reflect:!0})],Mt.prototype,"variant",2);Mt=Nr([ae("thermal-dropdown")],Mt);var Jh=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,Ur=(t,e,r,i)=>{for(var s=i>1?void 0:i?eu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Jh(e,r,s),s};let Dt=class extends Ne{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=_e(),this.contentRef=_e(),this.rulerContentRef=_e()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return R`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${$e(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${$e(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${$e(this.contentRef)}>

                    ${this.collapsed===!1?R`
                        <slot></slot>    
                    `:J}
                
                </div>

            </div>

            ${this.collapsed?R`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:J}
        
        `}};Dt.styles=be`

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

    `;Ur([pe()],Dt.prototype,"collapsed",2);Ur([pe()],Dt.prototype,"lastContentWidth",2);Ur([pe()],Dt.prototype,"drawerRef",2);Dt=Ur([ae("thermal-bar")],Dt);var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,Xn=(t,e,r,i)=>{for(var s=i>1?void 0:i?ru(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tu(e,r,s),s};let kr=class extends zi{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.manager.palette.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(t){this.manager.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return R`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return R`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(fn).map(([t,e])=>R`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};kr.styles=be`

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

    `;Xn([re({type:String,reflect:!0,attribute:!0})],kr.prototype,"value",2);kr=Xn([ae("thermal-palette")],kr);var iu=Object.defineProperty,su=Object.getOwnPropertyDescriptor,Qn=(t,e,r,i)=>{for(var s=i>1?void 0:i?su(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&iu(e,r,s),s};let Tr=class extends We{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return R`
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
        `}};Tr.styles=be`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;Qn([re({type:Number,reflect:!0,attribute:!0})],Tr.prototype,"value",2);Tr=Qn([ae("thermal-opacity")],Tr);var nu=Object.defineProperty,au=Object.getOwnPropertyDescriptor,ou=(t,e,r,i)=>{for(var s=i>1?void 0:i?au(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&nu(e,r,s),s};let Qs=class extends We{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return R`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};Qs=ou([ae("thermal-range-auto")],Qs);var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,hu=(t,e,r,i)=>{for(var s=i>1?void 0:i?cu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&lu(e,r,s),s};let Zs=class extends We{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return R`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};Zs=hu([ae("thermal-range-minmax")],Zs);var uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,Vr=(t,e,r,i)=>{for(var s=i>1?void 0:i?du(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&uu(e,r,s),s};class Qe extends Gi{constructor(){super(...arguments),this._injectedFile=new Dr(this,{context:Tn,subscribe:!0}),this.ready=!1}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}update(e){return super.update(e),!0}}Vr([pe()],Qe.prototype,"_injectedFile",2);Vr([pe()],Qe.prototype,"_file",2);Vr([pe()],Qe.prototype,"file",1);Vr([pe()],Qe.prototype,"ready",2);var pu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,gu=(t,e,r,i)=>{for(var s=i>1?void 0:i?mu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&pu(e,r,s),s};let Ri=class extends Qe{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}onFileLoaded(){}render(){var t,e,r,i,s,n,a,l,u,d,f,g,w;return R`
            <thermal-dialog label="File info">
                <thermal-button slot="invoker">File info</thermal-button>
                <div slot="content">

                    <table>
                        <tr>
                            <td>File name</td>
                            <td>${(t=this._injectedFile.value)==null?void 0:t.fileName}</td>
                        </tr>
                        <tr>
                            <td>Thermal file URL</td>
                            <td>${(e=this._injectedFile.value)==null?void 0:e.url}
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&R`
                                    <a href="${this._injectedFile.value.url}" target="_blank" class="download">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                        </svg>


                                    </a>
                                `}
                            </td>
                        </tr>
                        <tr>
                            <td>Visible file URL</td>
                            <td>${((i=this._injectedFile.value)==null?void 0:i.visibleUrl)??"-"}
                            ${((s=this._injectedFile.value)==null?void 0:s.visibleUrl)&&R`
                                <a href="${this._injectedFile.value.visibleUrl}" target="_blank" class="download">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                    </svg>


                                </a>
                            `}
                            </td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>${((n=this._injectedFile.value)==null?void 0:n.timestamp)&&xc.human(this._injectedFile.value.timestamp)}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>${(a=this._injectedFile.value)==null?void 0:a.width} x ${(l=this._injectedFile.value)==null?void 0:l.height} px <small>(${(u=this._injectedFile.value)==null?void 0:u.pixels.length} pixels)</small></td>
                        </tr>
                        <tr>
                            <td>Signature</td>
                            <td>${(d=this._injectedFile.value)==null?void 0:d.signature}</td>
                        </tr>
                        <tr>
                            <td>Frames</td>
                            <td>${(f=this._injectedFile.value)==null?void 0:f.frames.length}</td>
                        </tr>
                        <tr>
                            <td>Duration</td>
                            <td>${this._injectedFile.value?this._injectedFile.value.duration/1e3:0} s</td>
                        </tr>
                        <tr>
                            <td>FPS</td>
                            <td>${this._injectedFile.value?this._injectedFile.value.frames.length===1?"-":60*1e4/this._injectedFile.value.duration+" s":"-"}</td>
                        </tr>
                        <tr>
                            <td>Unit</td>
                            <td>${(g=this._injectedFile.value)==null?void 0:g.unitHuman}</td>
                        </tr>
                        <tr>
                            <td>Data type</td>
                            <td>${(w=this._injectedFile.value)==null?void 0:w.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `}};Ri.styles=be`

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
    
    `;Ri=gu([ae("thermal-file-info")],Ri);var fu=Object.defineProperty,bu=Object.getOwnPropertyDescriptor,vu=(t,e,r,i)=>{for(var s=i>1?void 0:i?bu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&fu(e,r,s),s};let Fi=class extends Ne{render(){return R`
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
                        <p>version ${Ni.version}</p>
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
        `}};Fi.styles=be`

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
    
    `;Fi=vu([ae("thermal-app-info")],Fi);var yu=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,xu=(t,e,r,i)=>{for(var s=i>1?void 0:i?wu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&yu(e,r,s),s};let ji=class extends Qe{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return R`

            <thermal-button variant="foreground">
            ${this._injectedFile.value?this._injectedFile.value.fileName:"Loading..."}
            </thermal-button>

            <!--
            
            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value?this._injectedFile.value.fileName:"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>{var t;return window.open((t=this._injectedFile.value)==null?void 0:t.url)}}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportAsPng()}}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportThermalDataAsSvg()}}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

            -->

        
        `}};ji.styles=be`

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
    
    `;ji=xu([ae("thermal-file-name")],ji);var _u=Object.defineProperty,$u=Object.getOwnPropertyDescriptor,Cu=(t,e,r,i)=>{for(var s=i>1?void 0:i?$u(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&_u(e,r,s),s};let Bi=class extends Qe{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return R`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                ${this._injectedFile.value?"Download":"Načítám..."}
                </div>

                    <div slot="option">
                        <thermal-button @click="${()=>{var t;return window.open((t=this._injectedFile.value)==null?void 0:t.url)}}">Download LRC</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportAsPng()}}>Export as PNG</thermal-button>
                    </div>

                    <div slot="option">
                        <thermal-button @click=${()=>{var t;return(t=this._injectedFile.value)==null?void 0:t.exportThermalDataAsSvg()}}>Export CSV with thermal data</thermal-button>
                    </div>
            
            </thermal-dropdown>

        
        `}};Bi.styles=be`

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
    
    `;Bi=Cu([ae("thermal-file-download")],Bi);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,h,b)=>h in o?t(o,h,{enumerable:!0,configurable:!0,writable:!0,value:b}):o[h]=b,i=(o,h,b)=>(r(o,typeof h!="symbol"?h+"":h,b),b),s=(o,h)=>` ${h&&h.length>0?h.map(b=>`<link rel="stylesheet" href="${b}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",d="range-dragging",f="data",g="min",w="max",x="step",C="round",_="type",D="theme",z="rtl",I="btt",Q="disabled",ee="keyboard-disabled",Z="mousewheel-disabled",ye="slider-width",L="slider-height",te="slider-radius",me="slider-bg",se="slider-bg-hover",ge="slider-bg-fill",W="pointer-width",oe="pointer-height",G="pointer-radius",p="pointer-bg",v="pointer-bg-hover",T="pointer-bg-focus",q="pointer-shadow",ie="pointer-shadow-hover",U="pointer-shadow-focus",gt="pointer-border",Yr="pointer-border-hover",Ce="pointer-border-focus",nt="animate-onclick",Kn="css-links",Oe="vertical",ft="horizontal",zr=(o,h,b,m,$)=>{let S=h-o;return S===0?b:(m-b)*($-o)/S+b},qe=o=>!isNaN(parseFloat(o))&&isFinite(o),ue=(o,h)=>qe(o)?Number(o):h,es=(o,h)=>h===0?0:Math.round(o/h)*h,Jn=(o,h=1/0)=>{if(h===1/0)return o;let b=e(10,h);return Math.round(o*b)/b},ve=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",ea=(o,h)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:h}}))},ta=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:h}}))},ra=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:h}}))},ia=(o,h)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:h}}))},sa=(o,h)=>{if(!h||h.length<=0)return;let b=h.map($=>qe($)?ue($,$):$),m={values:b||[]};m.value=b[0],m.value0=b[0],m.value1=b[0];for(let $=1;$<b.length;$++)m[`value${$+1}`]=b[$];o.dispatchEvent(new CustomEvent("change",{detail:m}))},Gr=(o,h,b)=>{let m=0,$,S,F,A,P=!1,j=(M,K,fe,de,le,ce)=>{let Ae=m;fe!==void 0&&M>fe&&(M=fe),K!==void 0&&M<K&&(M=K),m=M;let Pe=m;return(de===Oe&&ce||de===ft&&le)&&(Pe=100-Pe),de===Oe?h.style.top=`${Pe}%`:h.style.left=`${Pe}%`,Ae!==m},H=M=>M===h||h.contains(M),k=(M,K,fe,de)=>{$=M,S=K,F=fe,A=de},Y=M=>{P=M,h.classList.toggle("disabled",P),P?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},Se=(M,K)=>{K==null?h.removeAttribute(M):h.setAttribute(M,K)},we=M=>h.getAttribute(M),O=M=>{if(!P){switch(M.key){case"ArrowLeft":{M.preventDefault(),typeof $=="function"&&$(b);break}case"ArrowRight":{M.preventDefault(),typeof S=="function"&&S(b);break}case"ArrowUp":{M.preventDefault(),typeof F=="function"&&F(b);break}case"ArrowDown":{M.preventDefault(),typeof A=="function"&&A(b);break}}ia(o,M)}},B=()=>{P||ea(o,h)};return h.className=`pointer pointer-${b}`,h.addEventListener("keydown",O),h.addEventListener("click",B),{$pointer:h,get percent(){return m},get disabled(){return P},set disabled(M){Y(M)},updatePosition:j,isClicked:H,setCallbacks:k,setAttr:Se,getAttr:we,destroy:()=>{h.removeEventListener("keydown",O),h.removeEventListener("click",B),h.remove()}}},na=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let h=o.split(","),b=[],m=!0;for(let $=0;$<h.length;$++){let S=h[$].trim();S!==""&&(b.push(S),qe(S)||(m=!1))}return m?b.map($=>Number($)):b},aa=(o,h)=>h?h.findIndex(b=>b===o||b.toString().trim()===o.toString().trim()):-1,oa=o=>({updatePosition:(h,b,m,$)=>{if(b.length<=0)return;let S=b.length===1,F=b[0],A=b[b.length-1];h===Oe?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),S?o.style.height=`${F}%`:o.style.height=`${Math.abs(F-A)}%`,$?(o.style.bottom="0%",S?o.style.top="auto":o.style.top=`${Math.min(100-A,100-F)}%`):(o.style.bottom="auto",S?o.style.top="0%":o.style.top=`${Math.min(F,A)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),S?o.style.width=`${F}%`:o.style.width=`${Math.abs(F-A)}%`,m?(o.style.right="0%",S?o.style.left="auto":o.style.left=`${Math.min(100-A,100-F)}%`):(o.style.right="auto",S?o.style.left="0%":o.style.left=`${Math.min(F,A)}%`))}}),ts="--animate-onclick",la="--width",ca="--height",ha="--panel-bg-border-radius",ua="--panel-bg",da="--panel-bg-hover",pa="--panel-bg-fill",ma="--pointer-width",ga="--pointer-height",fa="--pointer-border-radius",ba="--pointer-bg",va="--pointer-bg-hover",ya="--pointer-bg-focus",wa="--pointer-shadow",xa="--pointer-shadow-hover",_a="--pointer-shadow-focus",$a="--pointer-border",Ca="--pointer-border-hover",Aa="--pointer-border-focus",ar=(o,h,b)=>{let m=new Map;for(let $ of o.attributes){let S=$.nodeName.trim().toLowerCase();if(!h.test(S))continue;let F=S.replace(/\D/g,"").trim(),A=F===""||F==="0"||F==="1"?0:ue(F,0)-1,P=b&&typeof b=="function"?b($.value):$.value;m.set(A,P)}return m},Pa=o=>{if(!o)return null;let h=o.getAttribute(Kn);if(!h)return null;let b=h.split(";"),m=[];for(let $ of b)$.trim()!==""&&m.push($.trim());return m},rs=[[la,ye,"sliderWidth",null],[ca,L,"sliderHeight",null],[ha,te,"sliderRadius",null],[ua,me,"sliderBg",null],[da,se,"sliderBgHover",null],[pa,ge,"sliderBgFill",null],[ma,W,"pointer#Width",/^pointer([0-9]*)-width$/],[ga,oe,"pointer#Height",/^pointer([0-9]*)-height$/],[fa,G,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ba,p,"pointer#Bg",/^pointer([0-9]*)-bg$/],[va,v,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[ya,T,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[wa,q,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[xa,ie,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[_a,U,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[$a,gt,"pointer#Border",/^pointer([0-9]*)-border$/],[Ca,Yr,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Aa,Ce,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ea=(o,h,b)=>{let m=null,$=[],S=new Map,F=(O,B=h)=>{let M=[...B.classList];for(let K of M)K.startsWith(O)&&h.classList.remove(K)},A=()=>{F("shape");let O=h.querySelectorAll(".pointer");for(let B of O)F("shape",B)},P=O=>{m=O,F("theme-"),typeof O=="string"&&h.classList.add(`theme-${O}`)},j=()=>{if(A(),!($.length<=0)){h.classList.add("shape",`shape-${$[0]}`);for(let O=1;O<$.length;O++){let B=$[O];if(!B)continue;let M=h.querySelector(`.pointer-${O}`);!M||M.classList.add("shape",`shape-${B}`)}}},H=(O,B)=>{$[O]=B,j()},k=()=>{A();let O=ar(o,/^pointer([0-9]*)-shape$/);if(!(O.size<=0)){for(let B of O){let M=B[0];$[M]=B[1]}j()}},Y=(O,B)=>`${O}-${B}`,Se=(O,B,M)=>{let K=b[M];if(!K)return;let fe=M===0?h:K.$pointer;if(B==null){S.has(Y(O,M))&&S.delete(Y(O,M)),fe.style.removeProperty(O);return}S.set(Y(O,M),B),fe.style.setProperty(O,B)},we=(O,B)=>S.get(Y(O,B));return(()=>{for(let O of rs){let[B,M,K,fe]=O;if(fe){let le=ar(o,fe);for(let ce of le){let Ae=ce[0],Pe=ce[1];Se(B,Pe,Ae)}}else{let le=o.getAttribute(M);Se(B,le,0)}let de=[];if(K.indexOf("#")===-1)de.push([K,0]);else{de.push([K.replace("#",""),0]),de.push([K.replace("#","0"),0]),de.push([K.replace("#","1"),0]);for(let le=1;le<b.length;le++)de.push([K.replace("#",(le+1).toString()),le])}for(let le of de)try{let ce=le[0],Ae=le[1];Object.prototype.hasOwnProperty.call(o,ce)||Object.defineProperty(o,ce,{get(){return we(B,Ae)},set:Pe=>{Se(B,Pe,Ae)}})}catch(ce){console.error(ce)}}P(o.getAttribute(D)),k()})(),{setStyle:Se,getStyle:we,get theme(){return m},set theme(O){P(O)},get pointerShapes(){return $},setPointerShape:H}},bt="animate-on-click",is="range-dragging",ka=(o,h,b,m)=>{let $=[],S=H=>{for(let k of $)k.update&&typeof k.update=="function"&&k.update(H)},F=()=>{for(let H of $)H.destroy&&typeof H.destroy=="function"&&H.destroy()},A=(H,k)=>{for(let Y of $)Y.onAttrChange&&typeof Y.onAttrChange=="function"&&Y.onAttrChange(H,k)},P=H=>{if(H.gettersAndSetters){for(let k of H.gettersAndSetters)if(!(!k.name||!k.attributes))try{Object.prototype.hasOwnProperty.call(o,k.name)||Object.defineProperty(o,k.name,k.attributes)}catch(Y){console.error("defineSettersGetters error:",Y)}}},j=H=>{var k;if(!H.css)return;let Y=(k=o.shadowRoot)==null?void 0:k.querySelector("style");!Y||(Y.innerHTML+=H.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let H of window.tcRangeSliderPlugins){let k=H();$.push(k),k.init&&typeof k.init=="function"&&(k.init(o,h,b,m),P(k),j(k))}},update:S,onAttrChange:A,destroy:F}},Ta=10,ss=20,Sa=(o,h)=>{let b=new Map,m=/^value([0-9]*)$/;for(let A of o.attributes){let P=A.nodeName.trim().toLowerCase();if(!m.test(P))continue;let j=P.replace("value","").trim(),H=j===""||j==="0"||j==="1"?0:ue(j,0)-1,k=qe(A.value)?ue(A.value,0):A.value;b.set(H,k)}let $=Math.max(...Array.from(b.keys())),S=[];S.push([Gr(o,h,0),b.get(0)]);let F=h;for(let A=1;A<=$;A++){let P=h.cloneNode(!0);F.after(P),F=P,S.push([Gr(o,P,A),b.get(A)])}return S},ns=(o,h,b,m,$,S,F)=>{try{Object.defineProperty(o,m,{configurable:!0,get(){if(!h)return;let A=h.pointers[b];if(!A)return;let P=h.getTextValue(A.percent);return qe(P)?ue(P,P):P},set:A=>{h.pointers[b]?h==null||h.setValue(A,b):h==null||h.addPointer(A)}}),Object.defineProperty(o,$,{configurable:!0,get(){var A,P;return(P=(A=h==null?void 0:h.pointers[b])==null?void 0:A.getAttr("aria-label"))!=null?P:void 0},set:A=>{!h||h.setAriaLabel(b,A)}}),Object.defineProperty(o,S,{configurable:!0,get(){var A,P;return(P=(A=h==null?void 0:h.styles)==null?void 0:A.pointerShapes[b])!=null?P:null},set:A=>{!h||!h.styles||h.styles.setPointerShape(b,A)}}),Object.defineProperty(o,F,{configurable:!0,get(){var A;return(A=h==null?void 0:h.pointers[b].disabled)!=null?A:!1},set:A=>{if(!h)return;let P=h==null?void 0:h.pointers[b];!P||(P.disabled=A)}})}catch(A){console.error(A)}},Oa=(o,h)=>{let b=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let m=2;m<Ta;m++)b.push([`value${m}`,`ariaLabel${m}`,`pointer${m}Shape`,`pointer${m}Disabled`,m-1]);for(let m of b)ns(o,h,m[4],m[0],m[1],m[2],m[3])},as=(o,h,b)=>{var m;let $=(m=b.shadowRoot)==null?void 0:m.querySelector(".container");if($)for(let S of o)h?$.prepend(S.$pointer):$.append(S.$pointer)},Ma=(o,h)=>{if(!(!h||o.length<=1)){for(let b of o)b.$pointer.style.zIndex=ss.toString();h.$pointer.style.zIndex=(ss*2).toString()}},Xr=0,Bt=100,vt=2,os="0.3s",Da=(o,h,b)=>{let m=b.map(c=>c[0]),$=null,S=null,F=null,A=null,P=Xr,j=Bt,H,k,Y=ft,Se=vt,we=!1,O=!1,B=!1,M=0,K=1/0,fe=!1,de,le,ce=!1,Ae=!1,Pe=!1,Ze=os,ls=[],cs=c=>{ce||(c.preventDefault&&c.preventDefault(),at(c),window.addEventListener("mousemove",at),window.addEventListener("mouseup",or),ta(o,c))},or=c=>{ce||(de=void 0,le=void 0,window.removeEventListener("mousemove",at),window.removeEventListener("mouseup",or),Ze&&h.classList.add(bt),ra(o,c))},Fa=(c,y)=>{if(m.length<=0)return;if(m.length===1)return m[0].isClicked(c)&&Ze&&h.classList.remove(bt),m[0];let E=Ba(c);if(fe){let V=y,Me=cr(V);Me!==void 0&&(V=es(V,Me)),E?(de=V,le=0,Ze&&h.classList.remove(bt)):de!==void 0&&(le=V-de,de=V)}if(!ja(c)&&!E){for(let V of m)if(!(!V.isClicked(c)||V.disabled))return Ze&&h.classList.remove(bt),V;for(let V of m)if($===V)return V}let X=1/0,he=null;for(let V of m){if(V.disabled)continue;let Me=Math.abs(y-V.percent);Me<X&&(X=Me,he=V)}return he},hs=()=>m.findIndex(c=>$===c&&!c.disabled),at=c=>{let y;if(Y===Oe){let{height:X,top:he}=h.getBoundingClientRect(),V=c.type.indexOf("mouse")!==-1?c.clientY:c.touches[0].clientY;y=Math.min(Math.max(0,V-he),X)*100/X}else{let{width:X,left:he}=h.getBoundingClientRect(),V=c.type.indexOf("mouse")!==-1?c.clientX:c.touches[0].clientX;y=Math.min(Math.max(0,V-he),X)*100/X}if((we||O)&&(y=100-y),$=Fa(c.target,y),$&&Ma(m,$),fe&&m.length>1&&le!==void 0){let X=m[0],he=m[m.length-1],V=X.percent+le<0,Me=he.percent+le>100;if(V||Me)return;for(let br=0;br<m.length;br++)Ee(br,m[br].percent+le);return}let E=hs();E!==-1&&(Ee(E,y),$==null||$.$pointer.focus())},lr=c=>{if(ce||document.activeElement!==o||$!=null&&$.disabled)return;c.stopPropagation(),c.preventDefault();let y=c.deltaY<0,E=we||O,X=y?!E:E,he=hs();he!==-1&&(X?Ht(he,m[he].percent):Nt(he,m[he].percent))},us=c=>{ce||Ae||(Y===Oe?O?Ee(c,100):Ee(c,0):we?Nt(c,m[c].percent):Ht(c,m[c].percent))},ds=c=>{ce||Ae||(Y===Oe?O?Ee(c,0):Ee(c,100):we?Ht(c,m[c].percent):Nt(c,m[c].percent))},ps=c=>{ce||Ae||(Y===Oe?O?Nt(c,m[c].percent):Ht(c,m[c].percent):we?Ee(c,100):Ee(c,0))},ms=c=>{ce||Ae||(Y===Oe?O?Ht(c,m[c].percent):Nt(c,m[c].percent):we?Ee(c,0):Ee(c,100))},ja=c=>c.classList.contains("panel"),Ba=c=>c.classList.contains("panel-fill"),Ht=(c,y)=>{if(y===void 0)return;let E=cr(y);E==null&&(E=1),y-=E,y<0&&(y=0),Ee(c,y)},Nt=(c,y)=>{if(y===void 0)return;let E=cr(y);E==null&&(E=1),y+=E,y>100&&(y=100),Ee(c,y)},ot=()=>{!A||A.update({percents:gs(),values:fs(),$pointers:bs(),min:vs(),max:ys(),data:Kr(),step:Zr(),round:ei(),type:Jr(),textMin:hr(),textMax:ur(),rightToLeft:ii(),bottomToTop:si(),pointersOverlap:li(),pointersMinDistance:ti(),pointersMaxDistance:ri(),rangeDragging:ci(),disabled:ni(),keyboardDisabled:ai(),mousewheelDisabled:oi()})},Ha=()=>{ot()},Na=c=>{if(!(B||m.length<=1||j===P))if(c===0){let y=K*100/(j-P);return Math.max(0,m[c+1].percent-y)}else{let y=M*100/(j-P);return Math.min(m[c-1].percent+y,100)}},Ua=c=>{if(!(B||m.length<=1||j===P))if(c===m.length-1){let y=K*100/(j-P);return Math.min(m[c-1].percent+y,100)}else{let y=M*100/(j-P);return Math.max(0,m[c+1].percent-y)}},cr=c=>{let y;if(typeof H=="function"){let E=zr(0,100,P,j,c);y=H(E,c)}else y=H;if(qe(y)){let E=j-P;return y=E===0?0:y*100/E,y}},yt=c=>{if(c===void 0)return;let y=zr(0,100,P,j,c);return k!==void 0?k[Math.round(y)]:Jn(y,Se)},hr=()=>k!==void 0?k[P]:P,ur=()=>k!==void 0?k[j]:j,Zr=()=>H,Va=c=>{var y;return c<=0||B?hr():(y=yt(m[c-1].percent))!=null?y:""},Ia=c=>{var y;return m.length<=1||c>=m.length-1||B?ur():(y=yt(m[c+1].percent))!=null?y:""},gs=()=>m.map(c=>c.percent),fs=()=>m.map(c=>yt(c.percent)),bs=()=>m.map(c=>c.$pointer),vs=()=>P,ys=()=>j,Kr=()=>k,Jr=()=>Y,ei=()=>Se,ti=()=>M,ri=()=>K,Wa=c=>ls[c],ii=()=>we,si=()=>O,ni=()=>ce,ai=()=>Ae,oi=()=>Pe,li=()=>B,ci=()=>fe,Ee=(c,y)=>{if(y===void 0)return;let E=cr(y);E!==void 0&&(y=es(y,E));let X=m[c];if(!X)return;let he=X.updatePosition(y,Na(c),Ua(c),Y,we,O);S==null||S.updatePosition(Y,m.map(V=>V.percent),we,O),ot();for(let V of m){let Me=yt(V.percent);Me!==void 0&&(V.setAttr("aria-valuenow",Me.toString()),V.setAttr("aria-valuetext",Me.toString()))}Ya(),he&&sa(o,m.map(V=>yt(V.percent)))},Be=()=>{for(let c=0;c<m.length;c++)Ee(c,m[c].percent)},qa=(c,y)=>{P=k!==void 0?0:ue(c,Xr),j=k!==void 0?k.length-1:ue(y,Bt),dr(P),pr(j)},Ya=()=>{var c,y;for(let E=0;E<m.length;E++){let X=m[E];X.setAttr("aria-valuemin",((c=Va(E))!=null?c:"").toString()),X.setAttr("aria-valuemax",((y=Ia(E))!=null?y:"").toString())}},dr=c=>{P=ue(c,Xr),P>j&&(j=P+Bt),Be()},pr=c=>{j=ue(c,Bt),j<P&&(j=P+Bt),Be()},ws=c=>{B=!0;for(let y=0;y<c.length;y++)mr(c[y],y);B=!1;for(let y=0;y<c.length;y++)mr(c[y],y)},mr=(c,y)=>{let E;k!==void 0?(E=c==null?0:aa(c,k),E===-1&&(E=0)):(E=ue(c,P),E<P&&(E=P),E>j&&(E=j));let X=zr(P,j,0,100,E);Ee(y,X)},gr=c=>{if(c==null){H=void 0;return}if(typeof c=="function"){H=c,Be();return}if(qe(c)){H=ue(c,1);let y=Math.abs(j-P);H>y&&(H=void 0),Be();return}H=void 0},hi=c=>{B=c,Be()},ui=c=>{(!qe(c)||c<0)&&(c=0),M=c},di=c=>{(!qe(c)||c<0)&&(c=1/0),K=c},pi=c=>{ce=c,h.classList.toggle("disabled",ce),ce?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},xs=c=>{Ae=c},_s=c=>{Pe=c,Pe?document.removeEventListener("wheel",lr):document.addEventListener("wheel",lr,{passive:!1})},mi=c=>{if(c==null){k=void 0;return}if(k=na(c),k===void 0||k.length<=0){k=void 0;return}dr(0),pr(k.length-1),H===void 0&&gr(1)},gi=c=>{var y;typeof c=="string"?Y=c.trim().toLowerCase()===Oe?Oe:ft:Y=ft;let E=(y=o.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!E)return;E.className=`range-slider-box type-${Y}`,Be();let X=Y===Oe?"vertical":"horizontal";for(let he of m)he.setAttr("aria-orientation",X)},fi=c=>{we=c,m.length>1&&as(m,we,o),Be(),ot()},bi=c=>{O=c,m.length>1&&as(m,O,o),Be(),ot()},vi=c=>{Se=ue(c,vt),Se<0&&(Se=vt),ot()},$s=c=>{c==null||c.toString().trim().toLowerCase()==="false"?(Ze=void 0,h.style.removeProperty(ts),h.classList.remove(bt)):(Ze=c.toString(),h.style.setProperty(ts,Ze),h.classList.add(bt))},Cs=(c,y)=>{let E=m[c];!E||(E.setAttr("aria-label",y),ls[c]=y)},fr=c=>{if(de=void 0,m.length<=1){fe=!1,h.classList.remove(is);return}fe=c,h.classList.toggle(is,fe)},za=()=>{pi(ve(o.getAttribute(Q))),Ae=ve(o.getAttribute(ee)),Pe=ve(o.getAttribute(Z));let c=ar(o,/^pointer([0-9]*)-disabled$/,y=>ve(y));for(let y of c){let E=y[0];!m[E]||(m[E].disabled=y[1])}},Ga=()=>{let c=ar(o,/^aria-label([0-9]*)$/);for(let y of c){let E=y[0];Cs(E,y[1])}},Xa=c=>{let y=m.length,E=m[y-1].$pointer,X=E.cloneNode(!0);E.after(X);let he=Gr(o,X,y);return he.setCallbacks(us,ds,ps,ms),m.push(he),mr(c,y),Be(),ot(),y},Qa=()=>{let c=m.length,y=m[c-1];return y?(y.destroy(),m.pop(),m.length<=1&&fr(!1),Be(),ot(),c-1):-1};return(()=>{var c,y;for(let X of m)X.setCallbacks(us,ds,ps,ms);let E=(c=o.shadowRoot)==null?void 0:c.querySelector(".panel-fill");E&&(S=oa(E)),gi(o.getAttribute(_)),fi(ve(o.getAttribute(z))),bi(ve(o.getAttribute(I))),qa(o.getAttribute(g),o.getAttribute(w)),gr(o.getAttribute(x)),mi(o.getAttribute(f)),ws(b.map(X=>X[1])),hi(ve(o.getAttribute(a))),ui(ue(o.getAttribute(l),0)),di(ue(o.getAttribute(u),1/0)),fr(ve(o.getAttribute(d))),vi(ue(o.getAttribute(C),vt)),za(),Ga(),F=Ea(o,h,m),$s((y=o.getAttribute(nt))!=null?y:os),h.addEventListener("mousedown",cs),h.addEventListener("mouseup",or),h.addEventListener("touchmove",at),h.addEventListener("touchstart",at),Pe||document.addEventListener("wheel",lr,{passive:!1}),A=ka(o,Ha,{setValues:ws,setMin:dr,setMax:pr,setStep:gr,setPointersOverlap:hi,setPointersMinDistance:ui,setPointersMaxDistance:di,setDisabled:pi,setType:gi,setRightToLeft:fi,setBottomToTop:bi,setRound:vi,setKeyboardDisabled:xs,setMousewheelDisabled:_s,setRangeDragging:fr,setData:mi},{getPercents:gs,getValues:fs,getPointerElements:bs,getMin:vs,getMax:ys,getStep:Zr,getData:Kr,getType:Jr,getRound:ei,getTextMin:hr,getTextMax:ur,isRightToLeft:ii,isBottomToTop:si,isDisabled:ni,isKeyboardDisabled:ai,isMousewheelDisabled:oi,isPointersOverlap:li,isRangeDraggingEnabled:ci,getPointersMinDistance:ti,getPointersMaxDistance:ri}),A.init()})(),{get pointers(){return m},get styles(){return F},get pluginsManager(){return A},get min(){return hr()},get max(){return ur()},get step(){return Zr()},get pointersOverlap(){return li()},set pointersOverlap(c){hi(c)},get pointersMinDistance(){return ti()},set pointersMinDistance(c){ui(c)},get pointersMaxDistance(){return ri()},set pointersMaxDistance(c){di(c)},get disabled(){return ni()},set disabled(c){pi(c)},get data(){return Kr()},get type(){return Jr()},set type(c){gi(c)},get rightToLeft(){return ii()},set rightToLeft(c){fi(c)},get bottomToTop(){return si()},set bottomToTop(c){bi(c)},get round(){return ei()},set round(c){vi(c)},get animateOnClick(){return Ze},set animateOnClick(c){$s(c)},get keyboardDisabled(){return ai()},set keyboardDisabled(c){xs(c)},get mousewheelDisabled(){return oi()},set mousewheelDisabled(c){_s(c)},get rangeDragging(){return ci()},set rangeDragging(c){fr(c)},setMin:dr,setMax:pr,setValue:mr,setStep:gr,setData:mi,getTextValue:yt,setAriaLabel:Cs,getAriaLabel:Wa,addPointer:Xa,removePointer:Qa,destroy:()=>{h.removeEventListener("mousedown",cs),h.removeEventListener("mouseup",or),h.removeEventListener("touchmove",at),h.removeEventListener("touchstart",at),document.removeEventListener("wheel",lr);for(let c of m)c.destroy();A==null||A.destroy()}}},La=(o,h,b)=>{let m=rs.find(([A,P,j,H])=>P.replace("#","")===h.replace(/\d+/g,""));if(m&&o.styles){let[A,P,j,H]=m,k=h.replace(/\D/g,"").trim(),Y=k===""||k==="0"||k==="1"?0:ue(k,0)-1;o.styles.setStyle(A,b,Y);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(h,b),h){case g:{o.setMin(b);break}case w:{o.setMax(b);break}case x:{o.setStep(b);break}case a:{o.pointersOverlap=ve(b);break}case l:{o.pointersMinDistance=ue(b,0);break}case d:{o.rangeDragging=ve(b);break}case u:{o.pointersMaxDistance=ue(b,1/0);break}case Q:{o.disabled=ve(b);break}case ee:{o.keyboardDisabled=ve(b);break}case Z:{o.mousewheelDisabled=ve(b);break}case f:{o.setData(b);break}case _:{o.type=b;break}case z:{o.rightToLeft=ve(b);break}case I:{o.bottomToTop=ve(b);break}case C:{o.round=ue(b,vt);break}case D:{o.styles&&(o.styles.theme=b);break}case nt:{o.animateOnClick=b;break}}let $=null;if(/^value([0-9]*)$/.test(h)&&($="value"),/^pointer([0-9]*)-disabled$/.test(h)&&($="pointer-disabled"),/^aria-label([0-9]*)$/.test(h)&&($="aria-label"),/^pointer([0-9]*)-shape$/.test(h)&&($="pointer-shape"),!$)return;let S=h.replace(/\D/g,"").trim(),F=S===""||S==="0"||S==="1"?0:ue(S,0)-1;switch($){case"value":{o.setValue(b,F);break}case"pointer-disabled":{let A=o==null?void 0:o.pointers[F];if(!A)return;A.disabled=ve(b);break}case"aria-label":{o.setAriaLabel(F,b);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(F,b);break}}},Ra=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.disabled)!=null?h:!1}set data(o){var h;(h=this.slider)==null||h.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var h;(h=this.slider)==null||h.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var h;(h=this.slider)==null||h.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,h;return(h=(o=this.slider)==null?void 0:o.round)!=null?h:vt}set type(o){!this.slider||(this.slider.type=o??ft)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||ft}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?h:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?h:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?h:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,h,b;return(b=(h=(o=this.slider)==null?void 0:o.styles)==null?void 0:h.theme)!=null?b:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,h;return(h=(o=this.slider)==null?void 0:o.rightToLeft)!=null?h:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,h;return(h=(o=this.slider)==null?void 0:o.bottomToTop)!=null?h:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?h:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?h:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,h;return(h=(o=this.slider)==null?void 0:o.rangeDragging)!=null?h:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=ve(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var h,b;if(!this.slider)return;let m=(b=(h=this.slider)==null?void 0:h.addPointer(o))!=null?b:0;ns(this,this.slider,m,`value${m+1}`,`ariaLabel${m+1}`,`pointerShape${m+1}`,`pointer${m+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let h=document.createElement("style");h.textContent=o,this.shadowRoot.appendChild(h)}connectedCallback(){var o,h;if(!this.shadowRoot)return;this._externalCSSList=Pa(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let b=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!b)return;let m=(h=this.shadowRoot)==null?void 0:h.getElementById("range-slider");if(!m)return;let $=Sa(this,b);this.slider=Da(this,m,$),Oa(this,this.slider),this._observer=new MutationObserver(S=>{S.forEach(F=>{var A;if(!this.slider||F.type!=="attributes")return;let P=F.attributeName;!P||La(this.slider,P,(A=this.getAttribute(P))!=null?A:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Qr=Ra;window.tcRangeSlider=Qr,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Qr),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Qr{})})();(()=>{var t=(l,u,d,f,g)=>{let w=u-l;return w===0?d:(f-d)*(g-l)/w+d},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,u)=>e(l)?Number(l):u,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,u=null,d=null,f=null,g=null,w=!1,x=s,C=n,_=()=>{var L;let te=(L=l==null?void 0:l.shadowRoot)==null?void 0:L.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),f=document.createElement("div"),f.classList.add("mark-points"),d.append(f),g=document.createElement("div"),g.classList.add("mark-values"),d.append(g),te.append(d)},D=()=>{!u||!d||d.classList.toggle("is-reversed",u.isRightToLeft()||u.isBottomToTop())},z=()=>{var L;if(!d||!u)return;let te=u.getMin(),me=u.getMax(),se=u.getType()==="vertical",ge=u.isRightToLeft()||u.isBottomToTop();for(let oe=0;oe<x;oe++){let G=document.createElement("div");G.classList.add("mark",`mark-${oe}`);let p=x===0?0:oe*100/(x-1);se?ge?G.style.top=`${100-p}%`:G.style.top=`${p}%`:ge?G.style.left=`${100-p}%`:G.style.left=`${p}%`,f==null||f.append(G)}let W=u.getData();for(let oe=0;oe<C;oe++){let G=document.createElement("div");G.classList.add("mark-value",`mark-value-${oe}`);let p=C===0?0:oe*100/(C-1),v=t(0,C-1,te,me,oe);G.textContent=(W?(L=W[Math.round(v)])!=null?L:"":v).toString(),se?ge?G.style.top=`${100-p}%`:G.style.top=`${p}%`:ge?G.style.left=`${100-p}%`:G.style.left=`${p}%`,g==null||g.append(G)}},I=(L,te)=>{ye(),x=L,C=te,x<=0&&(x=s),C<=0&&(C=n),_(),z(),D()},Q=L=>{w=L,w?(_(),z(),D()):ye()},ee=L=>{!d||d.style.setProperty("--marks-color",L)},Z=L=>{!d||d.style.setProperty("--values-color",L)},ye=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(L,te,me,se)=>{var ge,W;u=se,l=L,w=i(l.getAttribute("marks")),w&&(I(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),ee((ge=l.getAttribute("marks-color"))!=null?ge:"#cbd5e1"),Z((W=l.getAttribute("marks-values-color"))!=null?W:"#475569"))},onAttrChange:(L,te)=>{L==="marks"&&Q(i(te)),L==="marks-count"&&I(r(te,s),C),L==="marks-values-count"&&I(x,r(te,n)),L==="marks-color"&&ee(te),L==="marks-values-color"&&Z(te)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return w??!1},set:L=>{Q(i(L))}}},{name:"marksCount",attributes:{get(){return x??s},set:L=>{I(r(L,s),C)}}},{name:"marksValuesCount",attributes:{get(){return x??s},set:L=>{I(x,r(L,n))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:L=>{ee(L)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:L=>{Z(L)}}}],destroy:ye,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Au=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,mt=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Au(e,r,s),s};let Ge=class extends We{constructor(){super(...arguments),this.sliderRef=_e()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.identificator,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return R`

        <div class="container ${this.canRanderSlider()?"ready":"loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${$e(this.sliderRef)}
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

        `}};Ge.styles=be`

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
    
    `;mt([re({type:Number,reflect:!0})],Ge.prototype,"min",2);mt([re({type:Number,reflect:!0})],Ge.prototype,"max",2);mt([re({type:Number,reflect:!0})],Ge.prototype,"from",2);mt([re({type:Number,reflect:!0})],Ge.prototype,"to",2);mt([pe()],Ge.prototype,"palette",2);mt([pe()],Ge.prototype,"sliderRef",2);Ge=mt([ae("thermal-range")],Ge);var Eu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Ir=(t,e,r,i)=>{for(var s=i>1?void 0:i?ku(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Eu(e,r,s),s};let Lt=class extends We{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.identificator,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return R`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":J}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>R`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():R`
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
        `}};Lt.styles=be`

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


    `;Ir([pe()],Lt.prototype,"histogram",2);Ir([re({type:Boolean,reflect:!0})],Lt.prototype,"interactive",2);Ir([re({type:String,reflect:!0})],Lt.prototype,"height",2);Lt=Ir([ae("thermal-histogram")],Lt);var Tu=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,Wr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Su(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Tu(e,r,s),s};let Ie=class extends We{constructor(){super(...arguments),this.ticksRef=_e(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(t){super.firstUpdated(t),this.registry.minmax.addListener(this.identificator,e=>{this.minmax=e,this.calculateTicks(e,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/Ie.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return R`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${$e(this.ticksRef)}>

                    ${this.ticks.map(t=>R`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Ie.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Ie.TICK_WIDTH=40;Ie.TICK_FIXED=2;Ie.styles=be`

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
                height: 5px;
                //background: currentcolor;
            }
        
        }

        .placement-top {
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


    `;Wr([re({type:String,reflect:!0})],Ie.prototype,"placement",2);Wr([pe()],Ie.prototype,"minmax",2);Wr([pe()],Ie.prototype,"ticks",2);Ie=Wr([ae("thermal-ticks")],Ie);var Ou=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,Du=(t,e,r,i)=>{for(var s=i>1?void 0:i?Mu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ou(e,r,s),s};let Hi=class extends Qe{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){var t;return R`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot; https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js &quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${(t=this._injectedFile.value)==null?void 0:t.url}c&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `}};Hi.styles=be`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Hi=Du([ae("thermal-file-share")],Hi);var Lu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,qr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ru(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Lu(e,r,s),s};let Rt=class extends Qe{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=_e(),this.barRef=_e()}getClassName(){return"TimelineElement"}update(t){var e,r;return(e=this._injectedFile.value)==null||e.timeline.removeListener(this.identificator),(r=this._injectedFile.value)==null||r.timeline.addListener(this.identificator,i=>{this.percentage=i/this._injectedFile.value.duration*100,this.ms=this.formatDuration(this._injectedFile.value.timeline.value)}),super.update(t)}formatDuration(t){const e=t%1e3,r=1e3*60,i=Math.floor(t/r),s=(t-i*r-e)/1e3,n=(a,l)=>{const u=a.toString();if(u.length===l)return u;if(u.length<l){const d=l-u.length;let f="";for(let g=0;g<d;g++)f=f+"0";return f+u}};return[i,n(s,2),n(e,3)].join(":")}play(){this._injectedFile.value&&(this.playing=!0,this._injectedFile.value.timeline.play())}pause(){this._injectedFile.value&&(this.playing=!1,this._injectedFile.value.timeline.pause())}applyBar(t){if(this.log(t),t.clientX,this.timelineRef.value&&this.barRef.value&&this._injectedFile.value){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this._injectedFile.value.timeline.setPercentage(r)}}render(){return this._injectedFile.value===void 0||this._injectedFile.value.timeline.duration===0?J:R`
            <div class="container">


                ${this._injectedFile.value!==void 0?R`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?R`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:R`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor">
                                ${this.ms}
                            </div>

                            <div class="item timeline" @click=${this.applyBar.bind(this)} ${$e(this.timelineRef)}>
                                <div class="bar" style="width: ${this.percentage}%" ${$e(this.barRef)}></div>
                            </div>

                            <div class="item">${this.formatDuration(this._injectedFile.value.timeline.duration)}</div>
                        </div>
                    `:J}
            
            </div>

          `}};Rt.styles=be`
    
        .container {

            padding-top: calc( var( --thermal-gap ) * .2 );

            width: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: calc( var( --thermal-gap ) * .5 );

        }

        .item {
        
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
            width: calc( var( --thermal-gap ) * 5 );
        }

        .duration {
        
        }

        .timeline {

            flex-grow: 1;
            background: var( --thermal-slate );
            height: var( --thermal-gap );
            cursor: pointer;
        }

        .bar {
            height: 100%;
            background: var( --thermal-primary );
            content: "";
        }
    
    `;qr([pe()],Rt.prototype,"playing",2);qr([pe()],Rt.prototype,"percentage",2);qr([pe()],Rt.prototype,"ms",2);Rt=qr([ae("thermal-timeline")],Rt);var Fu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,Ki=(t,e,r,i)=>{for(var s=i>1?void 0:i?ju(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Fu(e,r,s),s};let er=class extends Gi{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=_e()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return R`
    <thermal-manager>
      <thermal-registry>
        <thermal-group>
          <div class="container fullscreen-${this.fullscreen}" ${$e(this.appRef)}>

            <thermal-image thermal="${this.url}">
              <thermal-file-name slot="bar"></thermal-file-name>
              
              
              
              <!--<thermal-opacity slot="bar"></thermal-opacity>-->
              <thermal-histogram slot="pre" interactive></thermal-histogram>
              <thermal-range slot="pre"></thermal-range>
              <thermal-ticks slot="pre"></thermal-ticks>
              <thermal-timeline></thermal-timeline>

              <div slot="bar" style="flex-grow: 4;">
                <thermal-bar>
                    <thermal-file-info></thermal-file-info>
                    <thermal-file-download></thermal-file-download>
                    <thermal-palette></thermal-palette>
                    <thermal-dropdown>
                      <div slot="invoker">Adjustment</div>
                      <thermal-range-auto slot="option"></thermal-range-auto>
                      <thermal-range-minmax slot="option"></thermal-range-minmax>
                      <!--<thermal-opacity slot="option"></thermal-opacity>-->
                    </thermal-dropdown>

                    <thermal-file-share></thermal-file-share>

                    <thermal-app-info></thermal-app-info>
                </thermal-bar>
              </div>
              

              <thermal-button slot="bar" @click=${this.toggleFullscreen.bind(this)}>
                <div style="width: calc( var( --thermal-gap ) * .9 );line-height: 0;">
                ${this.fullscreen==="on"?R`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:R`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
              
            </thermal-image>

          </div>
          <thermal-group>
      </thermal-registry>
    </thermal-manager>
    `}};er.styles=be`

    .container {

      padding: calc( var( --thermal-gap ) / 3 );
      background-color: var( --thermal-slate-light );
      border: 1px solid var( --thermal-slate );
      border-radius: var( --thermal-radius );
      // box-shadow: var( --thermal-shadow );

    }

    .fullscreen-on {

      border: 0;
      border-radius: 0;
      // background: var( --thermal-slate-base-dark );

      ::part( file-canvas-wrapper ) {

        display: flex;
        align-items: center;
        justify-content: center;

        padding: var( --thermal-gap );
        box-sizing: border-box;
        height: 100%;

      }

      ::part( file-canvas-container ) {

        max-width: 100vw;
        max-height: 100vh;
        
        aspect-ratio: 4 / 3;
        margin:: 0 auto;7

        width: 80vw;

      }

      @media ( min-height: 800px ) {
        ::part( file-canvas-container ) {
            width: 70vw;
        }
      }
    }
  
  `;Ki([re({type:String,reflect:!0})],er.prototype,"url",2);Ki([re({type:String,reflect:!0})],er.prototype,"fullscreen",2);er=Ki([ae("thermal-file-app")],er);const Pi=window.matchMedia("(prefers-color-scheme: dark)"),Ji="thermal-dark-mode",Ks=()=>{document.body.classList.add(Ji)},Bu=()=>{document.body.classList.remove(Ji)},Hu=()=>{Pi.matches&&Ks();const t=e=>{e.matches?Ks():Bu()};Pi.addEventListener("change",t),Pi.addListener(t)},Nu=Ni.version.toString().replaceAll(".","-"),Zn=t=>`thermal__${t}__${Nu}`,Uu=t=>document.getElementById(Zn(t))!==null,Js=(t,e)=>{if(!Uu(t)){const r=document.createElement("style");r.setAttribute("id",Zn(t)),r.innerHTML=e,document.head.appendChild(r)}},Vu=()=>{Js("rootVariables",`

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


            
        
        `),Js("darkModeOverrides",`
        
            body.${Ji} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${tn}
Author: ${sn}
Repository: ${rn.url}
`);Hu();Vu();document.addEventListener("DOMContentLoaded",()=>{});
