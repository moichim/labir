const Ga="@labir/embed",Js="1.2.15",Xa="Embedded display of thermograms",Qa="dist/embed.js",Ka="module",en={type:"git",url:"https://github.com/moichim/labir"},Za={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},tn="Jan Jáchim <jachim5@gmail.com>",Ja="ISC",eo={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/emotion":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11"},to={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},ji={name:Ga,version:Js,description:Xa,main:Qa,type:Ka,repository:en,scripts:Za,author:tn,license:Ja,dependencies:eo,devDependencies:to};var $s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ro(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ci={exports:{}};(function(t,e){var r=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof $s<"u"&&$s,i=function(){function n(){this.fetch=!1,this.DOMException=r.DOMException}return n.prototype=r,new n}();(function(n){(function(a){var l=typeof n<"u"&&n||typeof self<"u"&&self||typeof l<"u"&&l,u={searchParams:"URLSearchParams"in l,iterable:"Symbol"in l&&"iterator"in Symbol,blob:"FileReader"in l&&"Blob"in l&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in l,arrayBuffer:"ArrayBuffer"in l};function d(p){return p&&DataView.prototype.isPrototypeOf(p)}if(u.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(p){return p&&b.indexOf(Object.prototype.toString.call(p))>-1};function w(p){if(typeof p!="string"&&(p=String(p)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(p)||p==="")throw new TypeError('Invalid character in header field name: "'+p+'"');return p.toLowerCase()}function x(p){return typeof p!="string"&&(p=String(p)),p}function C(p){var v={next:function(){var S=p.shift();return{done:S===void 0,value:S}}};return u.iterable&&(v[Symbol.iterator]=function(){return v}),v}function _(p){this.map={},p instanceof _?p.forEach(function(v,S){this.append(S,v)},this):Array.isArray(p)?p.forEach(function(v){this.append(v[0],v[1])},this):p&&Object.getOwnPropertyNames(p).forEach(function(v){this.append(v,p[v])},this)}_.prototype.append=function(p,v){p=w(p),v=x(v);var S=this.map[p];this.map[p]=S?S+", "+v:v},_.prototype.delete=function(p){delete this.map[w(p)]},_.prototype.get=function(p){return p=w(p),this.has(p)?this.map[p]:null},_.prototype.has=function(p){return this.map.hasOwnProperty(w(p))},_.prototype.set=function(p,v){this.map[w(p)]=x(v)},_.prototype.forEach=function(p,v){for(var S in this.map)this.map.hasOwnProperty(S)&&p.call(v,this.map[S],S,this)},_.prototype.keys=function(){var p=[];return this.forEach(function(v,S){p.push(S)}),C(p)},_.prototype.values=function(){var p=[];return this.forEach(function(v){p.push(v)}),C(p)},_.prototype.entries=function(){var p=[];return this.forEach(function(v,S){p.push([S,v])}),C(p)},u.iterable&&(_.prototype[Symbol.iterator]=_.prototype.entries);function M(p){if(p.bodyUsed)return Promise.reject(new TypeError("Already read"));p.bodyUsed=!0}function z(p){return new Promise(function(v,S){p.onload=function(){v(p.result)},p.onerror=function(){S(p.error)}})}function I(p){var v=new FileReader,S=z(v);return v.readAsArrayBuffer(p),S}function Q(p){var v=new FileReader,S=z(v);return v.readAsText(p),S}function J(p){for(var v=new Uint8Array(p),S=new Array(v.length),q=0;q<v.length;q++)S[q]=String.fromCharCode(v[q]);return S.join("")}function K(p){if(p.slice)return p.slice(0);var v=new Uint8Array(p.byteLength);return v.set(new Uint8Array(p)),v.buffer}function ve(){return this.bodyUsed=!1,this._initBody=function(p){this.bodyUsed=this.bodyUsed,this._bodyInit=p,p?typeof p=="string"?this._bodyText=p:u.blob&&Blob.prototype.isPrototypeOf(p)?this._bodyBlob=p:u.formData&&FormData.prototype.isPrototypeOf(p)?this._bodyFormData=p:u.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)?this._bodyText=p.toString():u.arrayBuffer&&u.blob&&d(p)?(this._bodyArrayBuffer=K(p.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):u.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(p)||f(p))?this._bodyArrayBuffer=K(p):this._bodyText=p=Object.prototype.toString.call(p):this._bodyText="",this.headers.get("content-type")||(typeof p=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):u.searchParams&&URLSearchParams.prototype.isPrototypeOf(p)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u.blob&&(this.blob=function(){var p=M(this);if(p)return p;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var p=M(this);return p||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(I)}),this.text=function(){var p=M(this);if(p)return p;if(this._bodyBlob)return Q(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(J(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},u.formData&&(this.formData=function(){return this.text().then(se)}),this.json=function(){return this.text().then(JSON.parse)},this}var L=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ee(p){var v=p.toUpperCase();return L.indexOf(v)>-1?v:p}function pe(p,v){if(!(this instanceof pe))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v=v||{};var S=v.body;if(p instanceof pe){if(p.bodyUsed)throw new TypeError("Already read");this.url=p.url,this.credentials=p.credentials,v.headers||(this.headers=new _(p.headers)),this.method=p.method,this.mode=p.mode,this.signal=p.signal,!S&&p._bodyInit!=null&&(S=p._bodyInit,p.bodyUsed=!0)}else this.url=String(p);if(this.credentials=v.credentials||this.credentials||"same-origin",(v.headers||!this.headers)&&(this.headers=new _(v.headers)),this.method=ee(v.method||this.method||"GET"),this.mode=v.mode||this.mode||null,this.signal=v.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&S)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(S),(this.method==="GET"||this.method==="HEAD")&&(v.cache==="no-store"||v.cache==="no-cache")){var q=/([?&])_=[^&]*/;if(q.test(this.url))this.url=this.url.replace(q,"$1_="+new Date().getTime());else{var te=/\?/;this.url+=(te.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}pe.prototype.clone=function(){return new pe(this,{body:this._bodyInit})};function se(p){var v=new FormData;return p.trim().split("&").forEach(function(S){if(S){var q=S.split("="),te=q.shift().replace(/\+/g," "),U=q.join("=").replace(/\+/g," ");v.append(decodeURIComponent(te),decodeURIComponent(U))}}),v}function ge(p){var v=new _,S=p.replace(/\r?\n[\t ]+/g," ");return S.split("\r").map(function(q){return q.indexOf(`
`)===0?q.substr(1,q.length):q}).forEach(function(q){var te=q.split(":"),U=te.shift().trim();if(U){var ft=te.join(":").trim();v.append(U,ft)}}),v}ve.call(pe.prototype);function W(p,v){if(!(this instanceof W))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');v||(v={}),this.type="default",this.status=v.status===void 0?200:v.status,this.ok=this.status>=200&&this.status<300,this.statusText=v.statusText===void 0?"":""+v.statusText,this.headers=new _(v.headers),this.url=v.url||"",this._initBody(p)}ve.call(W.prototype),W.prototype.clone=function(){return new W(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new _(this.headers),url:this.url})},W.error=function(){var p=new W(null,{status:0,statusText:""});return p.type="error",p};var ae=[301,302,303,307,308];W.redirect=function(p,v){if(ae.indexOf(v)===-1)throw new RangeError("Invalid status code");return new W(null,{status:v,headers:{location:p}})},a.DOMException=l.DOMException;try{new a.DOMException}catch{a.DOMException=function(v,S){this.message=v,this.name=S;var q=Error(v);this.stack=q.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function G(p,v){return new Promise(function(S,q){var te=new pe(p,v);if(te.signal&&te.signal.aborted)return q(new a.DOMException("Aborted","AbortError"));var U=new XMLHttpRequest;function ft(){U.abort()}U.onload=function(){var xe={status:U.status,statusText:U.statusText,headers:ge(U.getAllResponseHeaders()||"")};xe.url="responseURL"in U?U.responseURL:xe.headers.get("X-Request-URL");var st="response"in U?U.response:U.responseText;setTimeout(function(){S(new W(st,xe))},0)},U.onerror=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},U.ontimeout=function(){setTimeout(function(){q(new TypeError("Network request failed"))},0)},U.onabort=function(){setTimeout(function(){q(new a.DOMException("Aborted","AbortError"))},0)};function Ir(xe){try{return xe===""&&l.location.href?l.location.href:xe}catch{return xe}}U.open(te.method,Ir(te.url),!0),te.credentials==="include"?U.withCredentials=!0:te.credentials==="omit"&&(U.withCredentials=!1),"responseType"in U&&(u.blob?U.responseType="blob":u.arrayBuffer&&te.headers.get("Content-Type")&&te.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(U.responseType="arraybuffer")),v&&typeof v.headers=="object"&&!(v.headers instanceof _)?Object.getOwnPropertyNames(v.headers).forEach(function(xe){U.setRequestHeader(xe,x(v.headers[xe]))}):te.headers.forEach(function(xe,st){U.setRequestHeader(st,xe)}),te.signal&&(te.signal.addEventListener("abort",ft),U.onreadystatechange=function(){U.readyState===4&&te.signal.removeEventListener("abort",ft)}),U.send(typeof te._bodyInit>"u"?null:te._bodyInit)})}return G.polyfill=!0,l.fetch||(l.fetch=G,l.Headers=_,l.Request=pe,l.Response=W),a.Headers=_,a.Request=pe,a.Response=W,a.fetch=G,a})({})})(i),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=r.fetch?r:i;e=s.fetch,e.default=s.fetch,e.fetch=s.fetch,e.Headers=s.Headers,e.Request=s.Request,e.Response=s.Response,t.exports=e})(Ci,Ci.exports);var io=Ci.exports;const so=ro(io);var no={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},ao=`\r
`,oo="\uFEFF",Sr=t=>Object.assign({},no,t);class lo extends Error{constructor(e){super(e),this.name="CsvGenerationError"}}let co=class extends Error{constructor(e){super(e),this.name="EmptyHeadersError"}};class ho extends Error{constructor(e){super(e),this.name="CsvDownloadEnvironmentError"}}let uo=class extends Error{constructor(e){super(e),this.name="UnsupportedDataFormatError"}};var Ft=t=>t,Se=t=>t,Wt=Ft,Or=Ft,At=Ft,Cs=Ft,As=Ft,po=function(t,e){return e=='"'&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t},go=t=>Cs(typeof t=="object"?t.key:t),fo=t=>As(typeof t=="object"?t.displayLabel:t),mo=(t,...e)=>e.reduce((r,i)=>i(r),t),bo=t=>e=>t.useBom?Or(Se(e)+oo):e,vo=t=>e=>t.showTitle?Bi(Or(Se(e)+t.title))(At("")):e,Bi=t=>e=>Or(Se(t)+Se(e)+ao),rn=t=>(e,r)=>yo(t)(At(Se(e)+Se(r))),yo=t=>e=>Ft(Se(e)+t.fieldSeparator),wo=(t,e)=>r=>{if(!t.showColumnHeaders)return r;if(e.length<1)throw new co("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let i=At("");for(let s=0;s<e.length;s++){const n=fo(e[s]);i=rn(t)(i,sn(t,Se(n)))}return i=At(Se(i).slice(0,-1)),Bi(r)(i)},xo=(t,e,r)=>i=>{let s=i;for(var n=0;n<r.length;n++){let a=At("");for(let l=0;l<e.length;l++){const u=go(e[l]),d=r[n][Se(u)];a=rn(t)(a,sn(t,d))}a=At(Se(a).slice(0,-1)),s=Bi(s)(a)}return s},_o=t=>+t===t&&(!isFinite(t)||!!(t%1)),$o=(t,e)=>{if(_o(e)){if(t.decimalSeparator==="locale")return Wt(e.toLocaleString());if(t.decimalSeparator)return Wt(e.toString().replace(".",t.decimalSeparator))}return Wt(e.toString())},br=(t,e)=>{let r=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf(`
`)>-1||e.indexOf("\r")>-1)&&(r=t.quoteCharacter+po(e,t.quoteCharacter)+t.quoteCharacter),Wt(r)},Co=(t,e)=>{const r=e?"true":"false";return Wt(t.boolDisplay[r])},Ao=(t,e)=>typeof e>"u"&&t.replaceUndefinedWith!==void 0?br(t,t.replaceUndefinedWith+""):e===null?br(t,"null"):br(t,""),sn=(t,e)=>{if(typeof e=="number")return $o(t,e);if(typeof e=="string")return br(t,e);if(typeof e=="boolean"&&t.boolDisplay)return Co(t,e);if(e===null||typeof e>"u")return Ao(t,e);throw new uo(`
    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.
    Please convert the data in your object to one of those before generating the CSV.
    `)},ko=t=>e=>{const r=Sr(t),i=r.useKeysAsHeaders?Object.keys(e[0]):r.columnHeaders;let s=mo(Or(""),bo(r),vo(r),wo(r,i),xo(r,i,e));if(Se(s).length<1)throw new lo("Output is empty. Is your data formatted correctly?");return s},Eo=t=>e=>{const r=Sr(t),i=Se(e),s=r.useTextFile?"plain":"csv";return new Blob([i],{type:`text/${s};charset=utf8;`})},Po=t=>e=>{if(!window)throw new ho("Downloading only supported in a browser environment.");const r=Eo(t)(e),i=Sr(t),s=i.useTextFile?"txt":"csv",n=`${i.filename}.${s}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(r),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function ne(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function Me(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function ks(t,e){const r=ne(t);return isNaN(e)?Me(t,NaN):(e&&r.setDate(r.getDate()+e),r)}function nn(t,e){const r=ne(t);if(isNaN(e))return Me(t,NaN);if(!e)return r;const i=r.getDate(),s=Me(t,r.getTime());s.setMonth(r.getMonth()+e+1,0);const n=s.getDate();return i>=n?s:(r.setFullYear(s.getFullYear(),s.getMonth(),i),r)}function So(t,e){const r=+ne(t);return Me(t,r+e)}const an=6048e5,Oo=864e5,To=36e5;function Do(t,e){return So(t,e*To)}let Mo={};function er(){return Mo}function kt(t,e){var l,u,d,b;const r=er(),i=(e==null?void 0:e.weekStartsOn)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??r.weekStartsOn??((b=(d=r.locale)==null?void 0:d.options)==null?void 0:b.weekStartsOn)??0,s=ne(t),n=s.getDay(),a=(n<i?7:0)+n-i;return s.setDate(s.getDate()-a),s.setHours(0,0,0,0),s}function yr(t){return kt(t,{weekStartsOn:1})}function on(t){const e=ne(t),r=e.getFullYear(),i=Me(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const s=yr(i),n=Me(t,0);n.setFullYear(r,0,4),n.setHours(0,0,0,0);const a=yr(n);return e.getTime()>=s.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function Ai(t){const e=ne(t);return e.setHours(0,0,0,0),e}function Es(t){const e=ne(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function Lo(t,e){const r=Ai(t),i=Ai(e),s=+r-Es(r),n=+i-Es(i);return Math.round((s-n)/Oo)}function Ro(t){const e=on(t),r=Me(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),yr(r)}function Fo(t,e){return nn(t,e*12)}function jo(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function ln(t){if(!jo(t)&&typeof t!="number")return!1;const e=ne(t);return!isNaN(Number(e))}function Bo(t){const e=ne(t);return e.setHours(23,59,59,999),e}function Ho(t){const e=ne(t),r=e.getMonth();return e.setFullYear(e.getFullYear(),r+1,0),e.setHours(23,59,59,999),e}function No(t){const e=ne(t);return e.setDate(1),e.setHours(0,0,0,0),e}function Uo(t){const e=ne(t),r=e.getFullYear();return e.setFullYear(r+1,0,0),e.setHours(23,59,59,999),e}function cn(t){const e=ne(t),r=Me(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}function Vo(t){const e=ne(t);return e.setMinutes(59,59,999),e}function Io(t,e){var l,u;const r=er(),i=r.weekStartsOn??((u=(l=r.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,s=ne(t),n=s.getDay(),a=(n<i?-7:0)+6-(n-i);return s.setDate(s.getDate()+a),s.setHours(23,59,59,999),s}const Wo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qo=(t,e,r)=>{let i;const s=Wo[t];return typeof s=="string"?i=s:e===1?i=s.one:i=s.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function mi(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const Yo={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},zo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Go={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Xo={date:mi({formats:Yo,defaultWidth:"full"}),time:mi({formats:zo,defaultWidth:"full"}),dateTime:mi({formats:Go,defaultWidth:"full"})},Qo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ko=(t,e,r,i)=>Qo[t];function Ut(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let s;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,l=r!=null&&r.width?String(r.width):a;s=t.formattingValues[l]||t.formattingValues[a]}else{const a=t.defaultWidth,l=r!=null&&r.width?String(r.width):t.defaultWidth;s=t.values[l]||t.values[a]}const n=t.argumentCallback?t.argumentCallback(e):e;return s[n]}}const Zo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Jo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},el={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},tl={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},rl={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},il={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},sl=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},nl={ordinalNumber:sl,era:Ut({values:Zo,defaultWidth:"wide"}),quarter:Ut({values:Jo,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Ut({values:el,defaultWidth:"wide"}),day:Ut({values:tl,defaultWidth:"wide"}),dayPeriod:Ut({values:rl,defaultWidth:"wide",formattingValues:il,defaultFormattingWidth:"wide"})};function Vt(t){return(e,r={})=>{const i=r.width,s=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],n=e.match(s);if(!n)return null;const a=n[0],l=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?ol(l,f=>f.test(a)):al(l,f=>f.test(a));let d;d=t.valueCallback?t.valueCallback(u):u,d=r.valueCallback?r.valueCallback(d):d;const b=e.slice(a.length);return{value:d,rest:b}}}function al(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function ol(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function ll(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const s=i[0],n=e.match(t.parsePattern);if(!n)return null;let a=t.valueCallback?t.valueCallback(n[0]):n[0];a=r.valueCallback?r.valueCallback(a):a;const l=e.slice(s.length);return{value:a,rest:l}}}const cl=/^(\d+)(th|st|nd|rd)?/i,hl=/\d+/i,ul={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},dl={any:[/^b/i,/^(a|c)/i]},pl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},gl={any:[/1/i,/2/i,/3/i,/4/i]},fl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ml={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},bl={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},vl={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},yl={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},wl={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},xl={ordinalNumber:ll({matchPattern:cl,parsePattern:hl,valueCallback:t=>parseInt(t,10)}),era:Vt({matchPatterns:ul,defaultMatchWidth:"wide",parsePatterns:dl,defaultParseWidth:"any"}),quarter:Vt({matchPatterns:pl,defaultMatchWidth:"wide",parsePatterns:gl,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Vt({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:ml,defaultParseWidth:"any"}),day:Vt({matchPatterns:bl,defaultMatchWidth:"wide",parsePatterns:vl,defaultParseWidth:"any"}),dayPeriod:Vt({matchPatterns:yl,defaultMatchWidth:"any",parsePatterns:wl,defaultParseWidth:"any"})},_l={code:"en-US",formatDistance:qo,formatLong:Xo,formatRelative:Ko,localize:nl,match:xl,options:{weekStartsOn:0,firstWeekContainsDate:1}};function $l(t){const e=ne(t);return Lo(e,cn(e))+1}function Cl(t){const e=ne(t),r=+yr(e)-+Ro(e);return Math.round(r/an)+1}function hn(t,e){var b,f,w,x;const r=ne(t),i=r.getFullYear(),s=er(),n=(e==null?void 0:e.firstWeekContainsDate)??((f=(b=e==null?void 0:e.locale)==null?void 0:b.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((x=(w=s.locale)==null?void 0:w.options)==null?void 0:x.firstWeekContainsDate)??1,a=Me(t,0);a.setFullYear(i+1,0,n),a.setHours(0,0,0,0);const l=kt(a,e),u=Me(t,0);u.setFullYear(i,0,n),u.setHours(0,0,0,0);const d=kt(u,e);return r.getTime()>=l.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function Al(t,e){var l,u,d,b;const r=er(),i=(e==null?void 0:e.firstWeekContainsDate)??((u=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??r.firstWeekContainsDate??((b=(d=r.locale)==null?void 0:d.options)==null?void 0:b.firstWeekContainsDate)??1,s=hn(t,e),n=Me(t,0);return n.setFullYear(s,0,i),n.setHours(0,0,0,0),kt(n,e)}function kl(t,e){const r=ne(t),i=+kt(r,e)-+Al(r,e);return Math.round(i/an)+1}function N(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Qe={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return N(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):N(r+1,2)},d(t,e){return N(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return N(t.getHours()%12||12,e.length)},H(t,e){return N(t.getHours(),e.length)},m(t,e){return N(t.getMinutes(),e.length)},s(t,e){return N(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),s=Math.trunc(i*Math.pow(10,r-3));return N(s,e.length)}},wt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ps={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),s=i>0?i:1-i;return r.ordinalNumber(s,{unit:"year"})}return Qe.y(t,e)},Y:function(t,e,r,i){const s=hn(t,i),n=s>0?s:1-s;if(e==="YY"){const a=n%100;return N(a,2)}return e==="Yo"?r.ordinalNumber(n,{unit:"year"}):N(n,e.length)},R:function(t,e){const r=on(t);return N(r,e.length)},u:function(t,e){const r=t.getFullYear();return N(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return N(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return N(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Qe.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return N(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const s=kl(t,i);return e==="wo"?r.ordinalNumber(s,{unit:"week"}):N(s,e.length)},I:function(t,e,r){const i=Cl(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):N(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Qe.d(t,e)},D:function(t,e,r){const i=$l(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):N(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(n);case"ee":return N(n,2);case"eo":return r.ordinalNumber(n,{unit:"day"});case"eee":return r.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(s,{width:"short",context:"formatting"});case"eeee":default:return r.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const s=t.getDay(),n=(s-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(n);case"cc":return N(n,e.length);case"co":return r.ordinalNumber(n,{unit:"day"});case"ccc":return r.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(s,{width:"narrow",context:"standalone"});case"cccccc":return r.day(s,{width:"short",context:"standalone"});case"cccc":default:return r.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),s=i===0?7:i;switch(e){case"i":return String(s);case"ii":return N(s,e.length);case"io":return r.ordinalNumber(s,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let s;switch(i===12?s=wt.noon:i===0?s=wt.midnight:s=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let s;switch(i>=17?s=wt.evening:i>=12?s=wt.afternoon:i>=4?s=wt.morning:s=wt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Qe.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Qe.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):N(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Qe.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Qe.s(t,e)},S:function(t,e){return Qe.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return Os(i);case"XXXX":case"XX":return lt(i);case"XXXXX":case"XXX":default:return lt(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return Os(i);case"xxxx":case"xx":return lt(i);case"xxxxx":case"xxx":default:return lt(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Ss(i,":");case"OOOO":default:return"GMT"+lt(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Ss(i,":");case"zzzz":default:return"GMT"+lt(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return N(i,e.length)},T:function(t,e,r){const i=t.getTime();return N(i,e.length)}};function Ss(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=Math.trunc(i/60),n=i%60;return n===0?r+String(s):r+String(s)+e+N(n,2)}function Os(t,e){return t%60===0?(t>0?"-":"+")+N(Math.abs(t)/60,2):lt(t,e)}function lt(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),s=N(Math.trunc(i/60),2),n=N(i%60,2);return r+s+e+n}const Ts=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},un=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},El=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],s=r[2];if(!s)return Ts(t,e);let n;switch(i){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"});break}return n.replace("{{date}}",Ts(i,e)).replace("{{time}}",un(s,e))},Pl={p:un,P:El},Sl=/^D+$/,Ol=/^Y+$/,Tl=["D","DD","YY","YYYY"];function Dl(t){return Sl.test(t)}function Ml(t){return Ol.test(t)}function Ll(t,e,r){const i=Rl(t,e,r);if(console.warn(i),Tl.includes(t))throw new RangeError(i)}function Rl(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Fl=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Bl=/^'([^]*?)'?$/,Hl=/''/g,Nl=/[a-zA-Z]/;function dn(t,e,r){var b,f,w,x;const i=er(),s=i.locale??_l,n=i.firstWeekContainsDate??((f=(b=i.locale)==null?void 0:b.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((x=(w=i.locale)==null?void 0:w.options)==null?void 0:x.weekStartsOn)??0,l=ne(t);if(!ln(l))throw new RangeError("Invalid time value");let u=e.match(jl).map(C=>{const _=C[0];if(_==="p"||_==="P"){const M=Pl[_];return M(C,s.formatLong)}return C}).join("").match(Fl).map(C=>{if(C==="''")return{isToken:!1,value:"'"};const _=C[0];if(_==="'")return{isToken:!1,value:Ul(C)};if(Ps[_])return{isToken:!0,value:C};if(_.match(Nl))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:C}});s.localize.preprocessor&&(u=s.localize.preprocessor(l,u));const d={firstWeekContainsDate:n,weekStartsOn:a,locale:s};return u.map(C=>{if(!C.isToken)return C.value;const _=C.value;(Ml(_)||Dl(_))&&Ll(_,e,String(t));const M=Ps[_[0]];return M(l,_,s.localize,d)}).join("")}function Ul(t){const e=t.match(Bl);return e?e[1].replace(Hl,"'"):t}function Hi(t,e){const r=ne(t);if(!ln(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",s=(e==null?void 0:e.representation)??"complete";let n="";const a=i==="extended"?"-":"",l=i==="extended"?":":"";if(s!=="time"){const u=N(r.getDate(),2),d=N(r.getMonth()+1,2);n=`${N(r.getFullYear(),4)}${a}${d}${a}${u}`}if(s!=="date"){const u=N(r.getHours(),2),d=N(r.getMinutes(),2),b=N(r.getSeconds(),2);n=`${n}${n===""?"":" "}${u}${l}${d}${l}${b}`}return n}function Vl(t){const e=ne(t);return e.setMinutes(0,0,0),e}var Ie=class{constructor(t,e){this.parent=t,this._initial=e,this._listeners={},this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Il=class extends Ie{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},Tr=class{constructor(t){this.instance=t,this._mounted=!1}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},je=class ki{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=ki.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=ki.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},Wl=class extends Tr{constructor(t,e){super(t),this._url=e,this.container=je.createVisibleLayer(),this._url&&(this.image=je.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(t){this._url=t,this.image&&t&&(this.image.src=t)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},ql=class extends Tr{constructor(t){super(t),this._opacity=1,this.container=je.createCanvasContainer(),this.canvas=je.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(t){this._opacity=Math.max(Math.min(t,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}draw(){const t=this.to-this.from;for(let e=0;e<=this.width;e++)for(let r=0;r<=this.height;r++){const i=e+r*this.width;let s=this.pixels[i];s<this.from&&(s=this.from),s>this.to&&(s=this.to);const a=(s-this.from)/t,l=Math.round(255*a),u=this.getPalette()[l];this.context.fillStyle=u,this.context.fillRect(e,r,1,1)}}exportAsPng(){const t=this.canvas.toDataURL(),e=document.createElement("a");e.download=this.instance.fileName.replace(".lrc","_exported.png"),e.href=t,e.click()}},Yl=class extends Tr{constructor(t){super(t),this._show=!1,this._hover=!1,this.layerRoot=je.createCursorLayerRoot(),this.center=je.createCursorLayerCenter(),this.axisX=je.createCursorLayerX(),this.axisY=je.createCursorLayerY(),this.label=je.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(t){this._show=t,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(t){this._hover=t,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(t,e,r){if(this.instance.root!==null){const i=this.instance.root.offsetWidth/this.instance.width,s=Math.round(t*i),n=Math.round(e*i);this.center.style.left=this.px(s),this.center.style.top=this.px(n),t>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),e>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${r.toFixed(3)} °C`}}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(t){return`${t}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},zl=class extends Tr{constructor(t){super(t),this.container=je.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Gl=class extends EventTarget{constructor(t,e){super(),this.source=t,this.group=e,this.root=null,this.canvasLayer=new ql(this),this.visibleLayer=new Wl(this,this.visibleUrl),this.cursorLayer=new Yl(this),this.listenerLayer=new zl(this),this._mounted=!1,this._onHover=void 0,this._onClick=void 0,this.cursorValue=new Il(this,void 0),this._isHover=!1,this.id=`instance_${this.group.id}_${this.source.url}`,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3}get url(){return this.source.url}get fileName(){return this.source.fileName}get visibleUrl(){return this.source.visibleUrl}get signature(){return this.source.signature}get dataType(){return this.source.fileDataType}get unit(){return this.source.unit}get width(){return this.source.width}get height(){return this.source.height}get timestamp(){return this.source.timestamp}get version(){return this.source.version}get streamCount(){return this.source.streamCount}get fileDataType(){return this.source.fileDataType}get frameCount(){return this.source.frameCount}get frames(){return this.source.frames}get duration(){return this.source.duration}get min(){return this.source.min}get max(){return this.source.max}get pixels(){return this.source.pixels}get pixelsForHistogram(){return this.source.pixelsForHistogram}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}reset(){}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(t){this._mounted=t}attachToDom(t){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=t,this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=t=>{this.cursorLayer.show=!0,this.isHover=!0;const e=this.width,r=this.root.clientWidth,i=e/r,s=Math.round(t.offsetX*i),n=Math.round(t.offsetY*i);this.group.cursorPosition.recieveCursorPosition({x:s,y:n}),this._onHover&&this._onHover(t,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=t=>{this._onClick&&this._onClick(t,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(t){this.attachToDom(t)}unmountFromDom(){this.detachFromDom()}setHoverHandler(t){this._onHover=t}setHoverCursor(t){this.root&&this.root.style.cursor!==t&&(this.root.style.cursor=t)}setClickHandler(t=void 0){this._onClick=t}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(t){console.log(t),this.draw()}get isHover(){return this._isHover}set isHover(t){this._isHover=t}recieveCursorPosition(t){this.cursorValue.recalculateFromCursor(t),t!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(t.x,t.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(t,e){const r=e*this.width+t;return this.pixels[r]}recieveRange(t){t!==void 0&&this.draw()}recieveOpacity(t){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=t)}get unitHuman(){return this.unit===0?"none":this.unit===1?"intensity":this.unit===2?"°C":this.unit===3?"Kelvin":"unit not specified"}get dataTypeHuman(){return this.dataType===0?"Float16":this.dataType===1?"Float32":this.dataType===2?"Int16":"error parsing data type"}exportAsPng(){this.canvasLayer.exportAsPng()}exportThermalDataAsSvg(){const t=Sr({useKeysAsHeaders:!0,fieldSeparator:";",filename:this.fileName.replace(".lrc","__thermal-data")}),e=this.frames.map(i=>{const{pixels:s,...n}=i;return console.log(s),n}),r=ko(t)(e);Po(t)(r)}},_t=class extends EventTarget{constructor(t,e,r,i,s,n,a,l,u,d,b,f,w,x,C){super(),this.url=t,this.signature=e,this.version=r,this.streamCount=i,this.fileDataType=s,this.unit=n,this.width=a,this.height=l,this.timestamp=u,this.pixels=d,this.min=b,this.max=f,this.frameCount=w,this.frames=x,this.visibleUrl=C,this.fileName=this.url.substring(this.url.lastIndexOf("/")+1);let _=[];this.frames.forEach(M=>{_=_.concat(M.pixels)}),this.pixelsForHistogram=_,this.duration=this.frames.length===0?0:this.frames[this.frames.length-1].timestamp-this.frames[0].timestamp}static async fromUrl(t,e){try{return await Ei.fromUrl(t,e)}catch{return null}}static async fromUrlWithErrors(t,e){return await Ei.fromUrl(t,e)}createInstance(t){return new Gl(this,t)}},Xl=class{constructor(t,e,r){this.url=t,this.blob=e,this.visibleUrl=r,this.isValidTimestamp=i=>Number.isInteger(i),this.isValidWidth=i=>Number.isInteger(i),this.isValidHeight=i=>Number.isInteger(i),this.isValidPixels=i=>i!==void 0&&i.length===this.width*this.height,this.isValidMin=i=>i!==void 0,this.isValidMax=i=>i!==void 0,this.isValidFrameCount=i=>Number.isInteger(i),this.isValidFrames=i=>i===void 0||this.frameCount===void 0?!1:i.length===this.frameCount,this.errors=[]}async init(){const t=await this.blob.arrayBuffer();this.data=new DataView(t);const e=t.slice(25);return this.frameSubset=e,this}async parse(){return await this.init(),await this.parseFile(),this.getThermalFile()}parseTimestamp(){const t=this.getTimestamp();this.isValidTimestamp(t)||this.logValidationError("timestamp",t),this.timestamp=t}parseWidth(){const t=this.getWidth();this.isValidWidth(t)||this.logValidationError("width",t),this.width=t}parseHeight(){const t=this.getHeight();this.isValidHeight(t)||this.logValidationError("height",t),this.height=t}async parsePixels(){const t=this.getPixels();this.pixels=t}parseMin(){const t=this.getMin();this.isValidMin(t)||this.logValidationError("min",t),this.min=t}parseMax(){const t=this.getMax();this.isValidMax(t)||this.logValidationError("max",t),this.max=t}parseFrameCount(){const t=this.getFrameCount();this.isValidFrameCount(t)||this.logValidationError("frameCount",t),this.frameCount=t}parseFrames(){const t=this.getFrames();this.isValidFrames(t)||this.logValidationError("frames",t.toString()),this.frames=t}logError(t){console.error(t),this.errors.push(t)}logValidationError(t,e){const r=`Invalid ${t} of ${this.url}: '${e.toString()}'`;this.logError(r)}getErrors(){return this.errors}encodeErrors(){return this.errors.join("+|+")}static decodeErrors(t){return t.split("+|+")}},we=class{static readDotnetTimestamp(t,e){const r=e.getBigInt64(t,!0),i=62135596800000n,s=10000n,n=24n*60n*60n*1000n*s,a=0x4000000000000000n,l=0x8000000000000000n;let d=r&0x3FFFFFFFFFFFFFFFn;r&l&&(d>a-n&&(d-=a),d<0&&(d+=n));const f=d/s-i;return Number(f)}static readFloat32(t,e){return e.getFloat32(t,!0)}static read8bNumber(t,e){return e.getUint8(t)}static readTemperatureArray(t,e,r,i,s){const n=e.buffer.slice(t);if(r===0){const a=new Uint16Array(n),l=Math.abs(i-s),u=65535;return[...a].map(d=>{const b=d/u;return i+l*b})}else if(r===1)return[...new Float32Array(n)];return[]}},Ql=class{constructor(t,e,r,i,s,n,a){this.arrayBuffer=t,this.width=e,this.height=r,this.dataType=i,this.frameCount=s,this.frameByteSize=n,this.pixelByteSize=a}parseFrame(t){if(!Number.isInteger(t))throw new Error(`The frame index ${t} is invalid!`);const e=t*this.frameByteSize,r=e+this.frameByteSize,i=this.arrayBuffer.slice(e,r),s=new DataView(i),n=we.readFloat32(8,s),a=we.readFloat32(12,s);return{timestamp:we.readDotnetTimestamp(0,s),min:n,max:a,modeMinInKelvin:we.readFloat32(16,s),modeMaxInKelvin:we.readFloat32(20,s),emissivity:we.readFloat32(24,s),reflectedTemperaatureInKelvin:we.readFloat32(28,s),distance:we.readFloat32(32,s),atmosphereTemperatureInKelvin:we.readFloat32(36,s),relativeHumidity:we.readFloat32(40,s),tau:we.readFloat32(44,s),windowTemperature:we.readFloat32(48,s),windowTransmissivity:we.readFloat32(52,s),isTauSet:we.read8bNumber(53,s),pixels:we.readTemperatureArray(57,s,this.dataType,n,a)}}},Kl=class extends Xl{constructor(){super(...arguments),this.isValidSignature=t=>t==="LRC\0",this.isValidVersion=t=>t===2,this.isStreamCountValid=t=>t===1,this.isDataTypeValid=t=>t===void 0?!1:[0,1,2].includes(t),this.isValidUnit=t=>t===2}async parseFile(){await this.parseSignature(),this.parseVersion(),this.parseDataType(),this.parseStreamCount(),this.parseTimestamp(),this.parseUnit(),this.parseWidth(),this.parseHeight(),this.parseFrameCount(),this.parseFrames(),this.parseMin(),this.parseMax(),await this.parsePixels()}async parseSignature(){const t=await this.readString(0,4);this.isValidSignature(t)||this.logValidationError("signature",t),this._signature=t}parseVersion(){const t=this.read8bNumber(4);this.isValidVersion(t)||this.logValidationError("version",t),this._version=t}parseStreamCount(){const t=this.read8bNumber(14);this.isStreamCountValid(t)||this.logValidationError("streamCount",t),this._streamCount=t}parseDataType(){const t=this.read8bNumber(15);this.isDataTypeValid(t)||this.logValidationError("fileDataType",t),this._fileDataType=t,this._pixelByteLength=t===0?2:4}get pixelByteLength(){return this._pixelByteLength}parseUnit(){const t=this.read8bNumber(16);this.isValidUnit(t)||this.logValidationError("unit",t),this._unit=t}getFrameCount(){return this.getNumberOfFrames()}getMin(){return this.frames.reduce((t,e)=>e.min<t?e.min:t,1/0)}getMax(){return this.frames.reduce((t,e)=>e.max>t?e.max:t,-1/0)}getWidth(){return this.read16bNumber(17)}getHeight(){return this.read16bNumber(19)}getTimestamp(){return we.readDotnetTimestamp(5,this.data)}getFrameSize(){if(this._fileDataType===void 0||this.width===void 0||this.height===void 0||this.pixelByteLength===void 0)throw new Error("Trying to read frame size before necessary attributes are known");return 57+this.width*this.height*this.pixelByteLength}getNumberOfFrames(){const t=this.getFrameSize();return this.frameSubset.byteLength/t}getFrames(){const t=[],e=new Ql(this.frameSubset,this.width,this.height,this._fileDataType,this.frameCount,this.getFrameSize(),this.pixelByteLength);for(let r=0;r<this.frameCount;r++)t.push(e.parseFrame(r));return t}async readTemperatureArray(t){const e=(await this.blob.arrayBuffer()).slice(t,t+this.width*this.height*this.pixelByteLength);if(this._fileDataType===0){const r=new Uint16Array(e),i=Math.abs(this.min-this.max),s=65535;return[...r].map(n=>{const a=n/s;return this.min+i*a})}else if(this._fileDataType===1)return[...new Float32Array(e)];return[]}getPixels(){return this.frames&&this.frames.length>0?this.frames[0].pixels:[]}isValid(){return this.errors.length===0&&this.isValidSignature(this._signature)&&this.isStreamCountValid(this._streamCount)&&this.isDataTypeValid(this._fileDataType)&&this.isValidVersion(this._version)&&this.isValidUnit(this._unit)&&this.isValidTimestamp(this.timestamp)&&this.isValidWidth(this.width)&&this.isValidHeight(this.height)&&this.isValidPixels(this.pixels)&&this.isValidMin(this.min)&&this.isValidMax(this.max)&&this.isValidFrameCount(this.frameCount)}getThermalFile(){if(!this.isValid())throw new Error(this.encodeErrors());return new _t(this.url,this._signature,this._version,this._streamCount,this._fileDataType,this._unit,this.width,this.height,this.timestamp,this.pixels,this.min,this.max,this.frameCount,this.frames,this.visibleUrl)}async readString(t,e){return await this.blob.slice(t,e).text()}read16bNumber(t){return this.data.getUint16(t,!0)}read8bNumber(t){return this.data.getUint8(t)}},Ei=class Pi{constructor(){}static async fromUrl(e,r){const i=new Pi;return i.thermalUrl=e,i.visibleUrl=r,await i.loadFromUrl()}async loadFromUrl(){const e=await so(this.thermalUrl);if(this.blob=await e.blob(),e.status!==200)throw new Error(`There was an error loading '${this.thermalUrl}'`);return this.parser=this.getParserInstance(),await this.parser.parse()}static async fromFile(e){const r=new Pi;return r.thermalUrl=e.name,r.blob=e,await r.loadFromBlob()}async loadFromBlob(){return this.parser=this.getParserInstance(),await this.parser.parse()}getParserInstance(){if(this.thermalUrl.endsWith(".lrc"))return new Kl(this.thermalUrl,this.blob,this.visibleUrl);throw new Error("No parser found!")}},Zl=class extends Ie{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Jl=class extends Ie{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(s=>s.height>=e);console.log(this.parent.histogram.value);const i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},ec=class extends Ie{constructor(){super(...arguments),this._hover=this.value!==void 0}get hover(){return this._hover}validate(t){return t}afterSetEffect(t){this._hover=this.value!==void 0,this.parent.instances.forEveryInstance(e=>e.recieveCursorPosition(t))}recieveCursorPosition(t){this.value=t}},tc=class extends Ie{constructor(){super(...arguments),this._requestedRemovals=new Map,this._map=new Map}enqueueAdd(t,e,r){this.parent.registry.fetcher.request(t,e,(i,s)=>{if(i instanceof _t){const n=this.instantiateSource(i);r&&r(n)}else r&&r(void 0,s??"Něco se pokazilo v instanci")})}enqueueRemove(t,e){this._requestedRemovals.has(t)?e&&this._requestedRemovals.get(t).callbacks.push(e):this._requestedRemovals.set(t,{url:t,callbacks:e?[e]:[]})}async cleanup(){const t=Object.values(this._requestedRemovals).map(e=>e.url);this.value=this.value.filter(e=>{var i;return t.includes(e.url)?((i=this._requestedRemovals.get(e.url))==null||i.callbacks.forEach(s=>s()),!0):!1}),this._requestedRemovals.clear(),this.parent.registry.postLoadedProcessing()}get map(){return this._map}validate(t){return t}afterSetEffect(t){this.map.clear(),t.forEach(e=>this._map.set(e.url,e))}instantiateSource(t){if(this._map.has(t.url))return this._map.get(t.url);{const e=t.createInstance(this.parent);return this.value=[...this.value,e],e}}instantiateSources(t){const e=[];t.forEach(r=>{this._map.has(r.url)||e.push(r.createInstance(this.parent))}),this.value=e}removeAllInstances(){this.forEveryInstance(t=>t.destroySelfAndBelow()),this.value=[]}forEveryInstance(t){this.value.forEach(e=>t(e))}},pn=class extends Ie{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},rc=class extends pn{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.instances.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},ic=class{constructor(t,e,r,i){this.registry=t,this.id=e,this.name=r,this.description=i,this.hash=Math.random(),this.minmax=new rc(this,void 0),this.instances=new tc(this,[]),this.cursorPosition=new ec(this,void 0),this.forEveryInstance=s=>{this.instances.value.forEach(n=>s(n))}}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.instances.removeAllInstances()}reset(){this.instances.reset(),this.minmax.reset(),this.cursorPosition.reset()}},sc=class extends Ie{constructor(){super(...arguments),this._map=new Map}get map(){return this._map}validate(t){return t}afterSetEffect(t){this._map.clear(),t.forEach(e=>this._map.set(e.id,e))}addOrGetGroup(t,e,r){if(this._map.has(t))return this._map.get(t);const i=new ic(this.parent,t,e,r);return this._map.set(t,i),this.value.push(i),this.value=[...this.value],i}removeGroup(t){var e;this._map.has(t)&&((e=this._map.get(t))==null||e.destroySelfAndBelow(),this._map.delete(t),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(t=>t.destroySelfAndBelow()),this.value=[]}},nc=class extends Ie{constructor(){super(...arguments),this._resolution=150,this.buffer=new Map,this.bufferPixelsCount=0,this._bufferResolution=1e3}get resolution(){return this._resolution}set bufferResolution(t){this._bufferResolution=Math.round(Math.max(t,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(t){this._resolution=Math.round(Math.min(Math.max(t,2),400))}validate(t){return t.length!==this.resolution+1&&t.length,t}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}refreshBufferFromCurrentPixels(){const t=new Map;let e=0;if(this.parent.minmax!==void 0&&this.parent.groups.value.length!==0){const r=this.parent.minmax.distanceInCelsius;if(r!==void 0){const i=r/this._bufferResolution,s=this.parent.minmax.value;let n=[];this.parent.forEveryInstance(l=>{n=n.concat(l.pixelsForHistogram)}),n.sort((l,u)=>l-u);let a=s.min+i;for(;a!==!1;){const l=n.findIndex(b=>b>=a),u=n.slice(0,l).length;t.set(a-i/2,u),e+=u,n=n.slice(l);const d=a+i;a=d<=s.max?d:!1}}}this.buffer=t,this.bufferPixelsCount=e}recalculateHistogram(){if(this.parent.minmax.value!==void 0&&this.parent.minmax.distanceInCelsius!==void 0){let t=Array.from(this.buffer.keys()),e=Array.from(this.buffer.values());const r=this.parent.minmax.value,i=this.parent.minmax.distanceInCelsius/this.resolution,s=[];let n=0,a=r.min;for(;a<r.max;){const u=a,d=a+i,b=t.findIndex(C=>C>=d),w=e.slice(0,b).reduce((C,_)=>C+_,0),x=w/this.bufferPixelsCount;s.push({from:u,to:d,percentage:x,count:w}),n<w&&(n=w),t=t.slice(b),e=e.slice(b),a+=i}const l=s.map(u=>({...u,height:u.count/n*100}));this.value=l}}_getHistorgramFromAllGroups(){if(this.parent.minmax.value===void 0||this.parent.groups.value.length,this.parent.minmax.value===void 0||this.parent.groups.value.length===0)return[];{const t=this.parent.groups.value.reduce((d,b)=>{const f=b.instances.value.reduce((w,x)=>(w=[...w,...x.pixels],w),[]);return[...d,...f]},[]),e=[],r=this.resolution,s=(this.parent.minmax.value.max-this.parent.minmax.value.min)/r;for(let d=0;d<r;d++){const b=s*d+this.parent.minmax.value.min,f=b+s;e.push([b,f])}const n=[];let a=t.length;for(const d of e){const b=t.filter(f=>f>=d[0]&&f<d[1]).length;a=a+b,n.push({from:d[0],to:d[1],count:b})}const l=n.map(d=>({...d,percentage:d.count/a*100})),u=Math.max(...l.map(d=>d.percentage));return l.map(d=>({...d,height:d.percentage/u*100}))}}},ac=class extends Ie{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},oc=class extends pn{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},lc=class{constructor(t){this.registry=t,this.requests=new Map}get requestArray(){return Array.from(this.requests.values())}request(t,e,r){var i;if(this.requests.has(t))r&&((i=this.requests.get(t))==null||i.callbacks.push(r));else{const s={thermalUrl:t,visibleUrl:e,callbacks:r?[r]:[]};this.requests.set(t,s)}this.timer===void 0&&(this.timer=setTimeout(this.resolve.bind(this),0))}async resolve(){const t=await Promise.all(this.requestArray.map(async e=>{const r={request:e};if(this.registry.manager.isUrlRegistered(e.thermalUrl))r.output=this.registry.manager.sourcesByUrl[e.thermalUrl];else try{const i=await _t.fromUrlWithErrors(e.thermalUrl,e.visibleUrl);i&&(r.output=i)}catch(i){i instanceof Error&&(r.output=i.message)}return r})).then(e=>e.map(r=>(r.output instanceof _t?r.request.callbacks.forEach(i=>{i(r.output),this.registry.manager.registerSource(r.output)}):r.request.callbacks.forEach(i=>{r.output instanceof _t||i(void 0,r.output??"Něco se pokazilo")}),r.output)));return clearTimeout(this.timer),this.timer=void 0,this.registry.postLoadedProcessing(),t}},Ds=class Si extends EventTarget{constructor(e,r,i){super(),this.group=e,this.url=r,this.visibleUrl=i}static single(e,r,i){return new Si(e,r,i)}static multiple(e,r){return r.map(i=>new Si(e,i.thermalUrl,i.visibleUrl))}async fetch(){if(this.group.registry.manager.isUrlRegistered(this.url))return{file:this.group.registry.manager.sourcesByUrl[this.url],request:this};const e=await _t.fromUrl(this.url,this.visibleUrl);if(e){if(e!==null)return{file:e,request:this}}else return null;return null}},cc=class{constructor(t){this.registry=t,this._requests=[]}get requests(){return this._requests}get loading(){return this.registry.loading.value}requestFile(t,e,r){if(this.loading===!0){console.error(`The registry ${this.registry.id} is already loading! Can not request  a single file!`);return}this._requests.push(Ds.single(t,e,r))}requestFiles(t,e){if(this.loading===!0){console.error(`The group ${this.registry.id} is already loading! Can not request multiple files!`);return}this._requests=[...this._requests,...Ds.multiple(t,e)]}async resolveQuery(){this.loading;const t=await Promise.all(this._requests.map(r=>r.fetch())),e={};for(const r of t)if(r!==null){const i=this.registry.manager.registerSource(r.file);r.request.group.id in e?e[r.request.group.id].push(i):e[r.request.group.id]=[i]}for(const r in e){const i=this.registry.groups.map.get(r);i==null||i.instances.instantiateSources(e[r])}return this._requests=[],this.registry.groups.value}},hc=class{constructor(t,e,r){this.id=t,this.manager=e,this.hash=Math.random(),this.loader=new cc(this),this.groups=new sc(this,[]),this.fetcher=new lc(this),this.opacity=new Zl(this,1),this.minmax=new oc(this,void 0),this.loading=new ac(this,!1),this.range=new Jl(this,void 0),this.histogram=new nc(this,[]),this.palette=this.manager.palette,r&&r.histogramResolution!==void 0&&r.histogramResolution>0&&this.histogram.setResolution(r.histogramResolution)}forEveryGroup(t){this.groups.value.forEach(t)}forEveryInstance(t){this.forEveryGroup(e=>e.instances.forEveryInstance(t))}async loadFiles(t){this.reset(),Object.entries(t).forEach(([e,r])=>{const i=this.groups.addOrGetGroup(e);r.forEach(s=>{this.loader.requestFile(i,s.thermalUrl,s.visibleUrl)})}),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async loadOneFile(t,e){this.reset();const r=this.groups.addOrGetGroup(e);this.loader.requestFile(r,t.thermalUrl,t.visibleUrl),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}async processDroppedFiles(t,e){this.reset(),this.loading.markAsLoading(),this.removeAllChildren();const r=await Promise.all(t.map(s=>Ei.fromFile(s))).then(s=>s.filter(n=>n!==null));r.forEach(s=>this.manager.registerSource(s)),this.groups.addOrGetGroup(e).instances.instantiateSources(r),this.postLoadedProcessing()}enqueueFile(t,e,r){const i=this.groups.addOrGetGroup(t);this.loader.requestFile(i,e,r)}async loadQuery(){this.reset(),this.loading.markAsLoading(),await this.loader.resolveQuery(),this.postLoadedProcessing()}postLoadedProcessing(){console.log("postprocessing"),this.forEveryGroup(t=>t.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.refreshBufferFromCurrentPixels(),this.histogram.recalculateWithCurrentSetting(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(t=>t.reset()),this.loader.loading===!1&&(this.opacity.reset(),this.minmax.reset())}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},uc=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},dc=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],pc=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],gc=uc(),gn={iron:{pixels:pc,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:dc,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:gc,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},fc=class extends Ie{get availablePalettes(){return gn}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},fn=class extends EventTarget{constructor(t){super(),this.registries={},this.palette=new fc(this,"jet"),this._sourcesByUrl={},this.isUrlRegistered=e=>Object.keys(this.sourcesByUrl).includes(e),this.id=Math.random(),t&&t.palette&&this.palette.setPalette(t.palette)}forEveryRegistry(t){Object.values(this.registries).forEach(e=>t(e))}addOrGetRegistry(t,e){return this.registries[t]===void 0&&(this.registries[t]=new hc(t,this,e)),this.registries[t]}removeRegistry(t){this.registries[t]!==void 0&&(this.registries[t].destroySelfAndBelow(),delete this.registries[t])}get sourcesByUrl(){return this._sourcesByUrl}getSourcesArray(){return Object.values(this.sourcesByUrl)}getRegisteredUrls(){return Object.keys(this.sourcesByUrl)}registerSource(t){return this.getRegisteredUrls().includes(t.url)?this.sourcesByUrl[t.url]:(this.sourcesByUrl[t.url]=t,t)}},Ni=class{};Ni.inputToDate=t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t};var Le=class Ke extends Ni{static humanRangeDates(e,r){return e=Ke.inputToDate(e),r=Ke.inputToDate(r),e.getUTCDate()===r.getUTCDate()?Ke.humanDate(e):[Ke.humanDate(e),Ke.humanDate(r)].join(" - ")}static human(e){return`${Ke.humanDate(e)} ${Ke.humanTime(e,!0)} `}};Le.isoDate=t=>(t=Le.inputToDate(t),Hi(t,{representation:"date"}));Le.isoTime=t=>(t=Le.inputToDate(t),Hi(t,{representation:"time"}));Le.isoComplete=t=>(t=Le.inputToDate(t),Hi(t));Le.humanTime=(t,e=!1)=>(t=Le.inputToDate(t),dn(t,e?"HH:mm:ss":"HH:mm"));Le.humanDate=(t,e=!1)=>(t=Le.inputToDate(t),dn(t,e?"d. M.":"d. M. yyyy"));var mc=Le,$t=class extends Ni{};$t.down=(t,e)=>e==="jednu hodinu"?Vl(t):e==="jeden den"?Ai(t):e==="jeden týden"?kt(t):e==="jeden měsíc"?No(t):cn(t);$t.up=(t,e)=>e==="jednu hodinu"?Vo(t):e==="jeden den"?Bo(t):e==="jeden týden"?Io(t):e==="jeden měsíc"?Ho(t):Uo(t);$t.pick=(t,e)=>[$t.down(t,e),$t.up(t,e)];$t.modify=(t,e,r)=>{switch(r){case"jednu hodinu":return Do(t,e);case"jeden den":return ks(t,e);case"jeden týden":return ks(t,e*7);case"jeden měsíc":return nn(t,e);case"jeden rok":return Fo(t,e)}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let mn=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Dr=class{constructor(e,r,i,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const n=r;this.context=n.context,this.callback=n.callback,this.subscribe=n.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new mn(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bc=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:s}=this.subscriptions.get(e);e(this.value,s)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let vc=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Gt=class extends bc{constructor(e,r,i){var s,n;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const l=a.composedPath()[0];a.context===this.context&&l!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,l,a.subscribe))},this.onProviderRequest=a=>{const l=a.composedPath()[0];if(a.context!==this.context||l===this.host)return;const u=new Set;for(const[d,{consumerHost:b}]of this.subscriptions)u.has(d)||(u.add(d),b.dispatchEvent(new mn(this.context,d,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(n=(s=this.host).addController)==null||n.call(s,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new vc(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yc({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Gt(this,{context:t}))}),{get(){return e.get.call(this)},set(s){var n;return(n=i.get(this))==null||n.setValue(s),e.set.call(this,s)},init(s){var n;return(n=i.get(this))==null||n.setValue(s),s}};{e.constructor.addInitializer(a=>{i.set(a,new Gt(a,{context:t}))});const s=Object.getOwnPropertyDescriptor(e,r);let n;if(s===void 0){const a=new WeakMap;n={get(){return a.get(this)},set(l){i.get(this).setValue(l),a.set(this,l)},configurable:!0,enumerable:!0}}else{const a=s.set;n={...s,set(l){i.get(this).setValue(l),a==null||a.call(this,l)}}}return void Object.defineProperty(e,r,n)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=globalThis,Ui=vr.ShadowRoot&&(vr.ShadyCSS===void 0||vr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vi=Symbol(),Ms=new WeakMap;let bn=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==Vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ui&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=Ms.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ms.set(r,e))}return e}toString(){return this.cssText}};const wc=t=>new bn(typeof t=="string"?t:t+"",void 0,Vi),me=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new bn(r,t,Vi)},xc=(t,e)=>{if(Ui)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=vr.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},Ls=Ui?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return wc(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_c,defineProperty:$c,getOwnPropertyDescriptor:Cc,getOwnPropertyNames:Ac,getOwnPropertySymbols:kc,getPrototypeOf:Ec}=Object,Je=globalThis,Rs=Je.trustedTypes,Pc=Rs?Rs.emptyScript:"",bi=Je.reactiveElementPolyfillSupport,qt=(t,e)=>t,wr={toAttribute(t,e){switch(e){case Boolean:t=t?Pc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ii=(t,e)=>!_c(t,e),Fs={attribute:!0,type:String,converter:wr,reflect:!1,hasChanged:Ii};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Je.litPropertyMetadata??(Je.litPropertyMetadata=new WeakMap);class xt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Fs){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&$c(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=Cc(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const l=s==null?void 0:s.call(this);n.call(this,a),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fs}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;const e=Ec(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){const r=this.properties,i=[...Ac(r),...kc(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(Ls(s))}else e!==void 0&&r.push(Ls(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:wr).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,r){var n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:wr;this._$Em=s,this[s]=l.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ii)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,a]of s)a.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},xt[qt("elementProperties")]=new Map,xt[qt("finalized")]=new Map,bi==null||bi({ReactiveElement:xt}),(Je.reactiveElementVersions??(Je.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=globalThis,xr=Yt.trustedTypes,js=xr?xr.createPolicy("lit-html",{createHTML:t=>t}):void 0,vn="$lit$",Ze=`lit$${Math.random().toFixed(9).slice(2)}$`,yn="?"+Ze,Sc=`<${yn}>`,ht=document,Xt=()=>ht.createComment(""),Qt=t=>t===null||typeof t!="object"&&typeof t!="function",wn=Array.isArray,Oc=t=>wn(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",vi=`[ 	
\f\r]`,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bs=/-->/g,Hs=/>/g,ot=RegExp(`>|${vi}(?:([^\\s"'>=/]+)(${vi}*=${vi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ns=/'/g,Us=/"/g,xn=/^(?:script|style|textarea|title)$/i,Tc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),F=Tc(1),Et=Symbol.for("lit-noChange"),re=Symbol.for("lit-nothing"),Vs=new WeakMap,ct=ht.createTreeWalker(ht,129);function _n(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return js!==void 0?js.createHTML(e):e}const Dc=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":"",a=It;for(let l=0;l<r;l++){const u=t[l];let d,b,f=-1,w=0;for(;w<u.length&&(a.lastIndex=w,b=a.exec(u),b!==null);)w=a.lastIndex,a===It?b[1]==="!--"?a=Bs:b[1]!==void 0?a=Hs:b[2]!==void 0?(xn.test(b[2])&&(s=RegExp("</"+b[2],"g")),a=ot):b[3]!==void 0&&(a=ot):a===ot?b[0]===">"?(a=s??It,f=-1):b[1]===void 0?f=-2:(f=a.lastIndex-b[2].length,d=b[1],a=b[3]===void 0?ot:b[3]==='"'?Us:Ns):a===Us||a===Ns?a=ot:a===Bs||a===Hs?a=It:(a=ot,s=void 0);const x=a===ot&&t[l+1].startsWith("/>")?" ":"";n+=a===It?u+Sc:f>=0?(i.push(d),u.slice(0,f)+vn+u.slice(f)+Ze+x):u+Ze+(f===-2?l:x)}return[_n(t,n+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class Kt{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,a=0;const l=e.length-1,u=this.parts,[d,b]=Dc(e,r);if(this.el=Kt.createElement(d,i),ct.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(s=ct.nextNode())!==null&&u.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const f of s.getAttributeNames())if(f.endsWith(vn)){const w=b[a++],x=s.getAttribute(f).split(Ze),C=/([.?@])?(.*)/.exec(w);u.push({type:1,index:n,name:C[2],strings:x,ctor:C[1]==="."?Lc:C[1]==="?"?Rc:C[1]==="@"?Fc:Mr}),s.removeAttribute(f)}else f.startsWith(Ze)&&(u.push({type:6,index:n}),s.removeAttribute(f));if(xn.test(s.tagName)){const f=s.textContent.split(Ze),w=f.length-1;if(w>0){s.textContent=xr?xr.emptyScript:"";for(let x=0;x<w;x++)s.append(f[x],Xt()),ct.nextNode(),u.push({type:2,index:++n});s.append(f[w],Xt())}}}else if(s.nodeType===8)if(s.data===yn)u.push({type:2,index:n});else{let f=-1;for(;(f=s.data.indexOf(Ze,f+1))!==-1;)u.push({type:7,index:n}),f+=Ze.length-1}n++}}static createElement(e,r){const i=ht.createElement("template");return i.innerHTML=e,i}}function Pt(t,e,r=t,i){var a,l;if(e===Et)return e;let s=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const n=Qt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Pt(t,s._$AS(t,e.values),s,i)),e}class Mc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??ht).importNode(r,!0);ct.currentNode=s;let n=ct.nextNode(),a=0,l=0,u=i[0];for(;u!==void 0;){if(a===u.index){let d;u.type===2?d=new tr(n,n.nextSibling,this,e):u.type===1?d=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(d=new jc(n,this,e)),this._$AV.push(d),u=i[++l]}a!==(u==null?void 0:u.index)&&(n=ct.nextNode(),a++)}return ct.currentNode=ht,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class tr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=re,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Pt(this,e,r),Qt(e)?e===re||e==null||e===""?(this._$AH!==re&&this._$AR(),this._$AH=re):e!==this._$AH&&e!==Et&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==re&&Qt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ht.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Kt.createElement(_n(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const a=new Mc(s,this),l=a.u(this.options);a.p(r),this.T(l),this._$AH=a}}_$AC(e){let r=Vs.get(e.strings);return r===void 0&&Vs.set(e.strings,r=new Kt(e)),r}k(e){wn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new tr(this.S(Xt()),this.S(Xt()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Mr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=re,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=re}_$AI(e,r=this,i,s){const n=this.strings;let a=!1;if(n===void 0)e=Pt(this,e,r,0),a=!Qt(e)||e!==this._$AH&&e!==Et,a&&(this._$AH=e);else{const l=e;let u,d;for(e=n[0],u=0;u<n.length-1;u++)d=Pt(this,l[i+u],r,u),d===Et&&(d=this._$AH[u]),a||(a=!Qt(d)||d!==this._$AH[u]),d===re?e=re:e!==re&&(e+=(d??"")+n[u+1]),this._$AH[u]=d}a&&!s&&this.j(e)}j(e){e===re?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Lc extends Mr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===re?void 0:e}}class Rc extends Mr{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==re)}}class Fc extends Mr{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Pt(this,e,r,0)??re)===Et)return;const i=this._$AH,s=e===re&&i!==re||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==re&&(i===re||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class jc{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Pt(this,e)}}const yi=Yt.litHtmlPolyfillSupport;yi==null||yi(Kt,tr),(Yt.litHtmlVersions??(Yt.litHtmlVersions=[])).push("3.1.4");const Bc=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new tr(e.insertBefore(Xt(),n),n,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Be=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Et}};var Zs;Be._$litElement$=!0,Be.finalized=!0,(Zs=globalThis.litElementHydrateSupport)==null||Zs.call(globalThis,{LitElement:Be});const wi=globalThis.litElementPolyfillSupport;wi==null||wi({LitElement:Be});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const he=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hc={attribute:!0,type:String,converter:wr,reflect:!1,hasChanged:Ii},Nc=(t=Hc,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(l){const u=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,u,t)},init(l){return l!==void 0&&this.P(a,void 0,t),l}}}if(i==="setter"){const{name:a}=r;return function(l){const u=this[a];e.call(this,l),this.requestUpdate(a,u,t)}}throw Error("Unsupported decorator location: "+i)};function ie(t){return(e,r)=>typeof r=="object"?Nc(t,e,r):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ae(t){return ie({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lr(t){return(e,r)=>{const{slot:i,selector:s}=t??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Uc(e,r,{get(){var u;const a=(u=this.renderRoot)==null?void 0:u.querySelector(n),l=(a==null?void 0:a.assignedElements(t))??[];return s===void 0?l:l.filter(d=>d.matches(s))}})}}class $n extends Be{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),ji.version,this.hash].join("__")}log(...e){console.log(this.identificator,...e)}}const Cn="manager",An="registry",kn="group",En="group";var Vc=Object.defineProperty,Ic=Object.getOwnPropertyDescriptor,Pn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Ic(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Vc(e,r,s),s};let _r=class extends $n{constructor(){super(...arguments),this.manager=new fn}getClassName(){return"ThermalManagerElement"}render(){return F`
            <slot></slot>
        `}};_r.styles=me`

    button {
        color: green;
    }

    div {
    color: blue;
    }
    
    `;Pn([yc({context:Cn})],_r.prototype,"manager",2);_r=Pn([he("thermal-manager")],_r);class Wi extends $n{constructor(){super(...arguments),this._injectedManager=new Dr(this,{context:Cn,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new fn}}var Wc=Object.defineProperty,qc=Object.getOwnPropertyDescriptor,Sn=(t,e,r,i)=>{for(var s=i>1?void 0:i?qc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Wc(e,r,s),s};let St=class extends Wi{constructor(){super(...arguments),this.uuid=St.DEFAULT_NAME,this.provider=new Gt(this,{context:An,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const t=this.manager.addOrGetRegistry(this.uuid);this.provider.setValue(t,!0)}render(){return F`
            <slot></slot>
        `}};St.DEFAULT_NAME="default_registry";St.styles=me`

    button {
        color: pink;
    }

    div {
        color: navy;
    }

        blockquote {
            color: gray
        }

        h2 {
            color: yellow;
        }
    
    `;Sn([ie({type:String,attribute:!0,reflect:!0})],St.prototype,"uuid",2);St=Sn([he("thermal-registry")],St);var Yc=Object.defineProperty,zc=Object.getOwnPropertyDescriptor,Gc=(t,e,r,i)=>{for(var s=zc(e,r),n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=a(e,r,s)||s);return s&&Yc(e,r,s),s};class Ge extends Wi{constructor(){super(...arguments),this._injectedRegistry=new Dr(this,{context:An,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}Gc([Ae()],Ge.prototype,"registry");var Xc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,Rr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qc(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xc(e,r,s),s};let ut=class extends Ge{constructor(){super(...arguments),this.uuid=ut.DEFAULT_NAME,this.provider=new Gt(this,{context:kn,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.provider.setValue(this.group,!0)}updated(t){t.has("name")&&this.log(t,this.name)}render(){return F`
            <slot></slot>
        `}};ut.DEFAULT_NAME="default_group";Rr([ie({type:String,attribute:!0,reflect:!0})],ut.prototype,"uuid",2);Rr([ie({type:String,attribute:!0,reflect:!0})],ut.prototype,"name",2);Rr([ie({type:String,attribute:!0,reflect:!0})],ut.prototype,"description",2);ut=Rr([he("thermal-group")],ut);class qi extends Ge{constructor(){super(...arguments),this._injectedGroup=new Dr(this,{context:kn,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kc=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zc={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Jc=t=>(...e)=>({_$litDirective$:t,values:e});class eh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),zt(s,e);return!0},$r=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},On=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),ih(e)}};function th(t){this._$AN!==void 0?($r(this),this._$AM=t,On(this)):this._$AM=t}function rh(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)zt(i[n],!1),$r(i[n]);else i!=null&&(zt(i,!1),$r(i));else zt(this,t)}const ih=t=>{t.type==Zc.CHILD&&(t._$AP??(t._$AP=rh),t._$AQ??(t._$AQ=th))};class sh extends eh{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),On(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(zt(this,e),$r(this))}setValue(e){if(Kc(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=()=>new nh;class nh{}const xi=new WeakMap,Ee=Jc(class extends sh{render(t){return re}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),re}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=xi.get(e);r===void 0&&(r=new WeakMap,xi.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=xi.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ah=Object.defineProperty,oh=Object.getOwnPropertyDescriptor,rt=(t,e,r,i)=>{for(var s=i>1?void 0:i?oh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ah(e,r,s),s};let He=class extends qi{constructor(){super(),this.canvasContainer=ke(),this.errors=[],this.provider=new Gt(this,{context:En,initialValue:void 0})}getClassName(){return"FileContextElement"}onFileChanged(t,e){console.log(t,e)}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}enqueueInTheRegistry(){this.thermal&&this.group.instances.enqueueAdd(this.thermal,this.visible,(t,e)=>{t?(this.provider.setValue(t),this.file=t,this.errors=[]):e&&(this.errors=e.split("+|+"))})}willUpdate(t){super.willUpdate(t),t.has("thermal")||t.has("visible"),t.has("file")&&this.file&&this.file.unmountFromDom()}update(t){var e,r;if(super.update(t),t.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(e=this.file)==null||e.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return F`

            
        ${this.barElements.length>=0?F`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?F`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?F`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${Ee(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?F`
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
                                    ${this.errors.map(t=>F`<li>${t}</li>`)}
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
        
        `}};He.styles=me`

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
    
    `;rt([ie({type:String,reflect:!0})],He.prototype,"thermal",2);rt([ie({type:String,reflect:!0})],He.prototype,"visible",2);rt([Ae()],He.prototype,"file",2);rt([Ae()],He.prototype,"errors",2);rt([Lr({slot:"bar",flatten:!0})],He.prototype,"barItems",2);rt([Lr({slot:"bar",flatten:!0})],He.prototype,"barElements",2);rt([Lr({slot:"pre",flatten:!0})],He.prototype,"pre",2);He=rt([he("thermal-image")],He);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,Tn=(t,e,r,i)=>{for(var s=i>1?void 0:i?ch(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&lh(e,r,s),s};let Cr=class extends Be{constructor(){super(),this.dialogRef=ke(),this.closeButtonRef=ke(),this.invokerRef=ke()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return F`
            <slot name="invoker" ${Ee(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${Ee(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${Ee(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Cr.styles=me`

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

        
    
    `;Tn([ie({type:String,reflect:!0})],Cr.prototype,"label",2);Cr=Tn([he("thermal-dialog")],Cr);var hh=Object.defineProperty,uh=Object.getOwnPropertyDescriptor,Yi=(t,e,r,i)=>{for(var s=i>1?void 0:i?uh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&hh(e,r,s),s};let dt=class extends Be{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return F`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};dt.VARIANTS=["slate","primary","foreground","background"];dt.styles=me`

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
    
    `;Yi([ie({type:String,converter:{fromAttribute:t=>dt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],dt.prototype,"variant",2);Yi([ie({type:String})],dt.prototype,"size",2);dt=Yi([he("thermal-button")],dt);const Ot=Math.min,qe=Math.max,Ar=Math.round,et=t=>({x:t,y:t}),dh={left:"right",right:"left",bottom:"top",top:"bottom"},ph={start:"end",end:"start"};function Is(t,e,r){return qe(t,Ot(e,r))}function rr(t,e){return typeof t=="function"?t(e):t}function Ye(t){return t.split("-")[0]}function Fr(t){return t.split("-")[1]}function Dn(t){return t==="x"?"y":"x"}function Mn(t){return t==="y"?"height":"width"}function ir(t){return["top","bottom"].includes(Ye(t))?"y":"x"}function Ln(t){return Dn(ir(t))}function gh(t,e,r){r===void 0&&(r=!1);const i=Fr(t),s=Ln(t),n=Mn(s);let a=s==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[n]>e.floating[n]&&(a=kr(a)),[a,kr(a)]}function fh(t){const e=kr(t);return[Oi(t),e,Oi(e)]}function Oi(t){return t.replace(/start|end/g,e=>ph[e])}function mh(t,e,r){const i=["left","right"],s=["right","left"],n=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?s:i:e?i:s;case"left":case"right":return e?n:a;default:return[]}}function bh(t,e,r,i){const s=Fr(t);let n=mh(Ye(t),r==="start",i);return s&&(n=n.map(a=>a+"-"+s),e&&(n=n.concat(n.map(Oi)))),n}function kr(t){return t.replace(/left|right|bottom|top/g,e=>dh[e])}function vh(t){return{top:0,right:0,bottom:0,left:0,...t}}function Rn(t){return typeof t!="number"?vh(t):{top:t,right:t,bottom:t,left:t}}function Tt(t){const{x:e,y:r,width:i,height:s}=t;return{width:i,height:s,top:r,left:e,right:e+i,bottom:r+s,x:e,y:r}}function Ws(t,e,r){let{reference:i,floating:s}=t;const n=ir(e),a=Ln(e),l=Mn(a),u=Ye(e),d=n==="y",b=i.x+i.width/2-s.width/2,f=i.y+i.height/2-s.height/2,w=i[l]/2-s[l]/2;let x;switch(u){case"top":x={x:b,y:i.y-s.height};break;case"bottom":x={x:b,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-s.width,y:f};break;default:x={x:i.x,y:i.y}}switch(Fr(e)){case"start":x[a]-=w*(r&&d?-1:1);break;case"end":x[a]+=w*(r&&d?-1:1);break}return x}const yh=async(t,e,r)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=r,l=n.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:s}),{x:b,y:f}=Ws(d,i,u),w=i,x={},C=0;for(let _=0;_<l.length;_++){const{name:M,fn:z}=l[_],{x:I,y:Q,data:J,reset:K}=await z({x:b,y:f,initialPlacement:i,placement:w,strategy:s,middlewareData:x,rects:d,platform:a,elements:{reference:t,floating:e}});b=I??b,f=Q??f,x={...x,[M]:{...x[M],...J}},K&&C<=50&&(C++,typeof K=="object"&&(K.placement&&(w=K.placement),K.rects&&(d=K.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:s}):K.rects),{x:b,y:f}=Ws(d,w,u)),_=-1)}return{x:b,y:f,placement:w,strategy:s,middlewareData:x}};async function Fn(t,e){var r;e===void 0&&(e={});const{x:i,y:s,platform:n,rects:a,elements:l,strategy:u}=t,{boundary:d="clippingAncestors",rootBoundary:b="viewport",elementContext:f="floating",altBoundary:w=!1,padding:x=0}=rr(e,t),C=Rn(x),M=l[w?f==="floating"?"reference":"floating":f],z=Tt(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(M)))==null||r?M:M.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:d,rootBoundary:b,strategy:u})),I=f==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,Q=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),J=await(n.isElement==null?void 0:n.isElement(Q))?await(n.getScale==null?void 0:n.getScale(Q))||{x:1,y:1}:{x:1,y:1},K=Tt(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:I,offsetParent:Q,strategy:u}):I);return{top:(z.top-K.top+C.top)/J.y,bottom:(K.bottom-z.bottom+C.bottom)/J.y,left:(z.left-K.left+C.left)/J.x,right:(K.right-z.right+C.right)/J.x}}const wh=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:l,platform:u,elements:d}=e,{mainAxis:b=!0,crossAxis:f=!0,fallbackPlacements:w,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:C="none",flipAlignment:_=!0,...M}=rr(t,e);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const z=Ye(s),I=Ye(l)===l,Q=await(u.isRTL==null?void 0:u.isRTL(d.floating)),J=w||(I||!_?[kr(l)]:fh(l));!w&&C!=="none"&&J.push(...bh(l,_,C,Q));const K=[l,...J],ve=await Fn(e,M),L=[];let ee=((i=n.flip)==null?void 0:i.overflows)||[];if(b&&L.push(ve[z]),f){const W=gh(s,a,Q);L.push(ve[W[0]],ve[W[1]])}if(ee=[...ee,{placement:s,overflows:L}],!L.every(W=>W<=0)){var pe,se;const W=(((pe=n.flip)==null?void 0:pe.index)||0)+1,ae=K[W];if(ae)return{data:{index:W,overflows:ee},reset:{placement:ae}};let G=(se=ee.filter(p=>p.overflows[0]<=0).sort((p,v)=>p.overflows[1]-v.overflows[1])[0])==null?void 0:se.placement;if(!G)switch(x){case"bestFit":{var ge;const p=(ge=ee.map(v=>[v.placement,v.overflows.filter(S=>S>0).reduce((S,q)=>S+q,0)]).sort((v,S)=>v[1]-S[1])[0])==null?void 0:ge[0];p&&(G=p);break}case"initialPlacement":G=l;break}if(s!==G)return{reset:{placement:G}}}return{}}}};function jn(t){const e=Ot(...t.map(n=>n.left)),r=Ot(...t.map(n=>n.top)),i=qe(...t.map(n=>n.right)),s=qe(...t.map(n=>n.bottom));return{x:e,y:r,width:i-e,height:s-r}}function xh(t){const e=t.slice().sort((s,n)=>s.y-n.y),r=[];let i=null;for(let s=0;s<e.length;s++){const n=e[s];!i||n.y-i.y>i.height/2?r.push([n]):r[r.length-1].push(n),i=n}return r.map(s=>Tt(jn(s)))}const _h=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:s,platform:n,strategy:a}=e,{padding:l=2,x:u,y:d}=rr(t,e),b=Array.from(await(n.getClientRects==null?void 0:n.getClientRects(i.reference))||[]),f=xh(b),w=Tt(jn(b)),x=Rn(l);function C(){if(f.length===2&&f[0].left>f[1].right&&u!=null&&d!=null)return f.find(M=>u>M.left-x.left&&u<M.right+x.right&&d>M.top-x.top&&d<M.bottom+x.bottom)||w;if(f.length>=2){if(ir(r)==="y"){const se=f[0],ge=f[f.length-1],W=Ye(r)==="top",ae=se.top,G=ge.bottom,p=W?se.left:ge.left,v=W?se.right:ge.right,S=v-p,q=G-ae;return{top:ae,bottom:G,left:p,right:v,width:S,height:q,x:p,y:ae}}const M=Ye(r)==="left",z=qe(...f.map(se=>se.right)),I=Ot(...f.map(se=>se.left)),Q=f.filter(se=>M?se.left===I:se.right===z),J=Q[0].top,K=Q[Q.length-1].bottom,ve=I,L=z,ee=L-ve,pe=K-J;return{top:J,bottom:K,left:ve,right:L,width:ee,height:pe,x:ve,y:J}}return w}const _=await n.getElementRects({reference:{getBoundingClientRect:C},floating:i.floating,strategy:a});return s.reference.x!==_.reference.x||s.reference.y!==_.reference.y||s.reference.width!==_.reference.width||s.reference.height!==_.reference.height?{reset:{rects:_}}:{}}}};async function $h(t,e){const{placement:r,platform:i,elements:s}=t,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=Ye(r),l=Fr(r),u=ir(r)==="y",d=["left","top"].includes(a)?-1:1,b=n&&u?-1:1,f=rr(e,t);let{mainAxis:w,crossAxis:x,alignmentAxis:C}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof C=="number"&&(x=l==="end"?C*-1:C),u?{x:x*b,y:w*d}:{x:w*d,y:x*b}}const Ch=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:s,y:n,placement:a,middlewareData:l}=e,u=await $h(e,t);return a===((r=l.offset)==null?void 0:r.placement)&&(i=l.arrow)!=null&&i.alignmentOffset?{}:{x:s+u.x,y:n+u.y,data:{...u,placement:a}}}}},Ah=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:s}=e,{mainAxis:n=!0,crossAxis:a=!1,limiter:l={fn:M=>{let{x:z,y:I}=M;return{x:z,y:I}}},...u}=rr(t,e),d={x:r,y:i},b=await Fn(e,u),f=ir(Ye(s)),w=Dn(f);let x=d[w],C=d[f];if(n){const M=w==="y"?"top":"left",z=w==="y"?"bottom":"right",I=x+b[M],Q=x-b[z];x=Is(I,x,Q)}if(a){const M=f==="y"?"top":"left",z=f==="y"?"bottom":"right",I=C+b[M],Q=C-b[z];C=Is(I,C,Q)}const _=l.fn({...e,[w]:x,[f]:C});return{..._,data:{x:_.x-r,y:_.y-i}}}}};function jt(t){return Bn(t)?(t.nodeName||"").toLowerCase():"#document"}function Pe(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function it(t){var e;return(e=(Bn(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Bn(t){return t instanceof Node||t instanceof Pe(t).Node}function Ne(t){return t instanceof Element||t instanceof Pe(t).Element}function Ue(t){return t instanceof HTMLElement||t instanceof Pe(t).HTMLElement}function qs(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Pe(t).ShadowRoot}function sr(t){const{overflow:e,overflowX:r,overflowY:i,display:s}=Re(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(s)}function kh(t){return["table","td","th"].includes(jt(t))}function jr(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function zi(t){const e=Gi(),r=Re(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Eh(t){let e=tt(t);for(;Ue(e)&&!Dt(e);){if(jr(e))return null;if(zi(e))return e;e=tt(e)}return null}function Gi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Dt(t){return["html","body","#document"].includes(jt(t))}function Re(t){return Pe(t).getComputedStyle(t)}function Br(t){return Ne(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function tt(t){if(jt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||qs(t)&&t.host||it(t);return qs(e)?e.host:e}function Hn(t){const e=tt(t);return Dt(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ue(e)&&sr(e)?e:Hn(e)}function Ti(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const s=Hn(t),n=s===((i=t.ownerDocument)==null?void 0:i.body),a=Pe(s);return n?e.concat(a,a.visualViewport||[],sr(s)?s:[],a.frameElement&&r?Ti(a.frameElement):[]):e.concat(s,Ti(s,[],r))}function Nn(t){const e=Re(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=Ue(t),n=s?t.offsetWidth:r,a=s?t.offsetHeight:i,l=Ar(r)!==n||Ar(i)!==a;return l&&(r=n,i=a),{width:r,height:i,$:l}}function Un(t){return Ne(t)?t:t.contextElement}function Ct(t){const e=Un(t);if(!Ue(e))return et(1);const r=e.getBoundingClientRect(),{width:i,height:s,$:n}=Nn(e);let a=(n?Ar(r.width):r.width)/i,l=(n?Ar(r.height):r.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Ph=et(0);function Vn(t){const e=Pe(t);return!Gi()||!e.visualViewport?Ph:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Sh(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==Pe(t)?!1:e}function Zt(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const s=t.getBoundingClientRect(),n=Un(t);let a=et(1);e&&(i?Ne(i)&&(a=Ct(i)):a=Ct(t));const l=Sh(n,r,i)?Vn(n):et(0);let u=(s.left+l.x)/a.x,d=(s.top+l.y)/a.y,b=s.width/a.x,f=s.height/a.y;if(n){const w=Pe(n),x=i&&Ne(i)?Pe(i):i;let C=w,_=C.frameElement;for(;_&&i&&x!==C;){const M=Ct(_),z=_.getBoundingClientRect(),I=Re(_),Q=z.left+(_.clientLeft+parseFloat(I.paddingLeft))*M.x,J=z.top+(_.clientTop+parseFloat(I.paddingTop))*M.y;u*=M.x,d*=M.y,b*=M.x,f*=M.y,u+=Q,d+=J,C=Pe(_),_=C.frameElement}}return Tt({width:b,height:f,x:u,y:d})}function Oh(t){let{elements:e,rect:r,offsetParent:i,strategy:s}=t;const n=s==="fixed",a=it(i),l=e?jr(e.floating):!1;if(i===a||l&&n)return r;let u={scrollLeft:0,scrollTop:0},d=et(1);const b=et(0),f=Ue(i);if((f||!f&&!n)&&((jt(i)!=="body"||sr(a))&&(u=Br(i)),Ue(i))){const w=Zt(i);d=Ct(i),b.x=w.x+i.clientLeft,b.y=w.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-u.scrollLeft*d.x+b.x,y:r.y*d.y-u.scrollTop*d.y+b.y}}function Th(t){return Array.from(t.getClientRects())}function In(t){return Zt(it(t)).left+Br(t).scrollLeft}function Dh(t){const e=it(t),r=Br(t),i=t.ownerDocument.body,s=qe(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),n=qe(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+In(t);const l=-r.scrollTop;return Re(i).direction==="rtl"&&(a+=qe(e.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:l}}function Mh(t,e){const r=Pe(t),i=it(t),s=r.visualViewport;let n=i.clientWidth,a=i.clientHeight,l=0,u=0;if(s){n=s.width,a=s.height;const d=Gi();(!d||d&&e==="fixed")&&(l=s.offsetLeft,u=s.offsetTop)}return{width:n,height:a,x:l,y:u}}function Lh(t,e){const r=Zt(t,!0,e==="fixed"),i=r.top+t.clientTop,s=r.left+t.clientLeft,n=Ue(t)?Ct(t):et(1),a=t.clientWidth*n.x,l=t.clientHeight*n.y,u=s*n.x,d=i*n.y;return{width:a,height:l,x:u,y:d}}function Ys(t,e,r){let i;if(e==="viewport")i=Mh(t,r);else if(e==="document")i=Dh(it(t));else if(Ne(e))i=Lh(e,r);else{const s=Vn(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Tt(i)}function Wn(t,e){const r=tt(t);return r===e||!Ne(r)||Dt(r)?!1:Re(r).position==="fixed"||Wn(r,e)}function Rh(t,e){const r=e.get(t);if(r)return r;let i=Ti(t,[],!1).filter(l=>Ne(l)&&jt(l)!=="body"),s=null;const n=Re(t).position==="fixed";let a=n?tt(t):t;for(;Ne(a)&&!Dt(a);){const l=Re(a),u=zi(a);!u&&l.position==="fixed"&&(s=null),(n?!u&&!s:!u&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||sr(a)&&!u&&Wn(t,a))?i=i.filter(b=>b!==a):s=l,a=tt(a)}return e.set(t,i),i}function Fh(t){let{element:e,boundary:r,rootBoundary:i,strategy:s}=t;const a=[...r==="clippingAncestors"?jr(e)?[]:Rh(e,this._c):[].concat(r),i],l=a[0],u=a.reduce((d,b)=>{const f=Ys(e,b,s);return d.top=qe(f.top,d.top),d.right=Ot(f.right,d.right),d.bottom=Ot(f.bottom,d.bottom),d.left=qe(f.left,d.left),d},Ys(e,l,s));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function jh(t){const{width:e,height:r}=Nn(t);return{width:e,height:r}}function Bh(t,e,r){const i=Ue(e),s=it(e),n=r==="fixed",a=Zt(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const u=et(0);if(i||!i&&!n)if((jt(e)!=="body"||sr(s))&&(l=Br(e)),i){const f=Zt(e,!0,n,e);u.x=f.x+e.clientLeft,u.y=f.y+e.clientTop}else s&&(u.x=In(s));const d=a.left+l.scrollLeft-u.x,b=a.top+l.scrollTop-u.y;return{x:d,y:b,width:a.width,height:a.height}}function _i(t){return Re(t).position==="static"}function zs(t,e){return!Ue(t)||Re(t).position==="fixed"?null:e?e(t):t.offsetParent}function qn(t,e){const r=Pe(t);if(jr(t))return r;if(!Ue(t)){let s=tt(t);for(;s&&!Dt(s);){if(Ne(s)&&!_i(s))return s;s=tt(s)}return r}let i=zs(t,e);for(;i&&kh(i)&&_i(i);)i=zs(i,e);return i&&Dt(i)&&_i(i)&&!zi(i)?r:i||Eh(t)||r}const Hh=async function(t){const e=this.getOffsetParent||qn,r=this.getDimensions,i=await r(t.floating);return{reference:Bh(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Nh(t){return Re(t).direction==="rtl"}const Uh={convertOffsetParentRelativeRectToViewportRelativeRect:Oh,getDocumentElement:it,getClippingRect:Fh,getOffsetParent:qn,getElementRects:Hh,getClientRects:Th,getDimensions:jh,getScale:Ct,isElement:Ne,isRTL:Nh},Vh=Ch,Ih=Ah,Wh=wh,qh=_h,Yh=(t,e,r)=>{const i=new Map,s={platform:Uh,...r},n={...s.platform,_c:i};return yh(t,e,{...s,platform:n})};var zh=Object.defineProperty,Gh=Object.getOwnPropertyDescriptor,Hr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Gh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&zh(e,r,s),s};let Mt=class extends Be{constructor(){super(...arguments),this.dropdownRef=ke(),this.invokerRef=ke(),this.optionsRef=ke(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){Yh(this.invokerRef.value,this.optionsRef.value,{middleware:[Vh(2),Wh(),qh(),Ih()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,s,n,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(s=this.dropdownRef.value)==null||s.classList.add("dropdown__open")):((n=this.optionsRef.value)==null||n.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return F`

            <div class="dropdown" ${Ee(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${Ee(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${Ee(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};Mt.styles=me`

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
    
    `;Hr([Lr({slot:"option"})],Mt.prototype,"_options",2);Hr([ie({type:String,reflect:!0})],Mt.prototype,"open",2);Hr([ie({type:String,reflect:!0})],Mt.prototype,"variant",2);Mt=Hr([he("thermal-dropdown")],Mt);var Xh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,Nr=(t,e,r,i)=>{for(var s=i>1?void 0:i?Qh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Xh(e,r,s),s};let Lt=class extends Be{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=ke(),this.contentRef=ke(),this.rulerContentRef=ke()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return F`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${Ee(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${Ee(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${Ee(this.contentRef)}>

                    ${this.collapsed===!1?F`
                        <slot></slot>    
                    `:re}
                
                </div>

            </div>

            ${this.collapsed?F`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:re}
        
        `}};Lt.styles=me`

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

    `;Nr([Ae()],Lt.prototype,"collapsed",2);Nr([Ae()],Lt.prototype,"lastContentWidth",2);Nr([Ae()],Lt.prototype,"drawerRef",2);Lt=Nr([he("thermal-bar")],Lt);var Kh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,Yn=(t,e,r,i)=>{for(var s=i>1?void 0:i?Zh(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Kh(e,r,s),s};let Er=class extends Wi{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.manager.palette.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(t){this.manager.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return F`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return F`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(gn).map(([t,e])=>F`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};Er.styles=me`

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

    `;Yn([ie({type:String,reflect:!0,attribute:!0})],Er.prototype,"value",2);Er=Yn([he("thermal-palette")],Er);var Jh=Object.defineProperty,eu=Object.getOwnPropertyDescriptor,zn=(t,e,r,i)=>{for(var s=i>1?void 0:i?eu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Jh(e,r,s),s};let Pr=class extends Ge{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return F`
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
        `}};Pr.styles=me`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;zn([ie({type:Number,reflect:!0,attribute:!0})],Pr.prototype,"value",2);Pr=zn([he("thermal-opacity")],Pr);var tu=Object.defineProperty,ru=Object.getOwnPropertyDescriptor,iu=(t,e,r,i)=>{for(var s=i>1?void 0:i?ru(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&tu(e,r,s),s};let Gs=class extends Ge{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return F`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};Gs=iu([he("thermal-range-auto")],Gs);var su=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,au=(t,e,r,i)=>{for(var s=i>1?void 0:i?nu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&su(e,r,s),s};let Xs=class extends Ge{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return F`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};Xs=au([he("thermal-range-minmax")],Xs);var ou=Object.defineProperty,lu=Object.getOwnPropertyDescriptor,Xi=(t,e,r,i)=>{for(var s=i>1?void 0:i?lu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&ou(e,r,s),s};class pt extends qi{constructor(){super(...arguments),this._injectedFile=new Dr(this,{context:En,subscribe:!0})}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}willUpdate(e){return super.willUpdate(e),"_injectedFile"in e&&(this._file=this._injectedFile.value),!0}}Xi([Ae()],pt.prototype,"_injectedFile",2);Xi([Ae()],pt.prototype,"_file",2);Xi([Ae()],pt.prototype,"file",1);var cu=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,uu=(t,e,r,i)=>{for(var s=i>1?void 0:i?hu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&cu(e,r,s),s};let Di=class extends pt{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}render(){var t,e,r,i,s,n,a,l,u,d,b,f,w;return F`
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
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&F`
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
                            ${((s=this._injectedFile.value)==null?void 0:s.visibleUrl)&&F`
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
                            <td>${((n=this._injectedFile.value)==null?void 0:n.timestamp)&&mc.human(this._injectedFile.value.timestamp)}</td>
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
                            <td>${(b=this._injectedFile.value)==null?void 0:b.frames.length}</td>
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
                            <td>${(f=this._injectedFile.value)==null?void 0:f.unitHuman}</td>
                        </tr>
                        <tr>
                            <td>Data type</td>
                            <td>${(w=this._injectedFile.value)==null?void 0:w.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `}};Di.styles=me`

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
    
    `;Di=uu([he("thermal-file-info")],Di);var du=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,gu=(t,e,r,i)=>{for(var s=i>1?void 0:i?pu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&du(e,r,s),s};let Mi=class extends Be{render(){return F`
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
                        <p>version ${ji.version}</p>
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
        `}};Mi.styles=me`

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
    
    `;Mi=gu([he("thermal-app-info")],Mi);var fu=Object.defineProperty,mu=Object.getOwnPropertyDescriptor,bu=(t,e,r,i)=>{for(var s=i>1?void 0:i?mu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&fu(e,r,s),s};let Li=class extends pt{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return F`

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

        
        `}};Li.styles=me`

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
    
    `;Li=bu([he("thermal-file-name")],Li);var vu=Object.defineProperty,yu=Object.getOwnPropertyDescriptor,wu=(t,e,r,i)=>{for(var s=i>1?void 0:i?yu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&vu(e,r,s),s};let Ri=class extends pt{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return F`

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

        
        `}};Ri.styles=me`

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
    
    `;Ri=wu([he("thermal-file-download")],Ri);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,h,m)=>h in o?t(o,h,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[h]=m,i=(o,h,m)=>(r(o,typeof h!="symbol"?h+"":h,m),m),s=(o,h)=>` ${h&&h.length>0?h.map(m=>`<link rel="stylesheet" href="${m}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,n=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",l="pointers-min-distance",u="pointers-max-distance",d="range-dragging",b="data",f="min",w="max",x="step",C="round",_="type",M="theme",z="rtl",I="btt",Q="disabled",J="keyboard-disabled",K="mousewheel-disabled",ve="slider-width",L="slider-height",ee="slider-radius",pe="slider-bg",se="slider-bg-hover",ge="slider-bg-fill",W="pointer-width",ae="pointer-height",G="pointer-radius",p="pointer-bg",v="pointer-bg-hover",S="pointer-bg-focus",q="pointer-shadow",te="pointer-shadow-hover",U="pointer-shadow-focus",ft="pointer-border",Ir="pointer-border-hover",xe="pointer-border-focus",st="animate-onclick",Xn="css-links",Te="vertical",mt="horizontal",Wr=(o,h,m,g,$)=>{let O=h-o;return O===0?m:(g-m)*($-o)/O+m},We=o=>!isNaN(parseFloat(o))&&isFinite(o),ue=(o,h)=>We(o)?Number(o):h,Zi=(o,h)=>h===0?0:Math.round(o/h)*h,Qn=(o,h=1/0)=>{if(h===1/0)return o;let m=e(10,h);return Math.round(o*m)/m},be=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",Kn=(o,h)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:h}}))},Zn=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:h}}))},Jn=(o,h)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:h}}))},ea=(o,h)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:h}}))},ta=(o,h)=>{if(!h||h.length<=0)return;let m=h.map($=>We($)?ue($,$):$),g={values:m||[]};g.value=m[0],g.value0=m[0],g.value1=m[0];for(let $=1;$<m.length;$++)g[`value${$+1}`]=m[$];o.dispatchEvent(new CustomEvent("change",{detail:g}))},qr=(o,h,m)=>{let g=0,$,O,R,A,k=!1,j=(D,Z,fe,de,oe,le)=>{let _e=g;fe!==void 0&&D>fe&&(D=fe),Z!==void 0&&D<Z&&(D=Z),g=D;let $e=g;return(de===Te&&le||de===mt&&oe)&&($e=100-$e),de===Te?h.style.top=`${$e}%`:h.style.left=`${$e}%`,_e!==g},H=D=>D===h||h.contains(D),P=(D,Z,fe,de)=>{$=D,O=Z,R=fe,A=de},Y=D=>{k=D,h.classList.toggle("disabled",k),k?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},Oe=(D,Z)=>{Z==null?h.removeAttribute(D):h.setAttribute(D,Z)},ye=D=>h.getAttribute(D),T=D=>{if(!k){switch(D.key){case"ArrowLeft":{D.preventDefault(),typeof $=="function"&&$(m);break}case"ArrowRight":{D.preventDefault(),typeof O=="function"&&O(m);break}case"ArrowUp":{D.preventDefault(),typeof R=="function"&&R(m);break}case"ArrowDown":{D.preventDefault(),typeof A=="function"&&A(m);break}}ea(o,D)}},B=()=>{k||Kn(o,h)};return h.className=`pointer pointer-${m}`,h.addEventListener("keydown",T),h.addEventListener("click",B),{$pointer:h,get percent(){return g},get disabled(){return k},set disabled(D){Y(D)},updatePosition:j,isClicked:H,setCallbacks:P,setAttr:Oe,getAttr:ye,destroy:()=>{h.removeEventListener("keydown",T),h.removeEventListener("click",B),h.remove()}}},ra=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let h=o.split(","),m=[],g=!0;for(let $=0;$<h.length;$++){let O=h[$].trim();O!==""&&(m.push(O),We(O)||(g=!1))}return g?m.map($=>Number($)):m},ia=(o,h)=>h?h.findIndex(m=>m===o||m.toString().trim()===o.toString().trim()):-1,sa=o=>({updatePosition:(h,m,g,$)=>{if(m.length<=0)return;let O=m.length===1,R=m[0],A=m[m.length-1];h===Te?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),O?o.style.height=`${R}%`:o.style.height=`${Math.abs(R-A)}%`,$?(o.style.bottom="0%",O?o.style.top="auto":o.style.top=`${Math.min(100-A,100-R)}%`):(o.style.bottom="auto",O?o.style.top="0%":o.style.top=`${Math.min(R,A)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),O?o.style.width=`${R}%`:o.style.width=`${Math.abs(R-A)}%`,g?(o.style.right="0%",O?o.style.left="auto":o.style.left=`${Math.min(100-A,100-R)}%`):(o.style.right="auto",O?o.style.left="0%":o.style.left=`${Math.min(R,A)}%`))}}),Ji="--animate-onclick",na="--width",aa="--height",oa="--panel-bg-border-radius",la="--panel-bg",ca="--panel-bg-hover",ha="--panel-bg-fill",ua="--pointer-width",da="--pointer-height",pa="--pointer-border-radius",ga="--pointer-bg",fa="--pointer-bg-hover",ma="--pointer-bg-focus",ba="--pointer-shadow",va="--pointer-shadow-hover",ya="--pointer-shadow-focus",wa="--pointer-border",xa="--pointer-border-hover",_a="--pointer-border-focus",nr=(o,h,m)=>{let g=new Map;for(let $ of o.attributes){let O=$.nodeName.trim().toLowerCase();if(!h.test(O))continue;let R=O.replace(/\D/g,"").trim(),A=R===""||R==="0"||R==="1"?0:ue(R,0)-1,k=m&&typeof m=="function"?m($.value):$.value;g.set(A,k)}return g},$a=o=>{if(!o)return null;let h=o.getAttribute(Xn);if(!h)return null;let m=h.split(";"),g=[];for(let $ of m)$.trim()!==""&&g.push($.trim());return g},es=[[na,ve,"sliderWidth",null],[aa,L,"sliderHeight",null],[oa,ee,"sliderRadius",null],[la,pe,"sliderBg",null],[ca,se,"sliderBgHover",null],[ha,ge,"sliderBgFill",null],[ua,W,"pointer#Width",/^pointer([0-9]*)-width$/],[da,ae,"pointer#Height",/^pointer([0-9]*)-height$/],[pa,G,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ga,p,"pointer#Bg",/^pointer([0-9]*)-bg$/],[fa,v,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[ma,S,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[ba,q,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[va,te,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[ya,U,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[wa,ft,"pointer#Border",/^pointer([0-9]*)-border$/],[xa,Ir,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[_a,xe,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],Ca=(o,h,m)=>{let g=null,$=[],O=new Map,R=(T,B=h)=>{let D=[...B.classList];for(let Z of D)Z.startsWith(T)&&h.classList.remove(Z)},A=()=>{R("shape");let T=h.querySelectorAll(".pointer");for(let B of T)R("shape",B)},k=T=>{g=T,R("theme-"),typeof T=="string"&&h.classList.add(`theme-${T}`)},j=()=>{if(A(),!($.length<=0)){h.classList.add("shape",`shape-${$[0]}`);for(let T=1;T<$.length;T++){let B=$[T];if(!B)continue;let D=h.querySelector(`.pointer-${T}`);!D||D.classList.add("shape",`shape-${B}`)}}},H=(T,B)=>{$[T]=B,j()},P=()=>{A();let T=nr(o,/^pointer([0-9]*)-shape$/);if(!(T.size<=0)){for(let B of T){let D=B[0];$[D]=B[1]}j()}},Y=(T,B)=>`${T}-${B}`,Oe=(T,B,D)=>{let Z=m[D];if(!Z)return;let fe=D===0?h:Z.$pointer;if(B==null){O.has(Y(T,D))&&O.delete(Y(T,D)),fe.style.removeProperty(T);return}O.set(Y(T,D),B),fe.style.setProperty(T,B)},ye=(T,B)=>O.get(Y(T,B));return(()=>{for(let T of es){let[B,D,Z,fe]=T;if(fe){let oe=nr(o,fe);for(let le of oe){let _e=le[0],$e=le[1];Oe(B,$e,_e)}}else{let oe=o.getAttribute(D);Oe(B,oe,0)}let de=[];if(Z.indexOf("#")===-1)de.push([Z,0]);else{de.push([Z.replace("#",""),0]),de.push([Z.replace("#","0"),0]),de.push([Z.replace("#","1"),0]);for(let oe=1;oe<m.length;oe++)de.push([Z.replace("#",(oe+1).toString()),oe])}for(let oe of de)try{let le=oe[0],_e=oe[1];Object.prototype.hasOwnProperty.call(o,le)||Object.defineProperty(o,le,{get(){return ye(B,_e)},set:$e=>{Oe(B,$e,_e)}})}catch(le){console.error(le)}}k(o.getAttribute(M)),P()})(),{setStyle:Oe,getStyle:ye,get theme(){return g},set theme(T){k(T)},get pointerShapes(){return $},setPointerShape:H}},bt="animate-on-click",ts="range-dragging",Aa=(o,h,m,g)=>{let $=[],O=H=>{for(let P of $)P.update&&typeof P.update=="function"&&P.update(H)},R=()=>{for(let H of $)H.destroy&&typeof H.destroy=="function"&&H.destroy()},A=(H,P)=>{for(let Y of $)Y.onAttrChange&&typeof Y.onAttrChange=="function"&&Y.onAttrChange(H,P)},k=H=>{if(H.gettersAndSetters){for(let P of H.gettersAndSetters)if(!(!P.name||!P.attributes))try{Object.prototype.hasOwnProperty.call(o,P.name)||Object.defineProperty(o,P.name,P.attributes)}catch(Y){console.error("defineSettersGetters error:",Y)}}},j=H=>{var P;if(!H.css)return;let Y=(P=o.shadowRoot)==null?void 0:P.querySelector("style");!Y||(Y.innerHTML+=H.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let H of window.tcRangeSliderPlugins){let P=H();$.push(P),P.init&&typeof P.init=="function"&&(P.init(o,h,m,g),k(P),j(P))}},update:O,onAttrChange:A,destroy:R}},ka=10,rs=20,Ea=(o,h)=>{let m=new Map,g=/^value([0-9]*)$/;for(let A of o.attributes){let k=A.nodeName.trim().toLowerCase();if(!g.test(k))continue;let j=k.replace("value","").trim(),H=j===""||j==="0"||j==="1"?0:ue(j,0)-1,P=We(A.value)?ue(A.value,0):A.value;m.set(H,P)}let $=Math.max(...Array.from(m.keys())),O=[];O.push([qr(o,h,0),m.get(0)]);let R=h;for(let A=1;A<=$;A++){let k=h.cloneNode(!0);R.after(k),R=k,O.push([qr(o,k,A),m.get(A)])}return O},is=(o,h,m,g,$,O,R)=>{try{Object.defineProperty(o,g,{configurable:!0,get(){if(!h)return;let A=h.pointers[m];if(!A)return;let k=h.getTextValue(A.percent);return We(k)?ue(k,k):k},set:A=>{h.pointers[m]?h==null||h.setValue(A,m):h==null||h.addPointer(A)}}),Object.defineProperty(o,$,{configurable:!0,get(){var A,k;return(k=(A=h==null?void 0:h.pointers[m])==null?void 0:A.getAttr("aria-label"))!=null?k:void 0},set:A=>{!h||h.setAriaLabel(m,A)}}),Object.defineProperty(o,O,{configurable:!0,get(){var A,k;return(k=(A=h==null?void 0:h.styles)==null?void 0:A.pointerShapes[m])!=null?k:null},set:A=>{!h||!h.styles||h.styles.setPointerShape(m,A)}}),Object.defineProperty(o,R,{configurable:!0,get(){var A;return(A=h==null?void 0:h.pointers[m].disabled)!=null?A:!1},set:A=>{if(!h)return;let k=h==null?void 0:h.pointers[m];!k||(k.disabled=A)}})}catch(A){console.error(A)}},Pa=(o,h)=>{let m=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<ka;g++)m.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of m)is(o,h,g[4],g[0],g[1],g[2],g[3])},ss=(o,h,m)=>{var g;let $=(g=m.shadowRoot)==null?void 0:g.querySelector(".container");if($)for(let O of o)h?$.prepend(O.$pointer):$.append(O.$pointer)},Sa=(o,h)=>{if(!(!h||o.length<=1)){for(let m of o)m.$pointer.style.zIndex=rs.toString();h.$pointer.style.zIndex=(rs*2).toString()}},Yr=0,Bt=100,vt=2,ns="0.3s",Oa=(o,h,m)=>{let g=m.map(c=>c[0]),$=null,O=null,R=null,A=null,k=Yr,j=Bt,H,P,Y=mt,Oe=vt,ye=!1,T=!1,B=!1,D=0,Z=1/0,fe=!1,de,oe,le=!1,_e=!1,$e=!1,Xe=ns,as=[],os=c=>{le||(c.preventDefault&&c.preventDefault(),nt(c),window.addEventListener("mousemove",nt),window.addEventListener("mouseup",ar),Zn(o,c))},ar=c=>{le||(de=void 0,oe=void 0,window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",ar),Xe&&h.classList.add(bt),Jn(o,c))},Ma=(c,y)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(c)&&Xe&&h.classList.remove(bt),g[0];let E=Ra(c);if(fe){let V=y,De=lr(V);De!==void 0&&(V=Zi(V,De)),E?(de=V,oe=0,Xe&&h.classList.remove(bt)):de!==void 0&&(oe=V-de,de=V)}if(!La(c)&&!E){for(let V of g)if(!(!V.isClicked(c)||V.disabled))return Xe&&h.classList.remove(bt),V;for(let V of g)if($===V)return V}let X=1/0,ce=null;for(let V of g){if(V.disabled)continue;let De=Math.abs(y-V.percent);De<X&&(X=De,ce=V)}return ce},ls=()=>g.findIndex(c=>$===c&&!c.disabled),nt=c=>{let y;if(Y===Te){let{height:X,top:ce}=h.getBoundingClientRect(),V=c.type.indexOf("mouse")!==-1?c.clientY:c.touches[0].clientY;y=Math.min(Math.max(0,V-ce),X)*100/X}else{let{width:X,left:ce}=h.getBoundingClientRect(),V=c.type.indexOf("mouse")!==-1?c.clientX:c.touches[0].clientX;y=Math.min(Math.max(0,V-ce),X)*100/X}if((ye||T)&&(y=100-y),$=Ma(c.target,y),$&&Sa(g,$),fe&&g.length>1&&oe!==void 0){let X=g[0],ce=g[g.length-1],V=X.percent+oe<0,De=ce.percent+oe>100;if(V||De)return;for(let mr=0;mr<g.length;mr++)Ce(mr,g[mr].percent+oe);return}let E=ls();E!==-1&&(Ce(E,y),$==null||$.$pointer.focus())},or=c=>{if(le||document.activeElement!==o||$!=null&&$.disabled)return;c.stopPropagation(),c.preventDefault();let y=c.deltaY<0,E=ye||T,X=y?!E:E,ce=ls();ce!==-1&&(X?Ht(ce,g[ce].percent):Nt(ce,g[ce].percent))},cs=c=>{le||_e||(Y===Te?T?Ce(c,100):Ce(c,0):ye?Nt(c,g[c].percent):Ht(c,g[c].percent))},hs=c=>{le||_e||(Y===Te?T?Ce(c,0):Ce(c,100):ye?Ht(c,g[c].percent):Nt(c,g[c].percent))},us=c=>{le||_e||(Y===Te?T?Nt(c,g[c].percent):Ht(c,g[c].percent):ye?Ce(c,100):Ce(c,0))},ds=c=>{le||_e||(Y===Te?T?Ht(c,g[c].percent):Nt(c,g[c].percent):ye?Ce(c,0):Ce(c,100))},La=c=>c.classList.contains("panel"),Ra=c=>c.classList.contains("panel-fill"),Ht=(c,y)=>{if(y===void 0)return;let E=lr(y);E==null&&(E=1),y-=E,y<0&&(y=0),Ce(c,y)},Nt=(c,y)=>{if(y===void 0)return;let E=lr(y);E==null&&(E=1),y+=E,y>100&&(y=100),Ce(c,y)},at=()=>{!A||A.update({percents:ps(),values:gs(),$pointers:fs(),min:ms(),max:bs(),data:Xr(),step:Gr(),round:Kr(),type:Qr(),textMin:cr(),textMax:hr(),rightToLeft:ei(),bottomToTop:ti(),pointersOverlap:ni(),pointersMinDistance:Zr(),pointersMaxDistance:Jr(),rangeDragging:ai(),disabled:ri(),keyboardDisabled:ii(),mousewheelDisabled:si()})},Fa=()=>{at()},ja=c=>{if(!(B||g.length<=1||j===k))if(c===0){let y=Z*100/(j-k);return Math.max(0,g[c+1].percent-y)}else{let y=D*100/(j-k);return Math.min(g[c-1].percent+y,100)}},Ba=c=>{if(!(B||g.length<=1||j===k))if(c===g.length-1){let y=Z*100/(j-k);return Math.min(g[c-1].percent+y,100)}else{let y=D*100/(j-k);return Math.max(0,g[c+1].percent-y)}},lr=c=>{let y;if(typeof H=="function"){let E=Wr(0,100,k,j,c);y=H(E,c)}else y=H;if(We(y)){let E=j-k;return y=E===0?0:y*100/E,y}},yt=c=>{if(c===void 0)return;let y=Wr(0,100,k,j,c);return P!==void 0?P[Math.round(y)]:Qn(y,Oe)},cr=()=>P!==void 0?P[k]:k,hr=()=>P!==void 0?P[j]:j,Gr=()=>H,Ha=c=>{var y;return c<=0||B?cr():(y=yt(g[c-1].percent))!=null?y:""},Na=c=>{var y;return g.length<=1||c>=g.length-1||B?hr():(y=yt(g[c+1].percent))!=null?y:""},ps=()=>g.map(c=>c.percent),gs=()=>g.map(c=>yt(c.percent)),fs=()=>g.map(c=>c.$pointer),ms=()=>k,bs=()=>j,Xr=()=>P,Qr=()=>Y,Kr=()=>Oe,Zr=()=>D,Jr=()=>Z,Ua=c=>as[c],ei=()=>ye,ti=()=>T,ri=()=>le,ii=()=>_e,si=()=>$e,ni=()=>B,ai=()=>fe,Ce=(c,y)=>{if(y===void 0)return;let E=lr(y);E!==void 0&&(y=Zi(y,E));let X=g[c];if(!X)return;let ce=X.updatePosition(y,ja(c),Ba(c),Y,ye,T);O==null||O.updatePosition(Y,g.map(V=>V.percent),ye,T),at();for(let V of g){let De=yt(V.percent);De!==void 0&&(V.setAttr("aria-valuenow",De.toString()),V.setAttr("aria-valuetext",De.toString()))}Ia(),ce&&ta(o,g.map(V=>yt(V.percent)))},Fe=()=>{for(let c=0;c<g.length;c++)Ce(c,g[c].percent)},Va=(c,y)=>{k=P!==void 0?0:ue(c,Yr),j=P!==void 0?P.length-1:ue(y,Bt),ur(k),dr(j)},Ia=()=>{var c,y;for(let E=0;E<g.length;E++){let X=g[E];X.setAttr("aria-valuemin",((c=Ha(E))!=null?c:"").toString()),X.setAttr("aria-valuemax",((y=Na(E))!=null?y:"").toString())}},ur=c=>{k=ue(c,Yr),k>j&&(j=k+Bt),Fe()},dr=c=>{j=ue(c,Bt),j<k&&(j=k+Bt),Fe()},vs=c=>{B=!0;for(let y=0;y<c.length;y++)pr(c[y],y);B=!1;for(let y=0;y<c.length;y++)pr(c[y],y)},pr=(c,y)=>{let E;P!==void 0?(E=c==null?0:ia(c,P),E===-1&&(E=0)):(E=ue(c,k),E<k&&(E=k),E>j&&(E=j));let X=Wr(k,j,0,100,E);Ce(y,X)},gr=c=>{if(c==null){H=void 0;return}if(typeof c=="function"){H=c,Fe();return}if(We(c)){H=ue(c,1);let y=Math.abs(j-k);H>y&&(H=void 0),Fe();return}H=void 0},oi=c=>{B=c,Fe()},li=c=>{(!We(c)||c<0)&&(c=0),D=c},ci=c=>{(!We(c)||c<0)&&(c=1/0),Z=c},hi=c=>{le=c,h.classList.toggle("disabled",le),le?h.setAttribute("aria-disabled","true"):h.hasAttribute("aria-disabled")&&h.removeAttribute("aria-disabled")},ys=c=>{_e=c},ws=c=>{$e=c,$e?document.removeEventListener("wheel",or):document.addEventListener("wheel",or,{passive:!1})},ui=c=>{if(c==null){P=void 0;return}if(P=ra(c),P===void 0||P.length<=0){P=void 0;return}ur(0),dr(P.length-1),H===void 0&&gr(1)},di=c=>{var y;typeof c=="string"?Y=c.trim().toLowerCase()===Te?Te:mt:Y=mt;let E=(y=o.shadowRoot)==null?void 0:y.querySelector(".range-slider-box");if(!E)return;E.className=`range-slider-box type-${Y}`,Fe();let X=Y===Te?"vertical":"horizontal";for(let ce of g)ce.setAttr("aria-orientation",X)},pi=c=>{ye=c,g.length>1&&ss(g,ye,o),Fe(),at()},gi=c=>{T=c,g.length>1&&ss(g,T,o),Fe(),at()},fi=c=>{Oe=ue(c,vt),Oe<0&&(Oe=vt),at()},xs=c=>{c==null||c.toString().trim().toLowerCase()==="false"?(Xe=void 0,h.style.removeProperty(Ji),h.classList.remove(bt)):(Xe=c.toString(),h.style.setProperty(Ji,Xe),h.classList.add(bt))},_s=(c,y)=>{let E=g[c];!E||(E.setAttr("aria-label",y),as[c]=y)},fr=c=>{if(de=void 0,g.length<=1){fe=!1,h.classList.remove(ts);return}fe=c,h.classList.toggle(ts,fe)},Wa=()=>{hi(be(o.getAttribute(Q))),_e=be(o.getAttribute(J)),$e=be(o.getAttribute(K));let c=nr(o,/^pointer([0-9]*)-disabled$/,y=>be(y));for(let y of c){let E=y[0];!g[E]||(g[E].disabled=y[1])}},qa=()=>{let c=nr(o,/^aria-label([0-9]*)$/);for(let y of c){let E=y[0];_s(E,y[1])}},Ya=c=>{let y=g.length,E=g[y-1].$pointer,X=E.cloneNode(!0);E.after(X);let ce=qr(o,X,y);return ce.setCallbacks(cs,hs,us,ds),g.push(ce),pr(c,y),Fe(),at(),y},za=()=>{let c=g.length,y=g[c-1];return y?(y.destroy(),g.pop(),g.length<=1&&fr(!1),Fe(),at(),c-1):-1};return(()=>{var c,y;for(let X of g)X.setCallbacks(cs,hs,us,ds);let E=(c=o.shadowRoot)==null?void 0:c.querySelector(".panel-fill");E&&(O=sa(E)),di(o.getAttribute(_)),pi(be(o.getAttribute(z))),gi(be(o.getAttribute(I))),Va(o.getAttribute(f),o.getAttribute(w)),gr(o.getAttribute(x)),ui(o.getAttribute(b)),vs(m.map(X=>X[1])),oi(be(o.getAttribute(a))),li(ue(o.getAttribute(l),0)),ci(ue(o.getAttribute(u),1/0)),fr(be(o.getAttribute(d))),fi(ue(o.getAttribute(C),vt)),Wa(),qa(),R=Ca(o,h,g),xs((y=o.getAttribute(st))!=null?y:ns),h.addEventListener("mousedown",os),h.addEventListener("mouseup",ar),h.addEventListener("touchmove",nt),h.addEventListener("touchstart",nt),$e||document.addEventListener("wheel",or,{passive:!1}),A=Aa(o,Fa,{setValues:vs,setMin:ur,setMax:dr,setStep:gr,setPointersOverlap:oi,setPointersMinDistance:li,setPointersMaxDistance:ci,setDisabled:hi,setType:di,setRightToLeft:pi,setBottomToTop:gi,setRound:fi,setKeyboardDisabled:ys,setMousewheelDisabled:ws,setRangeDragging:fr,setData:ui},{getPercents:ps,getValues:gs,getPointerElements:fs,getMin:ms,getMax:bs,getStep:Gr,getData:Xr,getType:Qr,getRound:Kr,getTextMin:cr,getTextMax:hr,isRightToLeft:ei,isBottomToTop:ti,isDisabled:ri,isKeyboardDisabled:ii,isMousewheelDisabled:si,isPointersOverlap:ni,isRangeDraggingEnabled:ai,getPointersMinDistance:Zr,getPointersMaxDistance:Jr}),A.init()})(),{get pointers(){return g},get styles(){return R},get pluginsManager(){return A},get min(){return cr()},get max(){return hr()},get step(){return Gr()},get pointersOverlap(){return ni()},set pointersOverlap(c){oi(c)},get pointersMinDistance(){return Zr()},set pointersMinDistance(c){li(c)},get pointersMaxDistance(){return Jr()},set pointersMaxDistance(c){ci(c)},get disabled(){return ri()},set disabled(c){hi(c)},get data(){return Xr()},get type(){return Qr()},set type(c){di(c)},get rightToLeft(){return ei()},set rightToLeft(c){pi(c)},get bottomToTop(){return ti()},set bottomToTop(c){gi(c)},get round(){return Kr()},set round(c){fi(c)},get animateOnClick(){return Xe},set animateOnClick(c){xs(c)},get keyboardDisabled(){return ii()},set keyboardDisabled(c){ys(c)},get mousewheelDisabled(){return si()},set mousewheelDisabled(c){ws(c)},get rangeDragging(){return ai()},set rangeDragging(c){fr(c)},setMin:ur,setMax:dr,setValue:pr,setStep:gr,setData:ui,getTextValue:yt,setAriaLabel:_s,getAriaLabel:Ua,addPointer:Ya,removePointer:za,destroy:()=>{h.removeEventListener("mousedown",os),h.removeEventListener("mouseup",ar),h.removeEventListener("touchmove",nt),h.removeEventListener("touchstart",nt),document.removeEventListener("wheel",or);for(let c of g)c.destroy();A==null||A.destroy()}}},Ta=(o,h,m)=>{let g=es.find(([A,k,j,H])=>k.replace("#","")===h.replace(/\d+/g,""));if(g&&o.styles){let[A,k,j,H]=g,P=h.replace(/\D/g,"").trim(),Y=P===""||P==="0"||P==="1"?0:ue(P,0)-1;o.styles.setStyle(A,m,Y);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(h,m),h){case f:{o.setMin(m);break}case w:{o.setMax(m);break}case x:{o.setStep(m);break}case a:{o.pointersOverlap=be(m);break}case l:{o.pointersMinDistance=ue(m,0);break}case d:{o.rangeDragging=be(m);break}case u:{o.pointersMaxDistance=ue(m,1/0);break}case Q:{o.disabled=be(m);break}case J:{o.keyboardDisabled=be(m);break}case K:{o.mousewheelDisabled=be(m);break}case b:{o.setData(m);break}case _:{o.type=m;break}case z:{o.rightToLeft=be(m);break}case I:{o.bottomToTop=be(m);break}case C:{o.round=ue(m,vt);break}case M:{o.styles&&(o.styles.theme=m);break}case st:{o.animateOnClick=m;break}}let $=null;if(/^value([0-9]*)$/.test(h)&&($="value"),/^pointer([0-9]*)-disabled$/.test(h)&&($="pointer-disabled"),/^aria-label([0-9]*)$/.test(h)&&($="aria-label"),/^pointer([0-9]*)-shape$/.test(h)&&($="pointer-shape"),!$)return;let O=h.replace(/\D/g,"").trim(),R=O===""||O==="0"||O==="1"?0:ue(O,0)-1;switch($){case"value":{o.setValue(m,R);break}case"pointer-disabled":{let A=o==null?void 0:o.pointers[R];if(!A)return;A.disabled=be(m);break}case"aria-label":{o.setAriaLabel(R,m);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(R,m);break}}},Da=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.disabled)!=null?h:!1}set data(o){var h;(h=this.slider)==null||h.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var h;(h=this.slider)==null||h.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var h;(h=this.slider)==null||h.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,h;return(h=(o=this.slider)==null?void 0:o.round)!=null?h:vt}set type(o){!this.slider||(this.slider.type=o??mt)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||mt}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?h:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?h:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,h;return(h=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?h:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,h,m;return(m=(h=(o=this.slider)==null?void 0:o.styles)==null?void 0:h.theme)!=null?m:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,h;return(h=(o=this.slider)==null?void 0:o.rightToLeft)!=null?h:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,h;return(h=(o=this.slider)==null?void 0:o.bottomToTop)!=null?h:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?h:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,h;return(h=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?h:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,h;return(h=(o=this.slider)==null?void 0:o.rangeDragging)!=null?h:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=be(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var h,m;if(!this.slider)return;let g=(m=(h=this.slider)==null?void 0:h.addPointer(o))!=null?m:0;is(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let h=document.createElement("style");h.textContent=o,this.shadowRoot.appendChild(h)}connectedCallback(){var o,h;if(!this.shadowRoot)return;this._externalCSSList=$a(this),this.shadowRoot.innerHTML=s(n,this._externalCSSList);let m=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!m)return;let g=(h=this.shadowRoot)==null?void 0:h.getElementById("range-slider");if(!g)return;let $=Ea(this,m);this.slider=Oa(this,g,$),Pa(this,this.slider),this._observer=new MutationObserver(O=>{O.forEach(R=>{var A;if(!this.slider||R.type!=="attributes")return;let k=R.attributeName;!k||Ta(this.slider,k,(A=this.getAttribute(k))!=null?A:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},zr=Da;window.tcRangeSlider=zr,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",zr),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends zr{})})();(()=>{var t=(l,u,d,b,f)=>{let w=u-l;return w===0?d:(b-d)*(f-l)/w+d},e=l=>!isNaN(parseFloat(l))&&isFinite(l),r=(l,u)=>e(l)?Number(l):u,i=l=>l==null?!1:typeof l=="boolean"?l:l.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var s=11,n=11,a=()=>{let l=null,u=null,d=null,b=null,f=null,w=!1,x=s,C=n,_=()=>{var L;let ee=(L=l==null?void 0:l.shadowRoot)==null?void 0:L.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),b=document.createElement("div"),b.classList.add("mark-points"),d.append(b),f=document.createElement("div"),f.classList.add("mark-values"),d.append(f),ee.append(d)},M=()=>{!u||!d||d.classList.toggle("is-reversed",u.isRightToLeft()||u.isBottomToTop())},z=()=>{var L;if(!d||!u)return;let ee=u.getMin(),pe=u.getMax(),se=u.getType()==="vertical",ge=u.isRightToLeft()||u.isBottomToTop();for(let ae=0;ae<x;ae++){let G=document.createElement("div");G.classList.add("mark",`mark-${ae}`);let p=x===0?0:ae*100/(x-1);se?ge?G.style.top=`${100-p}%`:G.style.top=`${p}%`:ge?G.style.left=`${100-p}%`:G.style.left=`${p}%`,b==null||b.append(G)}let W=u.getData();for(let ae=0;ae<C;ae++){let G=document.createElement("div");G.classList.add("mark-value",`mark-value-${ae}`);let p=C===0?0:ae*100/(C-1),v=t(0,C-1,ee,pe,ae);G.textContent=(W?(L=W[Math.round(v)])!=null?L:"":v).toString(),se?ge?G.style.top=`${100-p}%`:G.style.top=`${p}%`:ge?G.style.left=`${100-p}%`:G.style.left=`${p}%`,f==null||f.append(G)}},I=(L,ee)=>{ve(),x=L,C=ee,x<=0&&(x=s),C<=0&&(C=n),_(),z(),M()},Q=L=>{w=L,w?(_(),z(),M()):ve()},J=L=>{!d||d.style.setProperty("--marks-color",L)},K=L=>{!d||d.style.setProperty("--values-color",L)},ve=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(L,ee,pe,se)=>{var ge,W;u=se,l=L,w=i(l.getAttribute("marks")),w&&(I(r(l.getAttribute("marks-count"),s),r(l.getAttribute("marks-values-count"),n)),J((ge=l.getAttribute("marks-color"))!=null?ge:"#cbd5e1"),K((W=l.getAttribute("marks-values-color"))!=null?W:"#475569"))},onAttrChange:(L,ee)=>{L==="marks"&&Q(i(ee)),L==="marks-count"&&I(r(ee,s),C),L==="marks-values-count"&&I(x,r(ee,n)),L==="marks-color"&&J(ee),L==="marks-values-color"&&K(ee)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return w??!1},set:L=>{Q(i(L))}}},{name:"marksCount",attributes:{get(){return x??s},set:L=>{I(r(L,s),C)}}},{name:"marksValuesCount",attributes:{get(){return x??s},set:L=>{I(x,r(L,n))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:L=>{J(L)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:L=>{K(L)}}}],destroy:ve,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var xu=Object.defineProperty,_u=Object.getOwnPropertyDescriptor,gt=(t,e,r,i)=>{for(var s=i>1?void 0:i?_u(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&xu(e,r,s),s};let ze=class extends Ge{constructor(){super(...arguments),this.sliderRef=ke()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.identificator,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const s=r.detail;this.from=s.value1,this.to=s.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return F`

        <div class="container ${this.canRanderSlider()?"ready":"loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${Ee(this.sliderRef)}
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

        `}};ze.styles=me`

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
    
    `;gt([ie({type:Number,reflect:!0})],ze.prototype,"min",2);gt([ie({type:Number,reflect:!0})],ze.prototype,"max",2);gt([ie({type:Number,reflect:!0})],ze.prototype,"from",2);gt([ie({type:Number,reflect:!0})],ze.prototype,"to",2);gt([Ae()],ze.prototype,"palette",2);gt([Ae()],ze.prototype,"sliderRef",2);ze=gt([he("thermal-range")],ze);var $u=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,Ur=(t,e,r,i)=>{for(var s=i>1?void 0:i?Cu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&$u(e,r,s),s};let Rt=class extends Ge{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.identificator,e=>{this.histogram=e,console.log(e)})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return F`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":re}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>F`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():F`
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
        `}};Rt.styles=me`

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


    `;Ur([Ae()],Rt.prototype,"histogram",2);Ur([ie({type:Boolean,reflect:!0})],Rt.prototype,"interactive",2);Ur([ie({type:String,reflect:!0})],Rt.prototype,"height",2);Rt=Ur([he("thermal-histogram")],Rt);var Au=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Vr=(t,e,r,i)=>{for(var s=i>1?void 0:i?ku(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Au(e,r,s),s};let Ve=class extends Ge{constructor(){super(...arguments),this.ticksRef=ke(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(t){super.firstUpdated(t),this.registry.minmax.addListener(this.identificator,e=>{this.minmax=e,this.calculateTicks(e,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,s){const n=(t-e)*(s-i)/(r-e)+i;return this.clamp(n,i,s)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/Ve.TICK_WIDTH)-2,s=100/i;for(let n=1;n<i;n++)r.push(s*n);r.push(100),this.ticks=r.map(n=>this.calculateOneTick(t,n)).filter(n=>n!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return F`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${Ee(this.ticksRef)}>

                    ${this.ticks.map(t=>F`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(Ve.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};Ve.TICK_WIDTH=40;Ve.TICK_FIXED=2;Ve.styles=me`

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


    `;Vr([ie({type:String,reflect:!0})],Ve.prototype,"placement",2);Vr([Ae()],Ve.prototype,"minmax",2);Vr([Ae()],Ve.prototype,"ticks",2);Ve=Vr([he("thermal-ticks")],Ve);var Eu=Object.defineProperty,Pu=Object.getOwnPropertyDescriptor,Su=(t,e,r,i)=>{for(var s=i>1?void 0:i?Pu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Eu(e,r,s),s};let Fi=class extends pt{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){return F`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot; https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js &quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this._injectedFile.value.url}c&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `}};Fi.styles=me`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;Fi=Su([he("thermal-file-share")],Fi);var Ou=Object.defineProperty,Tu=Object.getOwnPropertyDescriptor,Qi=(t,e,r,i)=>{for(var s=i>1?void 0:i?Tu(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(s=(i?a(e,r,s):a(s))||s);return i&&s&&Ou(e,r,s),s};let Jt=class extends qi{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=ke()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return F`
    <thermal-manager>
      <thermal-registry>
        <thermal-group>
          <div class="container fullscreen-${this.fullscreen}" ${Ee(this.appRef)}>

            <thermal-image thermal="${this.url}">
              <thermal-file-name slot="bar"></thermal-file-name>
              
              
              
              <!--<thermal-opacity slot="bar"></thermal-opacity>-->
              <thermal-histogram slot="pre" interactive></thermal-histogram>
              <thermal-range slot="pre"></thermal-range>
              <thermal-ticks slot="pre"></thermal-ticks>

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
                ${this.fullscreen==="on"?F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:F`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
              
            </thermal-image>

          </div>
          <thermal-group>
      </thermal-registry>
    </thermal-manager>
    `}};Jt.styles=me`

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
  
  `;Qi([ie({type:String,reflect:!0})],Jt.prototype,"url",2);Qi([ie({type:String,reflect:!0})],Jt.prototype,"fullscreen",2);Jt=Qi([he("thermal-file-app")],Jt);const $i=window.matchMedia("(prefers-color-scheme: dark)"),Ki="thermal-dark-mode",Qs=()=>{document.body.classList.add(Ki)},Du=()=>{document.body.classList.remove(Ki)},Mu=()=>{$i.matches&&Qs();const t=e=>{e.matches?Qs():Du()};$i.addEventListener("change",t),$i.addListener(t)},Lu=ji.version.toString().replaceAll(".","-"),Gn=t=>`thermal__${t}__${Lu}`,Ru=t=>document.getElementById(Gn(t))!==null,Ks=(t,e)=>{if(!Ru(t)){const r=document.createElement("style");r.setAttribute("id",Gn(t)),r.innerHTML=e,document.head.appendChild(r)}},Fu=()=>{Ks("rootVariables",`

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


            
        
        `),Ks("darkModeOverrides",`
        
            body.${Ki} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Js}
Author: ${tn}
Repository: ${en.url}
`);Mu();Fu();document.addEventListener("DOMContentLoaded",()=>{});
