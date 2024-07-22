var Ga=Object.defineProperty;var Xa=(t,e,r)=>e in t?Ga(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var v=(t,e,r)=>(Xa(t,typeof e!="symbol"?e+"":e,r),r);const Qa="@labir/embed",Ps="1.2.22",Ka="Embedded display of thermograms",Za="dist/embed.js",Ja="module",Cs={type:"git",url:"https://github.com/moichim/labir"},eo={vite:"vite",eslint:"eslint src",test:"vitest src",build:"vite build",serve:"serve dist/",lint:"eslint src"},Os="Jan Jáchim <jachim5@gmail.com>",to="ISC",ro={"@floating-ui/dom":"^1.6.6","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*","@lit/context":"^1.1.2","@spectrum-web-components/button":"^0.43.0","@spectrum-web-components/overlay":"^0.43.0","@spectrum-web-components/theme":"^0.43.0","date-fns":"^3.6.0",lit:"^3.1.4",react:"^18.3.1","react-dom":"^18.3.1","toolcool-range-slider":"^4.0.28",uuid:"^9.0.1","web-dialog":"^0.0.11",workerpool:"^9.1.3"},io={"@eslint/js":"^9.4.0","@types/node":"^20.14.2","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",jsdom:"^24.1.0",serve:"^14.2.3",tsup:"^8.1.0",typescript:"^5.4.5","typescript-eslint":"^7.12.0",vite:"^5.2.12","vite-plugin-static-copy":"^1.0.5",vitest:"^1.6.0"},wn={name:Qa,version:Ps,description:Ka,main:Za,type:Ja,repository:Cs,scripts:eo,author:Os,license:to,dependencies:ro,devDependencies:io};function nt(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function jt(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Ss=6048e5,no=864e5;let so={};function ii(){return so}function gr(t,e){var u,h,d,m;const r=ii(),i=(e==null?void 0:e.weekStartsOn)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.weekStartsOn)??r.weekStartsOn??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.weekStartsOn)??0,n=nt(t),s=n.getDay(),a=(s<i?7:0)+s-i;return n.setDate(n.getDate()-a),n.setHours(0,0,0,0),n}function Yr(t){return gr(t,{weekStartsOn:1})}function As(t){const e=nt(t),r=e.getFullYear(),i=jt(t,0);i.setFullYear(r+1,0,4),i.setHours(0,0,0,0);const n=Yr(i),s=jt(t,0);s.setFullYear(r,0,4),s.setHours(0,0,0,0);const a=Yr(s);return e.getTime()>=n.getTime()?r+1:e.getTime()>=a.getTime()?r:r-1}function Kn(t){const e=nt(t);return e.setHours(0,0,0,0),e}function Zn(t){const e=nt(t),r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),+t-+r}function ao(t,e){const r=Kn(t),i=Kn(e),n=+r-Zn(r),s=+i-Zn(i);return Math.round((n-s)/no)}function oo(t){const e=As(t),r=jt(t,0);return r.setFullYear(e,0,4),r.setHours(0,0,0,0),Yr(r)}function lo(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function Es(t){if(!lo(t)&&typeof t!="number")return!1;const e=nt(t);return!isNaN(Number(e))}function co(t){const e=nt(t),r=jt(t,0);return r.setFullYear(e.getFullYear(),0,1),r.setHours(0,0,0,0),r}const uo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ho=(t,e,r)=>{let i;const n=uo[t];return typeof n=="string"?i=n:e===1?i=n.one:i=n.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};function Ki(t){return(e={})=>{const r=e.width?String(e.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}const po={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},fo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},mo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},go={date:Ki({formats:po,defaultWidth:"full"}),time:Ki({formats:fo,defaultWidth:"full"}),dateTime:Ki({formats:mo,defaultWidth:"full"})},vo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},bo=(t,e,r,i)=>vo[t];function ur(t){return(e,r)=>{const i=r!=null&&r.context?String(r.context):"standalone";let n;if(i==="formatting"&&t.formattingValues){const a=t.defaultFormattingWidth||t.defaultWidth,u=r!=null&&r.width?String(r.width):a;n=t.formattingValues[u]||t.formattingValues[a]}else{const a=t.defaultWidth,u=r!=null&&r.width?String(r.width):t.defaultWidth;n=t.values[u]||t.values[a]}const s=t.argumentCallback?t.argumentCallback(e):e;return n[s]}}const yo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},wo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},xo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},_o={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ko={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},$o={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Po=(t,e)=>{const r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Co={ordinalNumber:Po,era:ur({values:yo,defaultWidth:"wide"}),quarter:ur({values:wo,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ur({values:xo,defaultWidth:"wide"}),day:ur({values:_o,defaultWidth:"wide"}),dayPeriod:ur({values:ko,defaultWidth:"wide",formattingValues:$o,defaultFormattingWidth:"wide"})};function hr(t){return(e,r={})=>{const i=r.width,n=i&&t.matchPatterns[i]||t.matchPatterns[t.defaultMatchWidth],s=e.match(n);if(!s)return null;const a=s[0],u=i&&t.parsePatterns[i]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(u)?So(u,f=>f.test(a)):Oo(u,f=>f.test(a));let d;d=t.valueCallback?t.valueCallback(h):h,d=r.valueCallback?r.valueCallback(d):d;const m=e.slice(a.length);return{value:d,rest:m}}}function Oo(t,e){for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&e(t[r]))return r}function So(t,e){for(let r=0;r<t.length;r++)if(e(t[r]))return r}function Ao(t){return(e,r={})=>{const i=e.match(t.matchPattern);if(!i)return null;const n=i[0],s=e.match(t.parsePattern);if(!s)return null;let a=t.valueCallback?t.valueCallback(s[0]):s[0];a=r.valueCallback?r.valueCallback(a):a;const u=e.slice(n.length);return{value:a,rest:u}}}const Eo=/^(\d+)(th|st|nd|rd)?/i,To=/\d+/i,Mo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Lo={any:[/^b/i,/^(a|c)/i]},Ro={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Do={any:[/1/i,/2/i,/3/i,/4/i]},jo={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},No={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Wo={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ho={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Bo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Io={ordinalNumber:Ao({matchPattern:Eo,parsePattern:To,valueCallback:t=>parseInt(t,10)}),era:hr({matchPatterns:Mo,defaultMatchWidth:"wide",parsePatterns:Lo,defaultParseWidth:"any"}),quarter:hr({matchPatterns:Ro,defaultMatchWidth:"wide",parsePatterns:Do,defaultParseWidth:"any",valueCallback:t=>t+1}),month:hr({matchPatterns:jo,defaultMatchWidth:"wide",parsePatterns:Fo,defaultParseWidth:"any"}),day:hr({matchPatterns:No,defaultMatchWidth:"wide",parsePatterns:Wo,defaultParseWidth:"any"}),dayPeriod:hr({matchPatterns:Ho,defaultMatchWidth:"any",parsePatterns:Bo,defaultParseWidth:"any"})},Uo={code:"en-US",formatDistance:ho,formatLong:go,formatRelative:bo,localize:Co,match:Io,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Vo(t){const e=nt(t);return ao(e,co(e))+1}function qo(t){const e=nt(t),r=+Yr(e)-+oo(e);return Math.round(r/Ss)+1}function Ts(t,e){var m,f,P,x;const r=nt(t),i=r.getFullYear(),n=ii(),s=(e==null?void 0:e.firstWeekContainsDate)??((f=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??n.firstWeekContainsDate??((x=(P=n.locale)==null?void 0:P.options)==null?void 0:x.firstWeekContainsDate)??1,a=jt(t,0);a.setFullYear(i+1,0,s),a.setHours(0,0,0,0);const u=gr(a,e),h=jt(t,0);h.setFullYear(i,0,s),h.setHours(0,0,0,0);const d=gr(h,e);return r.getTime()>=u.getTime()?i+1:r.getTime()>=d.getTime()?i:i-1}function zo(t,e){var u,h,d,m;const r=ii(),i=(e==null?void 0:e.firstWeekContainsDate)??((h=(u=e==null?void 0:e.locale)==null?void 0:u.options)==null?void 0:h.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(d=r.locale)==null?void 0:d.options)==null?void 0:m.firstWeekContainsDate)??1,n=Ts(t,e),s=jt(t,0);return s.setFullYear(n,0,i),s.setHours(0,0,0,0),gr(s,e)}function Yo(t,e){const r=nt(t),i=+gr(r,e)-+zo(r,e);return Math.round(i/Ss)+1}function ae(t,e){const r=t<0?"-":"",i=Math.abs(t).toString().padStart(e,"0");return r+i}const Pt={y(t,e){const r=t.getFullYear(),i=r>0?r:1-r;return ae(e==="yy"?i%100:i,e.length)},M(t,e){const r=t.getMonth();return e==="M"?String(r+1):ae(r+1,2)},d(t,e){return ae(t.getDate(),e.length)},a(t,e){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h(t,e){return ae(t.getHours()%12||12,e.length)},H(t,e){return ae(t.getHours(),e.length)},m(t,e){return ae(t.getMinutes(),e.length)},s(t,e){return ae(t.getSeconds(),e.length)},S(t,e){const r=e.length,i=t.getMilliseconds(),n=Math.trunc(i*Math.pow(10,r-3));return ae(n,e.length)}},qt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Jn={G:function(t,e,r){const i=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){const i=t.getFullYear(),n=i>0?i:1-i;return r.ordinalNumber(n,{unit:"year"})}return Pt.y(t,e)},Y:function(t,e,r,i){const n=Ts(t,i),s=n>0?n:1-n;if(e==="YY"){const a=s%100;return ae(a,2)}return e==="Yo"?r.ordinalNumber(s,{unit:"year"}):ae(s,e.length)},R:function(t,e){const r=As(t);return ae(r,e.length)},u:function(t,e){const r=t.getFullYear();return ae(r,e.length)},Q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return ae(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){const i=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return ae(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){const i=t.getMonth();switch(e){case"M":case"MM":return Pt.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){const i=t.getMonth();switch(e){case"L":return String(i+1);case"LL":return ae(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){const n=Yo(t,i);return e==="wo"?r.ordinalNumber(n,{unit:"week"}):ae(n,e.length)},I:function(t,e,r){const i=qo(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):ae(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getDate(),{unit:"date"}):Pt.d(t,e)},D:function(t,e,r){const i=Vo(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):ae(i,e.length)},E:function(t,e,r){const i=t.getDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){const n=t.getDay(),s=(n-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return ae(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){const n=t.getDay(),s=(n-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return ae(s,e.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(t,e,r){const i=t.getDay(),n=i===0?7:i;switch(e){case"i":return String(n);case"ii":return ae(n,e.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(t,e,r){const i=t.getHours();let n;switch(i===12?n=qt.noon:i===0?n=qt.midnight:n=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(t,e,r){const i=t.getHours();let n;switch(i>=17?n=qt.evening:i>=12?n=qt.afternoon:i>=4?n=qt.morning:n=qt.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){let i=t.getHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return Pt.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getHours(),{unit:"hour"}):Pt.H(t,e)},K:function(t,e,r){const i=t.getHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,e.length)},k:function(t,e,r){let i=t.getHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):ae(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getMinutes(),{unit:"minute"}):Pt.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getSeconds(),{unit:"second"}):Pt.s(t,e)},S:function(t,e){return Pt.S(t,e)},X:function(t,e,r){const i=t.getTimezoneOffset();if(i===0)return"Z";switch(e){case"X":return ts(i);case"XXXX":case"XX":return Rt(i);case"XXXXX":case"XXX":default:return Rt(i,":")}},x:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"x":return ts(i);case"xxxx":case"xx":return Rt(i);case"xxxxx":case"xxx":default:return Rt(i,":")}},O:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+es(i,":");case"OOOO":default:return"GMT"+Rt(i,":")}},z:function(t,e,r){const i=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+es(i,":");case"zzzz":default:return"GMT"+Rt(i,":")}},t:function(t,e,r){const i=Math.trunc(t.getTime()/1e3);return ae(i,e.length)},T:function(t,e,r){const i=t.getTime();return ae(i,e.length)}};function es(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),n=Math.trunc(i/60),s=i%60;return s===0?r+String(n):r+String(n)+e+ae(s,2)}function ts(t,e){return t%60===0?(t>0?"-":"+")+ae(Math.abs(t)/60,2):Rt(t,e)}function Rt(t,e=""){const r=t>0?"-":"+",i=Math.abs(t),n=ae(Math.trunc(i/60),2),s=ae(i%60,2);return r+n+e+s}const rs=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ms=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Go=(t,e)=>{const r=t.match(/(P+)(p+)?/)||[],i=r[1],n=r[2];if(!n)return rs(t,e);let s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",rs(i,e)).replace("{{time}}",Ms(n,e))},Xo={p:Ms,P:Go},Qo=/^D+$/,Ko=/^Y+$/,Zo=["D","DD","YY","YYYY"];function Jo(t){return Qo.test(t)}function el(t){return Ko.test(t)}function tl(t,e,r){const i=rl(t,e,r);if(console.warn(i),Zo.includes(t))throw new RangeError(i)}function rl(t,e,r){const i=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${i} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const il=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nl=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,sl=/^'([^]*?)'?$/,al=/''/g,ol=/[a-zA-Z]/;function is(t,e,r){var m,f,P,x;const i=ii(),n=i.locale??Uo,s=i.firstWeekContainsDate??((f=(m=i.locale)==null?void 0:m.options)==null?void 0:f.firstWeekContainsDate)??1,a=i.weekStartsOn??((x=(P=i.locale)==null?void 0:P.options)==null?void 0:x.weekStartsOn)??0,u=nt(t);if(!Es(u))throw new RangeError("Invalid time value");let h=e.match(nl).map(_=>{const S=_[0];if(S==="p"||S==="P"){const C=Xo[S];return C(_,n.formatLong)}return _}).join("").match(il).map(_=>{if(_==="''")return{isToken:!1,value:"'"};const S=_[0];if(S==="'")return{isToken:!1,value:ll(_)};if(Jn[S])return{isToken:!0,value:_};if(S.match(ol))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");return{isToken:!1,value:_}});n.localize.preprocessor&&(h=n.localize.preprocessor(u,h));const d={firstWeekContainsDate:s,weekStartsOn:a,locale:n};return h.map(_=>{if(!_.isToken)return _.value;const S=_.value;(el(S)||Jo(S))&&tl(S,e,String(t));const C=Jn[S[0]];return C(u,S,n.localize,d)}).join("")}function ll(t){const e=t.match(sl);return e?e[1].replace(al,"'"):t}function Zi(t,e){const r=nt(t);if(!Es(r))throw new RangeError("Invalid time value");const i=(e==null?void 0:e.format)??"extended",n=(e==null?void 0:e.representation)??"complete";let s="";const a=i==="extended"?"-":"",u=i==="extended"?":":"";if(n!=="time"){const h=ae(r.getDate(),2),d=ae(r.getMonth()+1,2);s=`${ae(r.getFullYear(),4)}${a}${d}${a}${h}`}if(n!=="date"){const h=ae(r.getHours(),2),d=ae(r.getMinutes(),2),m=ae(r.getSeconds(),2);s=`${s}${s===""?"":" "}${h}${u}${d}${u}${m}`}return s}var cl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ul(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var n=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,n.get?n:{enumerable:!0,get:function(){return t[i]}})}),r}var ln={exports:{}};const hl={},dl=Object.freeze(Object.defineProperty({__proto__:null,default:hl},Symbol.toStringTag,{value:"Module"})),zt=ul(dl);/**
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
 */(function(t,e){(function(r,i){i(e)})(cl,function(r){var i={},n={exports:{}};(function(w){var O=function(U){return typeof U<"u"&&U.versions!=null&&U.versions.node!=null&&U+""=="[object process]"};w.exports.isNode=O,w.exports.platform=typeof process<"u"&&O(process)?"node":"browser";var A=w.exports.platform==="node"&&zt;w.exports.isMainThread=w.exports.platform==="node"?(!A||A.isMainThread)&&!process.connected:typeof Window<"u",w.exports.cpus=w.exports.platform==="browser"?self.navigator.hardwareConcurrency:zt.cpus().length})(n);var s=n.exports,a={},u;function h(){if(u)return a;u=1;function w(U,ve){var G=this;if(!(this instanceof w))throw new SyntaxError("Constructor must be called with the new operator");if(typeof U!="function")throw new SyntaxError("Function parameter handler(resolve, reject) missing");var $e=[],ue=[];this.resolved=!1,this.rejected=!1,this.pending=!0;var R=function(X,ie){$e.push(X),ue.push(ie)};this.then=function(k,X){return new w(function(ie,je){var Ve=k?O(k,ie,je):ie,ut=X?O(X,ie,je):je;R(Ve,ut)},G)};var he=function(X){return G.resolved=!0,G.rejected=!1,G.pending=!1,$e.forEach(function(ie){ie(X)}),R=function(je,Ve){je(X)},he=y=function(){},G},y=function(X){return G.resolved=!1,G.rejected=!0,G.pending=!1,ue.forEach(function(ie){ie(X)}),R=function(je,Ve){Ve(X)},he=y=function(){},G};this.cancel=function(){return ve?ve.cancel():y(new A),G},this.timeout=function(k){if(ve)ve.timeout(k);else{var X=setTimeout(function(){y(new E("Promise timed out after "+k+" ms"))},k);G.always(function(){clearTimeout(X)})}return G},U(function(k){he(k)},function(k){y(k)})}function O(U,ve,G){return function($e){try{var ue=U($e);ue&&typeof ue.then=="function"&&typeof ue.catch=="function"?ue.then(ve,G):ve(ue)}catch(R){G(R)}}}w.prototype.catch=function(U){return this.then(null,U)},w.prototype.always=function(U){return this.then(U,U)},w.all=function(U){return new w(function(ve,G){var $e=U.length,ue=[];$e?U.forEach(function(R,he){R.then(function(y){ue[he]=y,$e--,$e==0&&ve(ue)},function(y){$e=0,G(y)})}):ve(ue)})},w.defer=function(){var U={};return U.promise=new w(function(ve,G){U.resolve=ve,U.reject=G}),U};function A(U){this.message=U||"promise cancelled",this.stack=new Error().stack}A.prototype=new Error,A.prototype.constructor=Error,A.prototype.name="CancellationError",w.CancellationError=A;function E(U){this.message=U||"timeout exceeded",this.stack=new Error().stack}return E.prototype=new Error,E.prototype.constructor=Error,E.prototype.name="TimeoutError",w.TimeoutError=E,a.Promise=w,a}function d(w,O){(O==null||O>w.length)&&(O=w.length);for(var A=0,E=Array(O);A<O;A++)E[A]=w[A];return E}function m(w,O){var A=typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"];if(!A){if(Array.isArray(w)||(A=j(w))||O){A&&(w=A);var E=0,U=function(){};return{s:U,n:function(){return E>=w.length?{done:!0}:{done:!1,value:w[E++]}},e:function(ue){throw ue},f:U}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ve,G=!0,$e=!1;return{s:function(){A=A.call(w)},n:function(){var ue=A.next();return G=ue.done,ue},e:function(ue){$e=!0,ve=ue},f:function(){try{G||A.return==null||A.return()}finally{if($e)throw ve}}}}function f(w,O,A){return(O=S(O))in w?Object.defineProperty(w,O,{value:A,enumerable:!0,configurable:!0,writable:!0}):w[O]=A,w}function P(w,O){var A=Object.keys(w);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(w);O&&(E=E.filter(function(U){return Object.getOwnPropertyDescriptor(w,U).enumerable})),A.push.apply(A,E)}return A}function x(w){for(var O=1;O<arguments.length;O++){var A=arguments[O]!=null?arguments[O]:{};O%2?P(Object(A),!0).forEach(function(E){f(w,E,A[E])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(A)):P(Object(A)).forEach(function(E){Object.defineProperty(w,E,Object.getOwnPropertyDescriptor(A,E))})}return w}function _(w,O){if(typeof w!="object"||!w)return w;var A=w[Symbol.toPrimitive];if(A!==void 0){var E=A.call(w,O||"default");if(typeof E!="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return(O==="string"?String:Number)(w)}function S(w){var O=_(w,"string");return typeof O=="symbol"?O:O+""}function C(w){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},C(w)}function j(w,O){if(w){if(typeof w=="string")return d(w,O);var A={}.toString.call(w).slice(8,-1);return A==="Object"&&w.constructor&&(A=w.constructor.name),A==="Map"||A==="Set"?Array.from(w):A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)?d(w,O):void 0}}var N={exports:{}},I={},oe;function Z(){return oe||(oe=1,I.validateOptions=function(O,A,E){if(O){var U=O?Object.keys(O):[],ve=U.find(function($e){return!A.includes($e)});if(ve)throw new Error('Object "'+E+'" contains an unknown option "'+ve+'"');var G=A.find(function($e){return Object.prototype[$e]&&!U.includes($e)});if(G)throw new Error('Object "'+E+'" contains an inherited option "'+G+'" which is not defined in the object itself but in its prototype. Only plain objects are allowed. Please remove the option from the prototype or override it with a value "undefined".');return O}},I.workerOptsNames=["credentials","name","type"],I.forkOptsNames=["cwd","detached","env","execPath","execArgv","gid","serialization","signal","killSignal","silent","stdio","uid","windowsVerbatimArguments","timeout"],I.workerThreadOptsNames=["argv","env","eval","execArgv","stdin","stdout","stderr","workerData","trackUnmanagedFds","transferList","resourceLimits","name"]),I}var ke,F;function de(){return F||(F=1,ke=`!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).worker=n()}(this,(function(){"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var t={};var r=function(e,n){this.message=e,this.transfer=n};return function(n){var t=r,o={exit:function(){}};if("undefined"!=typeof self&&"function"==typeof postMessage&&"function"==typeof addEventListener)o.on=function(e,n){addEventListener(e,(function(e){n(e.data)}))},o.send=function(e,n){n?postMessage(e,n):postMessage(e)};else{if("undefined"==typeof process)throw new Error("Script must be executed as a worker");var i;try{i=require("worker_threads")}catch(n){if("object"!==e(n)||null===n||"MODULE_NOT_FOUND"!==n.code)throw n}if(i&&null!==i.parentPort){var s=i.parentPort;o.send=s.postMessage.bind(s),o.on=s.on.bind(s),o.exit=process.exit.bind(process)}else o.on=process.on.bind(process),o.send=function(e){process.send(e)},o.on("disconnect",(function(){process.exit(1)})),o.exit=process.exit.bind(process)}function u(e){return Object.getOwnPropertyNames(e).reduce((function(n,t){return Object.defineProperty(n,t,{value:e[t],enumerable:!0})}),{})}function d(e){return e&&"function"==typeof e.then&&"function"==typeof e.catch}o.methods={},o.methods.run=function(e,n){var t=new Function("return ("+e+").apply(null, arguments);");return t.apply(t,n)},o.methods.methods=function(){return Object.keys(o.methods)},o.terminationHandler=void 0,o.cleanupAndExit=function(e){var n=function(){o.exit(e)};if(!o.terminationHandler)return n();var t=o.terminationHandler(e);d(t)?t.then(n,n):n()};var f=null;o.on("message",(function(e){if("__workerpool-terminate__"===e)return o.cleanupAndExit(0);try{var n=o.methods[e.method];if(!n)throw new Error('Unknown method "'+e.method+'"');f=e.id;var r=n.apply(n,e.params);d(r)?r.then((function(n){n instanceof t?o.send({id:e.id,result:n.message,error:null},n.transfer):o.send({id:e.id,result:n,error:null}),f=null})).catch((function(n){o.send({id:e.id,result:null,error:u(n)}),f=null})):(r instanceof t?o.send({id:e.id,result:r.message,error:null},r.transfer):o.send({id:e.id,result:r,error:null}),f=null)}catch(n){o.send({id:e.id,result:null,error:u(n)})}})),o.register=function(e,n){if(e)for(var t in e)e.hasOwnProperty(t)&&(o.methods[t]=e[t]);n&&(o.terminationHandler=n.onTerminate),o.send("ready")},o.emit=function(e){if(f){if(e instanceof t)return void o.send({id:f,isEvent:!0,payload:e.message},e.transfer);o.send({id:f,isEvent:!0,payload:e})}},n.add=o.register,n.emit=o.emit}(t),n(t)}));
//# sourceMappingURL=worker.min.js.map
`),ke}var re;function le(){if(re)return N.exports;re=1;var w=h(),O=w.Promise,A=s,E=Z(),U=E.validateOptions,ve=E.forkOptsNames,G=E.workerThreadOptsNames,$e=E.workerOptsNames,ue="__workerpool-terminate__";function R(){var B=y();if(!B)throw new Error("WorkerPool: workerType = 'thread' is not supported, Node >= 11.7.0 required");return B}function he(){if(typeof Worker!="function"&&((typeof Worker>"u"?"undefined":C(Worker))!=="object"||typeof Worker.prototype.constructor!="function"))throw new Error("WorkerPool: Web Workers not supported")}function y(){try{return zt}catch(B){if(C(B)==="object"&&B!==null&&B.code==="MODULE_NOT_FOUND")return null;throw B}}function k(){if(A.platform==="browser"){if(typeof Blob>"u")throw new Error("Blob not supported by the browser");if(!window.URL||typeof window.URL.createObjectURL!="function")throw new Error("URL.createObjectURL not supported by the browser");var B=new Blob([de()],{type:"text/javascript"});return window.URL.createObjectURL(B)}else return __dirname+"/worker.js"}function X(B,Q){if(Q.workerType==="web")return he(),ie(B,Q.workerOpts,Worker);if(Q.workerType==="thread")return $=R(),je(B,$,Q);if(Q.workerType==="process"||!Q.workerType)return Ve(B,ut(Q),zt);if(A.platform==="browser")return he(),ie(B,Q.workerOpts,Worker);var $=y();return $?je(B,$,Q):Ve(B,ut(Q),zt)}function ie(B,Q,$){U(Q,$e,"workerOpts");var Y=new $(B,Q);return Y.isBrowserWorker=!0,Y.on=function(be,ge){this.addEventListener(be,function(Se){ge(Se.data)})},Y.send=function(be,ge){this.postMessage(be,ge)},Y}function je(B,Q,$){var Y,be;U($==null?void 0:$.workerThreadOpts,G,"workerThreadOpts");var ge=new Q.Worker(B,x({stdout:(Y=$==null?void 0:$.emitStdStreams)!==null&&Y!==void 0?Y:!1,stderr:(be=$==null?void 0:$.emitStdStreams)!==null&&be!==void 0?be:!1},$==null?void 0:$.workerThreadOpts));return ge.isWorkerThread=!0,ge.send=function(Se,ne){this.postMessage(Se,ne)},ge.kill=function(){return this.terminate(),!0},ge.disconnect=function(){this.terminate()},$!=null&&$.emitStdStreams&&(ge.stdout.on("data",function(Se){return ge.emit("stdout",Se)}),ge.stderr.on("data",function(Se){return ge.emit("stderr",Se)})),ge}function Ve(B,Q,$){U(Q.forkOpts,ve,"forkOpts");var Y=$.fork(B,Q.forkArgs,Q.forkOpts),be=Y.send;return Y.send=function(ge){return be.call(Y,ge)},Q.emitStdStreams&&(Y.stdout.on("data",function(ge){return Y.emit("stdout",ge)}),Y.stderr.on("data",function(ge){return Y.emit("stderr",ge)})),Y.isChildProcess=!0,Y}function ut(B){B=B||{};var Q=process.execArgv.join(" "),$=Q.indexOf("--inspect")!==-1,Y=Q.indexOf("--debug-brk")!==-1,be=[];return $&&(be.push("--inspect="+B.debugPort),Y&&be.push("--debug-brk")),process.execArgv.forEach(function(ge){ge.indexOf("--max-old-space-size")>-1&&be.push(ge)}),Object.assign({},B,{forkArgs:B.forkArgs,forkOpts:Object.assign({},B.forkOpts,{execArgv:(B.forkOpts&&B.forkOpts.execArgv||[]).concat(be),stdio:B.emitStdStreams?"pipe":void 0})})}function Je(B){for(var Q=new Error(""),$=Object.keys(B),Y=0;Y<$.length;Y++)Q[$[Y]]=B[$[Y]];return Q}function tt(B,Q){if(Object.keys(B.processing).length===1){var $=Object.values(B.processing)[0];$.options&&typeof $.options.on=="function"&&$.options.on(Q)}}function kt(B,Q){var $=this,Y=Q||{};this.script=B||k(),this.worker=X(this.script,Y),this.debugPort=Y.debugPort,this.forkOpts=Y.forkOpts,this.forkArgs=Y.forkArgs,this.workerOpts=Y.workerOpts,this.workerThreadOpts=Y.workerThreadOpts,this.workerTerminateTimeout=Y.workerTerminateTimeout,B||(this.worker.ready=!0),this.requestQueue=[],this.worker.on("stdout",function(ne){tt($,{stdout:ne.toString()})}),this.worker.on("stderr",function(ne){tt($,{stderr:ne.toString()})}),this.worker.on("message",function(ne){if(!$.terminated)if(typeof ne=="string"&&ne==="ready")$.worker.ready=!0,ge();else{var Ge=ne.id,Fe=$.processing[Ge];Fe!==void 0&&(ne.isEvent?Fe.options&&typeof Fe.options.on=="function"&&Fe.options.on(ne.payload):(delete $.processing[Ge],$.terminating===!0&&$.terminate(),ne.error?Fe.resolver.reject(Je(ne.error)):Fe.resolver.resolve(ne.result)))}});function be(ne){$.terminated=!0;for(var Ge in $.processing)$.processing[Ge]!==void 0&&$.processing[Ge].resolver.reject(ne);$.processing=Object.create(null)}function ge(){var ne=m($.requestQueue.splice(0)),Ge;try{for(ne.s();!(Ge=ne.n()).done;){var Fe=Ge.value;$.worker.send(Fe.message,Fe.transfer)}}catch(Rr){ne.e(Rr)}finally{ne.f()}}var Se=this.worker;this.worker.on("error",be),this.worker.on("exit",function(ne,Ge){var Fe=`Workerpool Worker terminated Unexpectedly
`;Fe+="    exitCode: `"+ne+"`\n",Fe+="    signalCode: `"+Ge+"`\n",Fe+="    workerpool.script: `"+$.script+"`\n",Fe+="    spawnArgs: `"+Se.spawnargs+"`\n",Fe+="    spawnfile: `"+Se.spawnfile+"`\n",Fe+="    stdout: `"+Se.stdout+"`\n",Fe+="    stderr: `"+Se.stderr+"`\n",be(new Error(Fe))}),this.processing=Object.create(null),this.terminating=!1,this.terminated=!1,this.cleaning=!1,this.terminationHandler=null,this.lastId=0}return kt.prototype.methods=function(){return this.exec("methods")},kt.prototype.exec=function(B,Q,$,Y){$||($=O.defer());var be=++this.lastId;this.processing[be]={id:be,resolver:$,options:Y};var ge={message:{id:be,method:B,params:Q},transfer:Y&&Y.transfer};this.terminated?$.reject(new Error("Worker is terminated")):this.worker.ready?this.worker.send(ge.message,ge.transfer):this.requestQueue.push(ge);var Se=this;return $.promise.catch(function(ne){if(ne instanceof O.CancellationError||ne instanceof O.TimeoutError)return delete Se.processing[be],Se.terminateAndNotify(!0).then(function(){throw ne},function(Ge){throw Ge});throw ne})},kt.prototype.busy=function(){return this.cleaning||Object.keys(this.processing).length>0},kt.prototype.terminate=function(B,Q){var $=this;if(B){for(var Y in this.processing)this.processing[Y]!==void 0&&this.processing[Y].resolver.reject(new Error("Worker terminated"));this.processing=Object.create(null)}if(typeof Q=="function"&&(this.terminationHandler=Q),this.busy())this.terminating=!0;else{var be=function(ne){if($.terminated=!0,$.cleaning=!1,$.worker!=null&&$.worker.removeAllListeners&&$.worker.removeAllListeners("message"),$.worker=null,$.terminating=!1,$.terminationHandler)$.terminationHandler(ne,$);else if(ne)throw ne};if(this.worker)if(typeof this.worker.kill=="function"){if(this.worker.killed){be(new Error("worker already killed!"));return}var ge=setTimeout(function(){$.worker&&$.worker.kill()},this.workerTerminateTimeout);this.worker.once("exit",function(){clearTimeout(ge),$.worker&&($.worker.killed=!0),be()}),this.worker.ready?this.worker.send(ue):this.requestQueue.push({message:ue}),this.cleaning=!0;return}else if(typeof this.worker.terminate=="function")this.worker.terminate(),this.worker.killed=!0;else throw new Error("Failed to terminate worker");be()}},kt.prototype.terminateAndNotify=function(B,Q){var $=O.defer();return Q&&$.promise.timeout(Q),this.terminate(B,function(Y,be){Y?$.reject(Y):$.resolve(be)}),$.promise},N.exports=kt,N.exports._tryRequireWorkerThreads=y,N.exports._setupProcessWorker=Ve,N.exports._setupBrowserWorker=ie,N.exports._setupWorkerThreadWorker=je,N.exports.ensureWorkerThreads=R,N.exports}var fe,ce;function pe(){if(ce)return fe;ce=1;var w=65535;fe=O;function O(){this.ports=Object.create(null),this.length=0}return O.prototype.nextAvailableStartingAt=function(A){for(;this.ports[A]===!0;)A++;if(A>=w)throw new Error("WorkerPool debug port limit reached: "+A+">= "+w);return this.ports[A]=!0,this.length++,A},O.prototype.releasePort=function(A){delete this.ports[A],this.length--},fe}var J,me;function Ae(){if(me)return J;me=1;var w=h(),O=w.Promise,A=le(),E=s,U=pe(),ve=new U;function G(y,k){typeof y=="string"?this.script=y||null:(this.script=null,k=y),this.workers=[],this.tasks=[],k=k||{},this.forkArgs=Object.freeze(k.forkArgs||[]),this.forkOpts=Object.freeze(k.forkOpts||{}),this.workerOpts=Object.freeze(k.workerOpts||{}),this.workerThreadOpts=Object.freeze(k.workerThreadOpts||{}),this.debugPortStart=k.debugPortStart||43210,this.nodeWorker=k.nodeWorker,this.workerType=k.workerType||k.nodeWorker||"auto",this.maxQueueSize=k.maxQueueSize||1/0,this.workerTerminateTimeout=k.workerTerminateTimeout||1e3,this.onCreateWorker=k.onCreateWorker||function(){return null},this.onTerminateWorker=k.onTerminateWorker||function(){return null},this.emitStdStreams=k.emitStdStreams||!1,k&&"maxWorkers"in k?($e(k.maxWorkers),this.maxWorkers=k.maxWorkers):this.maxWorkers=Math.max((E.cpus||4)-1,1),k&&"minWorkers"in k&&(k.minWorkers==="max"?this.minWorkers=this.maxWorkers:(ue(k.minWorkers),this.minWorkers=k.minWorkers,this.maxWorkers=Math.max(this.minWorkers,this.maxWorkers)),this._ensureMinWorkers()),this._boundNext=this._next.bind(this),this.workerType==="thread"&&A.ensureWorkerThreads()}G.prototype.exec=function(y,k,X){if(k&&!Array.isArray(k))throw new TypeError('Array expected as argument "params"');if(typeof y=="string"){var ie=O.defer();if(this.tasks.length>=this.maxQueueSize)throw new Error("Max queue size of "+this.maxQueueSize+" reached");var je=this.tasks,Ve={method:y,params:k,resolver:ie,timeout:null,options:X};je.push(Ve);var ut=ie.promise.timeout;return ie.promise.timeout=function(tt){return je.indexOf(Ve)!==-1?(Ve.timeout=tt,ie.promise):ut.call(ie.promise,tt)},this._next(),ie.promise}else{if(typeof y=="function")return this.exec("run",[String(y),k],X);throw new TypeError('Function or string expected as argument "method"')}},G.prototype.proxy=function(){if(arguments.length>0)throw new Error("No arguments expected");var y=this;return this.exec("methods").then(function(k){var X={};return k.forEach(function(ie){X[ie]=function(){return y.exec(ie,Array.prototype.slice.call(arguments))}}),X})},G.prototype._next=function(){if(this.tasks.length>0){var y=this._getWorker();if(y){var k=this,X=this.tasks.shift();if(X.resolver.promise.pending){var ie=y.exec(X.method,X.params,X.resolver,X.options).then(k._boundNext).catch(function(){if(y.terminated)return k._removeWorker(y)}).then(function(){k._next()});typeof X.timeout=="number"&&ie.timeout(X.timeout)}else k._next()}}},G.prototype._getWorker=function(){for(var y=this.workers,k=0;k<y.length;k++){var X=y[k];if(X.busy()===!1)return X}return y.length<this.maxWorkers?(X=this._createWorkerHandler(),y.push(X),X):null},G.prototype._removeWorker=function(y){var k=this;return ve.releasePort(y.debugPort),this._removeWorkerFromList(y),this._ensureMinWorkers(),new O(function(X,ie){y.terminate(!1,function(je){k.onTerminateWorker({forkArgs:y.forkArgs,forkOpts:y.forkOpts,workerThreadOpts:y.workerThreadOpts,script:y.script}),je?ie(je):X(y)})})},G.prototype._removeWorkerFromList=function(y){var k=this.workers.indexOf(y);k!==-1&&this.workers.splice(k,1)},G.prototype.terminate=function(y,k){var X=this;this.tasks.forEach(function(Je){Je.resolver.reject(new Error("Pool terminated"))}),this.tasks.length=0;var ie=function(tt){ve.releasePort(tt.debugPort),this._removeWorkerFromList(tt)},je=ie.bind(this),Ve=[],ut=this.workers.slice();return ut.forEach(function(Je){var tt=Je.terminateAndNotify(y,k).then(je).always(function(){X.onTerminateWorker({forkArgs:Je.forkArgs,forkOpts:Je.forkOpts,workerThreadOpts:Je.workerThreadOpts,script:Je.script})});Ve.push(tt)}),O.all(Ve)},G.prototype.stats=function(){var y=this.workers.length,k=this.workers.filter(function(X){return X.busy()}).length;return{totalWorkers:y,busyWorkers:k,idleWorkers:y-k,pendingTasks:this.tasks.length,activeTasks:k}},G.prototype._ensureMinWorkers=function(){if(this.minWorkers)for(var y=this.workers.length;y<this.minWorkers;y++)this.workers.push(this._createWorkerHandler())},G.prototype._createWorkerHandler=function(){var y=this.onCreateWorker({forkArgs:this.forkArgs,forkOpts:this.forkOpts,workerOpts:this.workerOpts,workerThreadOpts:this.workerThreadOpts,script:this.script})||{};return new A(y.script||this.script,{forkArgs:y.forkArgs||this.forkArgs,forkOpts:y.forkOpts||this.forkOpts,workerOpts:y.workerOpts||this.workerOpts,workerThreadOpts:y.workerThreadOpts||this.workerThreadOpts,debugPort:ve.nextAvailableStartingAt(this.debugPortStart),workerType:this.workerType,workerTerminateTimeout:this.workerTerminateTimeout,emitStdStreams:this.emitStdStreams})};function $e(y){if(!R(y)||!he(y)||y<1)throw new TypeError("Option maxWorkers must be an integer number >= 1")}function ue(y){if(!R(y)||!he(y)||y<0)throw new TypeError("Option minWorkers must be an integer number >= 0")}function R(y){return typeof y=="number"}function he(y){return Math.round(y)==y}return J=G,J}var ze={},Ue,sr;function It(){if(sr)return Ue;sr=1;function w(O,A){this.message=O,this.transfer=A}return Ue=w,Ue}var Er;function Tr(){return Er||(Er=1,function(w){var O=It(),A="__workerpool-terminate__",E={exit:function(){}};if(typeof self<"u"&&typeof postMessage=="function"&&typeof addEventListener=="function")E.on=function(R,he){addEventListener(R,function(y){he(y.data)})},E.send=function(R,he){he?postMessage(R,he):postMessage(R)};else if(typeof process<"u"){var U;try{U=zt}catch(R){if(!(C(R)==="object"&&R!==null&&R.code==="MODULE_NOT_FOUND"))throw R}if(U&&U.parentPort!==null){var ve=U.parentPort;E.send=ve.postMessage.bind(ve),E.on=ve.on.bind(ve),E.exit=process.exit.bind(process)}else E.on=process.on.bind(process),E.send=function(R){process.send(R)},E.on("disconnect",function(){process.exit(1)}),E.exit=process.exit.bind(process)}else throw new Error("Script must be executed as a worker");function G(R){return Object.getOwnPropertyNames(R).reduce(function(he,y){return Object.defineProperty(he,y,{value:R[y],enumerable:!0})},{})}function $e(R){return R&&typeof R.then=="function"&&typeof R.catch=="function"}E.methods={},E.methods.run=function(he,y){var k=new Function("return ("+he+").apply(null, arguments);");return k.apply(k,y)},E.methods.methods=function(){return Object.keys(E.methods)},E.terminationHandler=void 0,E.cleanupAndExit=function(R){var he=function(){E.exit(R)};if(!E.terminationHandler)return he();var y=E.terminationHandler(R);$e(y)?y.then(he,he):he()};var ue=null;E.on("message",function(R){if(R===A)return E.cleanupAndExit(0);try{var he=E.methods[R.method];if(he){ue=R.id;var y=he.apply(he,R.params);$e(y)?y.then(function(k){k instanceof O?E.send({id:R.id,result:k.message,error:null},k.transfer):E.send({id:R.id,result:k,error:null}),ue=null}).catch(function(k){E.send({id:R.id,result:null,error:G(k)}),ue=null}):(y instanceof O?E.send({id:R.id,result:y.message,error:null},y.transfer):E.send({id:R.id,result:y,error:null}),ue=null)}else throw new Error('Unknown method "'+R.method+'"')}catch(k){E.send({id:R.id,result:null,error:G(k)})}}),E.register=function(R,he){if(R)for(var y in R)R.hasOwnProperty(y)&&(E.methods[y]=R[y]);he&&(E.terminationHandler=he.onTerminate),E.send("ready")},E.emit=function(R){if(ue){if(R instanceof O){E.send({id:ue,isEvent:!0,payload:R.message},R.transfer);return}E.send({id:ue,isEvent:!0,payload:R})}},w.add=E.register,w.emit=E.emit}(ze)),ze}var yi=s.platform,Mr=s.isMainThread,wi=s.cpus;function Ze(w,O){var A=Ae();return new A(w,O)}var _t=i.pool=Ze;function ar(w,O){var A=Tr();A.add(w,O)}var st=i.worker=ar;function Ee(w){var O=Tr();O.emit(w)}var Lr=i.workerEmit=Ee,xi=h(),Ne=xi.Promise,_i=i.Promise=Ne,ki=i.Transfer=It(),$i=i.platform=yi,Pi=i.isMainThread=Mr,Ci=i.cpus=wi;r.Promise=_i,r.Transfer=ki,r.cpus=Ci,r.default=i,r.isMainThread=Pi,r.platform=$i,r.pool=_t,r.worker=st,r.workerEmit=Lr,Object.defineProperty(r,"__esModule",{value:!0})})})(ln,ln.exports);var Ls=ln.exports,ct=class{constructor(t,e){v(this,"_value");v(this,"_listeners",{});this.parent=t,this._initial=e,this._value=this.validate(this._initial)}reset(){this.value=this._initial}get value(){return this._value}set value(t){this._value=this.validate(t),this.afterSetEffect(this._value),Object.values(this._listeners).forEach(e=>e(this._value))}addListener(t,e){t in this._listeners&&delete this._listeners[t],this._listeners[t]=e}removeListener(t){t in this._listeners&&delete this._listeners[t]}clearAllListeners(){this._listeners={}}},Rs=class extends ct{get distanceInCelsius(){if(this.value!==void 0)return Math.abs(this.value.min-this.value.max)}},pl=class extends ct{constructor(){super(...arguments);v(this,"_hover",this.value!==void 0)}get hover(){return this._hover}validate(e){return e}afterSetEffect(e){this._hover=this.value!==void 0,this.parent.files.forEveryInstance(r=>r.recieveCursorPosition(e))}recieveCursorPosition(e){this.value=e}},fl=class extends ct{validate(t){if(t===void 0)return;const e=this.parent.minmax.value;if(e===void 0)return t;const r={...t};return t.from<e.min&&(r.from=e.min),t.to>e.max&&(r.to=e.max),r}afterSetEffect(t){t&&this.parent.forEveryInstance(e=>e.recieveRange(t))}imposeRange(t){return t===void 0&&this.value===void 0||t===void 0&&this.value!==void 0&&(this.value=t),t!==void 0&&this.value===void 0?this.value=t:t!==void 0&&this.value!==void 0&&(this.value.from!==t.from||this.value.to!==t.to)&&(this.value=t),this.value}applyMinmax(){this.parent.minmax.value&&this.imposeRange({from:this.parent.minmax.value.min,to:this.parent.minmax.value.max})}applyAuto(){if(this.parent.histogram.value){const e=100/this.parent.histogram.value.length,r=this.parent.histogram.value.filter(n=>n.height>=e),i={from:r[0].from,to:r[r.length-1].to};this.imposeRange(i)}}},ml=()=>{const t=[];for(let e=0;e<=255;e++)t.push(`rgb(${e},${e},${e})`);return t},gl=["rgb( 0, 0, 127 )","rgb( 0, 0, 131)","rgb( 0, 0, 135)","rgb( 0, 0, 139)","rgb( 0, 0, 143)","rgb( 0, 0, 147)","rgb( 0, 0, 151)","rgb( 0, 0, 155)","rgb( 0, 0, 159)","rgb( 0, 0, 163)","rgb( 0, 0, 167)","rgb( 0, 0, 171)","rgb( 0, 0, 175)","rgb( 0, 0, 179)","rgb( 0, 0, 183)","rgb( 0, 0, 187)","rgb( 0, 0, 191)","rgb( 0, 0, 195)","rgb( 0, 0, 199)","rgb( 0, 0, 203)","rgb( 0, 0, 207)","rgb( 0, 0, 211)","rgb( 0, 0, 215)","rgb( 0, 0, 219)","rgb( 0, 0, 223)","rgb( 0, 0, 227)","rgb( 0, 0, 231)","rgb( 0, 0, 235)","rgb( 0, 0, 239)","rgb( 0, 0, 243)","rgb( 0, 0, 247)","rgb( 0, 0, 251)","rgb( 0, 0, 255)","rgb( 0, 4, 255)","rgb( 0, 8, 255)","rgb( 0, 12, 255)","rgb( 0, 16, 255)","rgb( 0, 20, 255)","rgb( 0, 24, 255)","rgb( 0, 28, 255)","rgb( 0, 32, 255)","rgb( 0, 36, 255)","rgb( 0, 40, 255)","rgb( 0, 44, 255)","rgb( 0, 48, 255)","rgb( 0, 52, 255)","rgb( 0, 56, 255)","rgb( 0, 60, 255)","rgb( 0, 64, 255)","rgb( 0, 68, 255)","rgb( 0, 72, 255)","rgb( 0, 76, 255)","rgb( 0, 80, 255)","rgb( 0, 84, 255)","rgb( 0, 88, 255)","rgb( 0, 92, 255)","rgb( 0, 96, 255)","rgb( 0, 100, 255)","rgb( 0, 104, 255)","rgb( 0, 108, 255)","rgb( 0, 112, 255)","rgb( 0, 116, 255)","rgb( 0, 120, 255)","rgb( 0, 124, 255)","rgb( 0, 128, 255)","rgb( 0, 132, 255)","rgb( 0, 136, 255)","rgb( 0, 140, 255)","rgb( 0, 144, 255)","rgb( 0, 148, 255)","rgb( 0, 152, 255)","rgb( 0, 156, 255)","rgb( 0, 160, 255)","rgb( 0, 164, 255)","rgb( 0, 168, 255)","rgb( 0, 172, 255)","rgb( 0, 176, 255)","rgb( 0, 180, 255)","rgb( 0, 184, 255)","rgb( 0, 188, 255)","rgb( 0, 192, 255)","rgb( 0, 196, 255)","rgb( 0, 200, 255)","rgb( 0, 204, 255)","rgb( 0, 208, 255)","rgb( 0, 212, 255)","rgb( 0, 216, 255)","rgb( 0, 220, 255)","rgb( 0, 224, 255)","rgb( 0, 228, 255)","rgb( 0, 232, 255)","rgb( 0, 236, 255)","rgb( 0, 240, 255)","rgb( 0, 244, 255)","rgb( 0, 248, 255)","rgb( 0, 252, 255)","rgb( 1, 255, 253)","rgb( 5, 255, 249)","rgb( 9, 255, 245)","rgb( 13, 255, 241)","rgb( 17, 255, 237)","rgb( 21, 255, 233)","rgb( 25, 255, 229)","rgb( 29, 255, 225)","rgb( 33, 255, 221)","rgb( 37, 255, 217)","rgb( 41, 255, 213)","rgb( 45, 255, 209)","rgb( 49, 255, 205)","rgb( 53, 255, 201)","rgb( 57, 255, 197)","rgb( 61, 255, 193)","rgb( 65, 255, 189)","rgb( 69, 255, 185)","rgb( 73, 255, 181)","rgb( 77, 255, 177)","rgb( 81, 255, 173)","rgb( 85, 255, 169)","rgb( 89, 255, 165)","rgb( 93, 255, 161)","rgb( 97, 255, 157)","rgb( 101, 255, 153)","rgb( 105, 255, 149)","rgb( 109, 255, 145)","rgb( 113, 255, 141)","rgb( 117, 255, 137)","rgb( 121, 255, 133)","rgb( 125, 255, 129)","rgb( 129, 255, 125)","rgb( 133, 255, 121)","rgb( 137, 255, 117)","rgb( 141, 255, 113)","rgb( 145, 255, 109)","rgb( 149, 255, 105)","rgb( 153, 255, 101)","rgb( 157, 255, 97)","rgb( 161, 255, 93)","rgb( 165, 255, 89)","rgb( 169, 255, 85)","rgb( 173, 255, 81)","rgb( 177, 255, 77)","rgb( 181, 255, 73)","rgb( 185, 255, 69)","rgb( 189, 255, 65)","rgb( 193, 255, 61)","rgb( 197, 255, 57)","rgb( 201, 255, 53)","rgb( 205, 255, 49)","rgb( 209, 255, 45)","rgb( 213, 255, 41)","rgb( 217, 255, 37)","rgb( 221, 255, 33)","rgb( 225, 255, 29)","rgb( 229, 255, 25)","rgb( 233, 255, 21)","rgb( 237, 255, 17)","rgb( 241, 255, 13)","rgb( 245, 255, 9)","rgb( 249, 255, 5)","rgb( 253, 255, 1)","rgb( 255, 252, 1)","rgb( 255, 248, 1)","rgb( 255, 244, 1)","rgb( 255, 240, 1)","rgb( 255, 236, 1)","rgb( 255, 232, 1)","rgb( 255, 228, 1)","rgb( 255, 224, 1)","rgb( 255, 220, 1)","rgb( 255, 216, 1)","rgb( 255, 212, 1)","rgb( 255, 208, 1)","rgb( 255, 204, 1)","rgb( 255, 200, 1)","rgb( 255, 196, 1)","rgb( 255, 192, 1)","rgb( 255, 188, 1)","rgb( 255, 184, 1)","rgb( 255, 180, 1)","rgb( 255, 176, 1)","rgb( 255, 172, 1)","rgb( 255, 168, 1)","rgb( 255, 164, 1)","rgb( 255, 160, 1)","rgb( 255, 156, 1)","rgb( 255, 152, 1)","rgb( 255, 148, 1)","rgb( 255, 144, 1)","rgb( 255, 140, 1)","rgb( 255, 136, 1)","rgb( 255, 132, 1)","rgb( 255, 128, 1)","rgb( 255, 124, 1)","rgb( 255, 120, 1)","rgb( 255, 116, 1)","rgb( 255, 112, 1)","rgb( 255, 108, 1)","rgb( 255, 104, 1)","rgb( 255, 100, 1)","rgb( 255, 96, 1)","rgb( 255, 92, 1)","rgb( 255, 88, 1)","rgb( 255, 84, 1)","rgb( 255, 80, 1)","rgb( 255, 76, 1)","rgb( 255, 72, 1)","rgb( 255, 68, 1)","rgb( 255, 64, 1)","rgb( 255, 60, 1)","rgb( 255, 56, 1)","rgb( 255, 52, 1)","rgb( 255, 48, 1)","rgb( 255, 44, 1)","rgb( 255, 40, 1)","rgb( 255, 36, 1)","rgb( 255, 32, 1)","rgb( 255, 28, 1)","rgb( 255, 24, 1)","rgb( 255, 20, 1)","rgb( 255, 16, 1)","rgb( 255, 12, 1)","rgb( 255, 8, 1)","rgb( 255, 4, 1)","rgb( 255, 0, 1)","rgb( 251, 0, 1)","rgb( 247, 0, 1)","rgb( 243, 0, 1)","rgb( 239, 0, 1)","rgb( 235, 0, 1)","rgb( 231, 0, 1)","rgb( 227, 0, 1)","rgb( 223, 0, 1)","rgb( 219, 0, 1)","rgb( 215, 0, 1)","rgb( 211, 0, 1)","rgb( 207, 0, 1)","rgb( 203, 0, 1)","rgb( 199, 0, 1)","rgb( 195, 0, 1)","rgb( 191, 0, 1)","rgb( 187, 0, 1)","rgb( 183, 0, 1)","rgb( 179, 0, 1)","rgb( 175, 0, 1)","rgb( 171, 0, 1)","rgb( 167, 0, 1)","rgb( 163, 0, 1)","rgb( 159, 0, 1)","rgb( 155, 0, 1)","rgb( 151, 0, 1)","rgb( 147, 0, 1)","rgb( 143, 0, 1)","rgb( 139, 0, 1)","rgb( 135, 0, 1)","rgb( 131, 0, 1)","rgb( 127, 0, 1)"],vl=["rgb( 0, 0, 0 )","rgb(0, 0, 13 )","rgb(0, 0, 29 )","rgb(0, 0, 39 )","rgb(0, 0, 46 )","rgb(0, 0, 53 )","rgb(0, 0, 60 )","rgb(0, 0, 67 )","rgb(0, 0, 74 )","rgb(0, 0, 81 )","rgb(1, 0, 85 )","rgb(2, 0, 89 )","rgb(3, 0, 94 )","rgb(4, 0, 98 )","rgb(5, 0, 101 )","rgb(6, 0, 105 )","rgb(8, 0, 109 )","rgb(10, 0, 113 )","rgb(12, 0, 116 )","rgb(13, 0, 118 )","rgb(15, 0, 120 )","rgb(18, 0, 121 )","rgb(21, 0, 123 )","rgb(24, 0, 126 )","rgb(27, 0, 128 )","rgb(30, 0, 130 )","rgb(33, 0, 133 )","rgb(37, 0, 135 )","rgb(40, 0, 137 )","rgb(44, 0, 138 )","rgb(47, 0, 140 )","rgb(50, 0, 141 )","rgb(53, 0, 142 )","rgb(57, 0, 144 )","rgb(59, 0, 145 )","rgb(62, 0, 147 )","rgb(64, 0, 148 )","rgb(67, 0, 149 )","rgb(70, 0, 150 )","rgb(72, 0, 150 )","rgb(75, 0, 151 )","rgb(78, 0, 151 )","rgb(81, 0, 151 )","rgb(84, 0, 152 )","rgb(87, 0, 152 )","rgb(90, 0, 153 )","rgb(93, 0, 154 )","rgb(96, 0, 155 )","rgb(99, 0, 155 )","rgb(102, 0, 155 )","rgb(105, 0, 155 )","rgb(108, 0, 156 )","rgb(111, 0, 156 )","rgb(113, 0, 157 )","rgb(116, 0, 157 )","rgb(119, 0, 157 )","rgb(122, 0, 157 )","rgb(125, 0, 157 )","rgb(128, 0, 157 )","rgb(131, 0, 157 )","rgb(133, 0, 157 )","rgb(136, 0, 157 )","rgb(138, 0, 157 )","rgb(141, 0, 157 )","rgb(144, 0, 156 )","rgb(148, 0, 156 )","rgb(150, 0, 155 )","rgb(153, 0, 155 )","rgb(155, 0, 155 )","rgb(158, 0, 155 )","rgb(160, 0, 155 )","rgb(162, 0, 155 )","rgb(165, 0, 154 )","rgb(167, 0, 154 )","rgb(169, 0, 154 )","rgb(171, 0, 153 )","rgb(173, 0, 153 )","rgb(175, 1, 152 )","rgb(176, 1, 152 )","rgb(177, 1, 151 )","rgb(179, 1, 150 )","rgb(181, 2, 149 )","rgb(183, 2, 149 )","rgb(184, 3, 149 )","rgb(185, 4, 149 )","rgb(187, 5, 148 )","rgb(188, 5, 147 )","rgb(190, 6, 146 )","rgb(191, 6, 146 )","rgb(192, 7, 145 )","rgb(193, 8, 144 )","rgb(194, 9, 143 )","rgb(195, 11, 142 )","rgb(196, 12, 141 )","rgb(198, 13, 139 )","rgb(199, 14, 138 )","rgb(200, 16, 136 )","rgb(202, 18, 134 )","rgb(202, 19, 133 )","rgb(204, 21, 131 )","rgb(205, 22, 129 )","rgb(206, 23, 126 )","rgb(207, 25, 123 )","rgb(208, 26, 121 )","rgb(209, 28, 118 )","rgb(210, 29, 116 )","rgb(211, 31, 114 )","rgb(212, 33, 111 )","rgb(213, 35, 108 )","rgb(214, 37, 104 )","rgb(215, 38, 101 )","rgb(216, 40, 98 )","rgb(218, 43, 95 )","rgb(219, 45, 91 )","rgb(219, 47, 87 )","rgb(220, 48, 82 )","rgb(221, 50, 76 )","rgb(222, 52, 71 )","rgb(223, 53, 65 )","rgb(224, 55, 59 )","rgb(224, 56, 54 )","rgb(225, 58, 48 )","rgb(226, 60, 42 )","rgb(227, 62, 37 )","rgb(228, 64, 31 )","rgb(228, 66, 28 )","rgb(229, 67, 26 )","rgb(230, 69, 23 )","rgb(230, 71, 22 )","rgb(231, 73, 19 )","rgb(232, 74, 18 )","rgb(232, 76, 16 )","rgb(233, 77, 14 )","rgb(234, 78, 12 )","rgb(234, 80, 11 )","rgb(235, 82, 10 )","rgb(235, 84, 9 )","rgb(236, 86, 8 )","rgb(236, 87, 8 )","rgb(237, 89, 7 )","rgb(237, 91, 6 )","rgb(238, 92, 5 )","rgb(238, 94, 5 )","rgb(239, 95, 4 )","rgb(239, 97, 4 )","rgb(240, 99, 3 )","rgb(240, 100, 3 )","rgb(241, 102, 3 )","rgb(241, 103, 3 )","rgb(241, 105, 2 )","rgb(241, 106, 2 )","rgb(241, 107, 2 )","rgb(242, 109, 1 )","rgb(242, 111, 1 )","rgb(243, 112, 1 )","rgb(243, 114, 1 )","rgb(244, 115, 0 )","rgb(244, 117, 0 )","rgb(244, 119, 0 )","rgb(244, 121, 0 )","rgb(245, 123, 0 )","rgb(245, 126, 0 )","rgb(246, 128, 0 )","rgb(246, 129, 0 )","rgb(247, 131, 0 )","rgb(247, 133, 0 )","rgb(247, 135, 0 )","rgb(248, 136, 0 )","rgb(248, 137, 0 )","rgb(248, 139, 0 )","rgb(248, 140, 0 )","rgb(249, 142, 0 )","rgb(249, 143, 0 )","rgb(249, 144, 0 )","rgb(249, 146, 0 )","rgb(250, 148, 0 )","rgb(250, 150, 0 )","rgb(251, 152, 0 )","rgb(251, 155, 0 )","rgb(252, 157, 0 )","rgb(252, 159, 0 )","rgb(253, 161, 0 )","rgb(253, 163, 0 )","rgb(253, 165, 0 )","rgb(253, 168, 0 )","rgb(253, 170, 0 )","rgb(253, 172, 0 )","rgb(253, 173, 0 )","rgb(254, 175, 0 )","rgb(254, 177, 0 )","rgb(254, 178, 0 )","rgb(254, 180, 0 )","rgb(254, 182, 0 )","rgb(254, 184, 0 )","rgb(254, 186, 0 )","rgb(254, 187, 0 )","rgb(254, 189, 0 )","rgb(254, 191, 0 )","rgb(254, 193, 0 )","rgb(254, 195, 0 )","rgb(254, 197, 0 )","rgb(254, 199, 0 )","rgb(254, 200, 0 )","rgb(254, 202, 1 )","rgb(254, 203, 1 )","rgb(254, 204, 2 )","rgb(254, 206, 3 )","rgb(254, 207, 4 )","rgb(254, 209, 6 )","rgb(254, 211, 8 )","rgb(254, 213, 9 )","rgb(254, 214, 11 )","rgb(254, 216, 12 )","rgb(255, 218, 14 )","rgb(255, 219, 15 )","rgb(255, 220, 19 )","rgb(255, 221, 23 )","rgb(255, 222, 27 )","rgb(255, 224, 31 )","rgb(255, 225, 35 )","rgb(255, 226, 38 )","rgb(255, 228, 42 )","rgb(255, 229, 48 )","rgb(255, 230, 53 )","rgb(255, 231, 59 )","rgb(255, 233, 65 )","rgb(255, 234, 71 )","rgb(255, 235, 76 )","rgb(255, 237, 83 )","rgb(255, 238, 89 )","rgb(255, 239, 95 )","rgb(255, 239, 102 )","rgb(255, 240, 109 )","rgb(255, 241, 115 )","rgb(255, 241, 123 )","rgb(255, 242, 132 )","rgb(255, 243, 139 )","rgb(255, 244, 146 )","rgb(255, 244, 153 )","rgb(255, 245, 160 )","rgb(255, 245, 167 )","rgb(255, 246, 174 )","rgb(255, 247, 181 )","rgb(255, 248, 187 )","rgb(255, 248, 193 )","rgb(255, 249, 198 )","rgb(255, 249, 203 )","rgb(255, 250, 209 )","rgb(255, 251, 215 )","rgb(255, 252, 221 )","rgb(255, 253, 227 )","rgb(255, 253, 232 )","rgb(255, 254, 237 )","rgb(255, 254, 242 )","rgb(255, 255, 247 )","rgb(255, 255, 249 )"],bl=ml(),Ds={iron:{pixels:vl,name:"paleta IRON",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,12,77,1) 30%, rgba(86,20,101,1) 49%, rgba(255,0,0,1) 64%, rgba(249,255,0,1) 84%, rgba(255,255,255,1) 100%)"},jet:{pixels:gl,name:"paleta JET",gradient:"linear-gradient(90deg, rgba(31,0,157,1) 0%, rgba(0,5,255,1) 8%, rgba(0,255,239,1) 36%, rgba(255,252,0,1) 66%, rgba(255,2,0,1) 94%, rgba(145,0,0,1) 100%)"},grayscale:{pixels:bl,name:"Stupně šedé",gradient:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"}},yl=class extends ct{get availablePalettes(){return Ds}get currentPalette(){return this.availablePalettes[this.value]}get currentPixels(){return this.currentPalette.pixels}validate(t){return t}afterSetEffect(t){this.parent.forEveryRegistry(e=>{e.forEveryInstance(r=>r.recievePalette(t))})}setPalette(t){this.value=t}},on,wl=(on=class{},v(on,"inputToDate",t=>{if(typeof t=="number"){const e=new Date;return e.setTime(t),e}return t}),on),De,xl=(De=class extends wl{static humanRangeDates(e,r){return e=De.inputToDate(e),r=De.inputToDate(r),e.getUTCDate()===r.getUTCDate()?De.humanDate(e):[De.humanDate(e),De.humanDate(r)].join(" - ")}static human(e){return`${De.humanDate(e)} ${De.humanTime(e,!0)} `}},v(De,"isoDate",e=>(e=De.inputToDate(e),Zi(e,{representation:"date"}))),v(De,"isoTime",e=>(e=De.inputToDate(e),Zi(e,{representation:"time"}))),v(De,"isoComplete",e=>(e=De.inputToDate(e),Zi(e))),v(De,"humanTime",(e,r=!1)=>(e=De.inputToDate(e),is(e,r?"HH:mm:ss":"HH:mm"))),v(De,"humanDate",(e,r=!1)=>(e=De.inputToDate(e),is(e,r?"d. M.":"d. M. yyyy"))),De),ni=class{},js=class{constructor(t,e){this.thermalUrl=t,this.visibleUrl=e}},cn=class Fs extends js{constructor(e,r,i){super(e),this.code=r,this.message=i}isSuccess(){return!1}static fromError(e){return new Fs(e.url,e.code,e.message)}},Ns=class extends Error{constructor(t,e,r){super(r),this.code=t,this.url=e}},_l=class extends ni{constructor(e,r,i,n,s,a,u,h,d,m,f){super();v(this,"id");v(this,"horizontalLimit");v(this,"verticalLimit");v(this,"group");v(this,"url");v(this,"thermalUrl");v(this,"visibleUrl");v(this,"fileName");v(this,"frameCount");v(this,"frames",[]);v(this,"signature","unknown");v(this,"version",-1);v(this,"streamCount",-1);v(this,"fileDataType",-1);v(this,"unit",-1);v(this,"width");v(this,"height");v(this,"timestamp");v(this,"duration");v(this,"min");v(this,"max");v(this,"_isHover",!1);v(this,"root",null);v(this,"canvasLayer");v(this,"visibleLayer");v(this,"cursorLayer");v(this,"listenerLayer");v(this,"timeline");v(this,"cursorValue");v(this,"_mounted",!1);v(this,"_pixels");v(this,"_onHover");v(this,"_onClick");this.group=e,this.id=this.formatId(r),this.url=r,this.thermalUrl=r,this.visibleUrl=f,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1),this.width=i,this.height=n,this.timestamp=a,this.duration=u,this.min=h,this.max=d,this.frameCount=m,this.horizontalLimit=this.width/4*3,this.verticalLimit=this.height/4*3,this._pixels=s}get pool(){return this.group.registry.manager.pool}get isHover(){return this._isHover}set isHover(e){this._isHover=e}get mountedBaseLayers(){return this._mounted}set mountedBaseLayers(e){this._mounted=e}get pixels(){return this._pixels}set pixels(e){this._pixels=e,this.onSetPixels(e)}attachToDom(e){(this.root!==null||this.mountedBaseLayers===!0)&&(console.warn(`The instance ${this.id} has already mounted base layers therefore the inner DOM tree is deleted and built from the scratch.`),this.detachFromDom(),this.unmountListener()),this.root=e,this.root.classList.add("thermalImageRoot"),this.root.style.transition="border-color .1s ease-in-out",this.root.style.zIndex="10",this.root.style.position="relative",this.root.style.lineHeight="0",this.visibleLayer.exists&&this.visibleLayer.mount(),this.canvasLayer.mount(),this.cursorLayer.mount(),this.root.dataset.thermalFile=this.id,this.root.dataset.mounted="true",this.mountListener(),this.mountedBaseLayers=!0}detachFromDom(){this.root===void 0&&console.warn(`The instance ${this.id} does not have a root, therefore the base layers can not be unmounted.`),this.root&&(this.root.dataset.mounted="false",this.root.dataset.thermalFile=void 0),this.visibleLayer.unmount(),this.canvasLayer.unmount(),this.cursorLayer.unmount(),this.unmountListener(),this.mountedBaseLayers=!1}mountListener(){if(this.root===void 0){console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);return}this.listenerLayer.mount(),this.listenerLayer.getLayerRoot().onmousemove=e=>{this.cursorLayer.show=!0,this.isHover=!0;const r=this.width,i=this.root.clientWidth,n=r/i,s=Math.round(e.offsetX*n),a=Math.round(e.offsetY*n);this.group.cursorPosition.recieveCursorPosition({x:s,y:a}),this._onHover&&this._onHover(e,this)},this.listenerLayer.getLayerRoot().onmouseleave=()=>{this.cursorLayer.show=!1,this.isHover=!1,this.group.cursorPosition.recieveCursorPosition(void 0)},this.listenerLayer.getLayerRoot().onclick=e=>{this._onClick&&this._onClick(e,this)}}unmountListener(){this.listenerLayer.unmount()}mountToDom(e){this.attachToDom(e)}unmountFromDom(){this.detachFromDom()}draw(){this.mountedBaseLayers===!0&&this.canvasLayer.draw()}recievePalette(e){this.draw()}destroySelfAndBelow(){this.detachFromDom()}removeAllChildren(){this.detachFromDom()}recieveCursorPosition(e){this.cursorValue.recalculateFromCursor(e),e!==void 0&&this.cursorValue.value!==void 0?(this.cursorLayer.setCursor(e.x,e.y,this.cursorValue.value),this.cursorLayer.show=!0):(this.cursorLayer.show=!1,this.cursorLayer.resetCursor())}getTemperatureAtPoint(e,r){const i=r*this.width+e;return this.pixels[i]}recieveRange(e){e!==void 0&&this.draw()}reset(){}recieveOpacity(e){this.visibleLayer&&this.canvasLayer&&(this.canvasLayer.opacity=e)}setHoverHandler(e){this._onHover=e}setHoverCursor(e){this.root&&this.root.style.cursor!==e&&(this.root.style.cursor=e)}setClickHandler(e=void 0){this._onClick=e}},si=class{constructor(t){v(this,"_mounted",!1);this.instance=t}get mounted(){return this._mounted}mount(){this._mounted||this.instance.root!==null&&(this._mounted=!0,this.instance.root.appendChild(this.getLayerRoot()))}unmount(){this._mounted&&this.instance.root!==null&&(this._mounted=!1,this.instance.root.removeChild(this.getLayerRoot()))}destroy(){this.onDestroy()}},dt=class un{static createCanvasContainer(){const e=document.createElement("div");return e.classList.add("thermalCanvasWrapper"),e.style.position="relative",e}static createCanvas(){const e=document.createElement("canvas");return e.classList.add("thermalCanvas"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createDateLayer(){const e=document.createElement("div");return e.classList.add("dateLayer"),e.style.margin="0px",e.style.padding="0px",e.style.position="absolute",e.style.top="0px",e.style.left="0%",e.style.width="100%",e.style.fontSize="small",e}static createDateLayerInner(){const e=document.createElement("div");return e.classList.add("dateLayerInner"),e.style.margin="0px",e.style.padding=".3rem 0rem",e.style.backgroundColor="black",e.style.color="white",e.style.borderRadius=".5rem .5rem 0 0",e.style.width="calc(100% + 4px )",e.style.position="absolute",e.style.top="0rem",e.style.left="-2px",e.style.opacity="0",e.style.transition="opacity .1s ease-in-out",e.style.textAlign="center",e}static createVisibleLayer(){const e=document.createElement("div");return e.classList.add("visibleLayer"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e}static createVisibleImage(){const e=document.createElement("img");return e.classList.add("visibleLayerImage"),e.style.padding="0px",e.style.margin="0px",e.style.objectFit="contain",e.style.width="100%",e.style.height="100%",e.style.objectPosition="top left",e}static createListener(){const e=document.createElement("div");return e.classList.add("thermalListener"),e.style.margin="0px",e.style.padding="0px",e.style.height="100%",e.style.width="100%",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.cursor="pointer",e.setAttribute("id",Math.random().toString()),e}static createCursorLayerRoot(){const e=document.createElement("div");return e.classList.add("cursorLayerRoot"),e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.opacity="0",e.style.overflow="hidden",e.style.lineHeight="1rem",e}static createCursorLayerCenter(){const e=document.createElement("div");return e.classList.add("cursorLayerCenter"),e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.width="0px",e.style.height="0px",e}static createCursorLayerAxeBase(){const e=document.createElement("div");return e.classList.add("cursorLayerAxe"),e.style.backdropFilter="invert(100)",e.style.position="absolute",e.style.top="0px",e.style.left="0px",e.style.content="",e}static createCursorLayerX(){const e=un.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeX"),e.style.width="1px",e.style.height="20px",e.style.top="-10px",e}static createCursorLayerY(){const e=un.createCursorLayerAxeBase();return e.classList.add("cursorLayerAxeY"),e.style.width="20px",e.style.height="1px",e.style.left="-10px",e}static createCursorLayerLabel(){const e=document.createElement("div");return e.classList.add("cursorLayerLabel"),e.style.position="absolute",e.style.padding="1px 3px",e.style.backgroundColor="rgba( 0,0,0,0.5 )",e.style.color="white",e.style.whiteSpace="nowrap",e.style.fontSize="small",e.style.borderRadius="5px",e}},kl=class extends si{constructor(e){super(e);v(this,"container");v(this,"canvas");v(this,"context");v(this,"_opacity",1);this.container=dt.createCanvasContainer(),this.canvas=dt.createCanvas(),this.canvas.width=this.instance.width,this.canvas.height=this.instance.height,this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas)}get pool(){return this.instance.pool}get width(){return this.instance.width}get height(){return this.instance.height}get pixels(){return this.instance.pixels}get from(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.from:this.instance.min}get to(){return this.instance.group.registry.range.value?this.instance.group.registry.range.value.to:this.instance.max}get opacity(){return this._opacity}set opacity(e){this._opacity=Math.max(Math.min(e,1),0),this._opacity!==1?this.getLayerRoot().style.opacity=this._opacity.toString():this.getLayerRoot().style.removeProperty("opacity")}getLayerRoot(){return this.container}onDestroy(){this.canvas.remove(),this.container.remove()}getPalette(){return this.instance.group.registry.palette.currentPalette.pixels}async draw(){const e=this.getPalette(),r=await this.pool.exec(async(i,n,s,a,u,h)=>{const m=new OffscreenCanvas(s,a).getContext("2d"),f=n-i;for(let _=0;_<=s;_++)for(let S=0;S<=a;S++){const C=_+S*s;let j=u[C];j<i&&(j=i),j>n&&(j=n);const I=(j-i)/f,oe=Math.round(255*I),Z=h[oe];m.fillStyle=Z,m.fillRect(_,S,1,1)}const P=m.getImageData(0,0,s,a);return await createImageBitmap(P)},[this.from,this.to,this.width,this.height,this.pixels,e],{});this.context.drawImage(r,0,0)}exportAsPng(){const e=this.canvas.toDataURL(),r=document.createElement("a");r.download=this.instance.fileName.replace(".lrc","_exported.png"),r.href=e,r.click()}},$l=class extends si{constructor(e){super(e);v(this,"layerRoot");v(this,"center");v(this,"axisX");v(this,"axisY");v(this,"label");v(this,"_show",!1);v(this,"_hover",!1);this.layerRoot=dt.createCursorLayerRoot(),this.center=dt.createCursorLayerCenter(),this.axisX=dt.createCursorLayerX(),this.axisY=dt.createCursorLayerY(),this.label=dt.createCursorLayerLabel(),this.layerRoot.appendChild(this.center),this.center.appendChild(this.axisX),this.center.appendChild(this.axisY),this.center.appendChild(this.label)}get show(){return this._show}set show(e){this._show=e,this.layerRoot.style.opacity=this._show?"1":"0"}get hover(){return this._hover}set hover(e){this._hover=e,this.label.style.backgroundColor=this._hover?"black":"rgba( 0,0,0,0.5 )"}setCursor(e,r,i){if(this.instance.root!==null){const n=this.instance.root.offsetWidth/this.instance.width,s=Math.round(e*n),a=Math.round(r*n);this.center.style.left=this.px(s),this.center.style.top=this.px(a),e>this.instance.width/3?(this.label.style.right="3px",this.label.style.removeProperty("left")):(this.label.style.left="3px",this.label.style.removeProperty("right")),r>this.instance.height/4?this.label.style.bottom!=="3px"&&(this.label.style.bottom="3px",this.label.style.removeProperty("top")):this.label.style.top!=="3px"&&(this.label.style.top="3px",this.label.style.removeProperty("bottom")),this.label.innerHTML=`${i.toFixed(3)} °C`}}setValue(e){e&&(this.label.innerHTML=`${e.toFixed(3)} °C`)}resetCursor(){this.center.style.top="0px",this.center.style.left="0px",this.label.style.removeProperty("right"),this.label.style.removeProperty("bottom"),this.label.style.top="3px",this.label.style.left="3px",this.label.innerHTML=""}px(e){return`${e}px`}getLayerRoot(){return this.layerRoot}onDestroy(){this.label.remove(),this.axisX.remove(),this.axisY.remove(),this.center.remove(),this.layerRoot.remove()}},Pl=class extends si{constructor(e){super(e);v(this,"container");this.container=dt.createListener()}getLayerRoot(){return this.container}onDestroy(){this.container.remove()}},Cl=class extends si{constructor(e,r){super(e);v(this,"container");v(this,"image");this._url=r,this.container=dt.createVisibleLayer(),this._url&&(this.image=dt.createVisibleImage(),this.url=this._url,this.container.appendChild(this.image))}get url(){return this._url}set url(e){this._url=e,this.image&&e&&(this.image.src=e)}get exists(){return this._url!==void 0}getLayerRoot(){return this.container}onDestroy(){this.image&&this.image.remove(),this.container.remove()}},Ol=class{constructor(t,e){v(this,"_currentFrame");v(this,"bufferSize",4);v(this,"buffer",new Map);this.drive=t,this.currentFrame=e}get currentFrame(){return this._currentFrame}set currentFrame(t){this._currentFrame=t,this.drive.parent.pixels=this.currentFrame.pixels}get currentStep(){return this.drive.stepsByAbsolute.get(this._currentFrame.timestamp)}get preloadedSteps(){return Array.from(this.buffer.keys())}get preloadedTimestampsRelative(){return this.preloadedSteps.map(t=>t.relative)}async init(){return await this.preloadAfterFrameSet(this.currentStep)}async recieveStep(t){let e=this.buffer.get(t);return e===void 0&&(e=await this.drive.parent.service.frameData(t.index)),this.currentFrame=e,await this.preloadAfterFrameSet(t)}async preloadAfterFrameSet(t){const e=t.index+1<this.drive.relativeSteps.length?t.index+1:NaN,r=isNaN(e)?NaN:this.drive._validateIndex(e+this.bufferSize);if(isNaN(e)||isNaN(r)||e>r)return t.relative===this.drive.parent.duration&&this.buffer.clear(),{absoluteTime:this.drive.currentStep.absolute,relativeTime:this.drive.value,currentFrame:this.currentFrame,currentStep:this.currentStep,buffer:this.preloadedSteps,preloaded:!1,hasChanged:!0};const i=Array.from(this.drive.stepsByIndex.values()).filter(a=>a.index>=e&&a.index<r),n=i.filter(a=>!this.preloadedSteps.includes(a));return(await Promise.all(n.map(a=>this.drive.parent.service.frameData(a.index)))).forEach((a,u)=>{const h=n[u];this.buffer.set(h,a)}),this.preloadedSteps.forEach(a=>{i.includes(a)||this.buffer.delete(a)}),{absoluteTime:this.drive.currentStep.absolute,currentFrame:this.currentFrame,currentStep:this.currentStep,relativeTime:this.drive.value,buffer:this.preloadedSteps,preloaded:!0,hasChanged:!0}}},Sl=class extends ct{constructor(e,r,i,n){super(e,Math.max(Math.min(r,i.length),0));v(this,"startTimestampRelative");v(this,"endTimestampRelative");v(this,"stepsByAbsolute",new Map);v(this,"stepsByRelative",new Map);v(this,"stepsByIndex",new Map);v(this,"relativeSteps",[]);v(this,"_currentStep");v(this,"_onChangeListeners",new Map);v(this,"isSequence");v(this,"_isPlayying",!1);v(this,"timer");v(this,"buffer");this.steps=i,this._currentStep=this.steps[this._initial],this.startTimestampRelative=0,this.endTimestampRelative=this.steps[this.steps.length-1].relative,this.isSequence=this.parent.timelineData.length>1,this.steps.forEach(s=>{this.stepsByIndex.set(s.index,s),this.stepsByAbsolute.set(s.absolute,s),this.stepsByRelative.set(s.relative,s),this.relativeSteps.push(s.relative)}),this.buffer=new Ol(this,n)}get duration(){return this.parent.duration}get frameCount(){return this.steps.length}get currentStep(){return this._currentStep}get isPlaying(){return this._isPlayying}init(){this.buffer.init()}afterSetEffect(e){this.steps.length}validate(e){return this.steps===void 0?e:this.steps.length===1?0:this._validateRelativeTime(e)}_validateRelativeTime(e){return Math.max(Math.min(e,this.steps[this.steps.length-1].relative),0)}_validateIndex(e){return Math.max(Math.min(e,this.steps.length),0)}_convertRelativeToAspect(e){return e/this.duration}_convertRelativeToPercent(e){return this._convertRelativeToAspect(e)*100}_convertPercenttRelative(e){return this.duration*e/100}addChangeListener(e,r){this._onChangeListeners.set(e,r)}removeChangeListener(e){this._onChangeListeners.delete(e)}findPreviousRelative(e){if(this.steps.length===1)return this.steps[0];e=this._validateRelativeTime(e);const r=this._convertRelativeToAspect(e),i=Math.ceil(r*this.steps.length)+5,n=this._validateIndex(i-40),s=this._validateIndex(i),u=this.steps.slice(n,s).reverse().find(h=>h.relative<=e);return u!==void 0?u:this.steps[0]}findNextRelative(e){if(this.steps.length===1)return this.steps[0];const r=this._convertRelativeToAspect(e),i=Math.floor(r*this.steps.length)-5,n=this._validateIndex(i),s=this._validateIndex(i+40),u=this.steps.slice(n,s).find(h=>h.relative>e);return u!==void 0?u:!1}async setRelativeTime(e){e=this._validateRelativeTime(e),this.value=e;const r=this.findPreviousRelative(this.value);return r!==this._currentStep?(this._currentStep=r,await this.buffer.recieveStep(this._currentStep)):{absoluteTime:this._currentStep.absolute,relativeTime:this.value,currentStep:this._currentStep,currentFrame:this.buffer.currentFrame,buffer:[],preloaded:!1,hasChanged:!1}}async setValueByPercent(e){e=Math.max(Math.min(e,100),0);const r=this._convertPercenttRelative(e);return await this.setRelativeTime(r)}createNextStepTimer(){this.timer!==void 0&&clearTimeout(this.timer),!(!this.isSequence||this._isPlayying===!1)&&(this.timer=setTimeout(()=>{const e=this.findNextRelative(this._currentStep.relative);e?(this.value=e.relative,this._isPlayying&&(this.value=e.relative,this._currentStep=e,this.buffer.recieveStep(e),this.createNextStepTimer())):this._isPlayying=!1},this._currentStep.offset))}play(){this.steps.length>1&&(this._isPlayying=!0,this.createNextStepTimer())}pause(){this._isPlayying=!1,clearTimeout(this.timer)}stop(){this.pause(),this.value=0}},Al=class extends ct{validate(t){return t}afterSetEffect(){}recalculateFromCursor(t){t&&(this.value=this._getValueAtCoordinate(t.x,t.y))}_getValueAtCoordinate(t,e){if(t===void 0||e===void 0)return;const r=t+e*this.parent.width;return this.parent.pixels[r]}},El=class Ws extends _l{constructor(e,r,i,n,s,a,u,h,d,m,f,P,x,_,S,C,j){super(e,r.thermalUrl,i,n,d,s,u,f,P,a,r.visibleUrl),this.group=e,this.service=r,this.width=i,this.height=n,this.timestamp=s,this.frameCount=a,this.duration=u,this.frameInterval=h,this.fps=m,this.min=f,this.max=P,this.bytesize=x,this.averageEmissivity=_,this.averageReflectedKelvins=S,this.firstFrame=C,this.timelineData=j,this.pixels=C.pixels}exportAsPng(){throw new Error("Method not implemented.")}exportThermalDataAsSvg(){throw new Error("Method not implemented.")}postInit(){return this.canvasLayer=new kl(this),this.visibleLayer=new Cl(this,this.visibleUrl),this.cursorLayer=new $l(this),this.listenerLayer=new Pl(this),this.cursorValue=new Al(this,void 0),this.timeline=new Sl(this,0,this.timelineData,this.firstFrame),this.timeline.init(),this}formatId(e){return`instance_${this.group.id}_${e}`}onSetPixels(e){if(this.mountedBaseLayers&&(this.draw(),this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value),this.group.cursorPosition.value)){const r=this.getTemperatureAtPoint(this.group.cursorPosition.value.x,this.group.cursorPosition.value.y);this.cursorLayer.setValue(r)}}getPixelsForHistogram(){return[]}static fromService(e,r,i,n){return new Ws(e,r,i.width,i.height,i.timestamp,i.frameCount,i.duration,i.frameInterval,n.pixels,i.fps,i.min,i.max,i.bytesize,i.averageEmissivity,i.averageReflectedKelvins,n,i.timeline).postInit()}},Gr=class extends js{constructor(e,r,i,n,s){super(n,s);v(this,"id",Math.random());v(this,"baseInfoCache");v(this,"fileName");this.service=e,this.buffer=r,this.parser=i,this.fileName=this.thermalUrl.substring(this.thermalUrl.lastIndexOf("/")+1)}get pool(){return this.service.pool}isSuccess(){return!0}async baseInfo(){if(this.baseInfoCache)return this.baseInfoCache;const e=await this.pool.exec(this.parser.baseInfo,[this.buffer]);return this.baseInfoCache=e,e}getFrameSubset(e){return this.parser.getFrameSubset(this.buffer,e)}async frameData(e){const r=this.getFrameSubset(e);return await this.parser.frameData(r.array,r.dataType)}async createInstance(e){const r=await this.baseInfo(),i=await this.frameData(0),n=El.fromService(e,this,r,i);return e.files.addFile(n),n}},Tl=async t=>{const e=new DataView(t),r=e.getUint16(17,!0),i=e.getUint16(19,!0),n=t.byteLength,s=(re,le)=>{const fe=re.getBigInt64(le,!0),ce=62135596800000n,pe=10000n,J=24n*60n*60n*1000n*pe,me=0x4000000000000000n,Ae=0x8000000000000000n;let Ue=fe&0x3fffffffffffffffn;fe&Ae&&(Ue>me-J&&(Ue-=me),Ue<0&&(Ue+=J));const It=Ue/pe-ce;return Number(It)},a=s(e,5),u=e.getUint8(15);let h=2;u===1&&(h=4);const d=57,m=r*i*h,f=d+m,P=t.slice(25),x=P.byteLength/f,_=re=>{const le=re*f,fe=le+f,ce=P.slice(le,fe),pe=new DataView(ce),J=pe.getFloat32(8,!0),me=pe.getFloat32(12,!0),Ae=s(pe,0),ze=pe.getFloat32(24,!0),Ue=pe.getFloat32(28,!0);return{timestamp:Ae,min:J,max:me,emissivity:ze,reflectedKelvins:Ue}},S=[];for(let re=0;re<x;re++){const le=_(re);S.push(le)}const C={emissivity:0,reflectedKelvins:0};let j=1/0,N=-1/0;const I=[];S.forEach(re=>{C.emissivity=C.emissivity+re.emissivity,C.reflectedKelvins=C.reflectedKelvins+re.reflectedKelvins,re.min<j&&(j=re.min),re.max>N&&(N=re.max),I.push(re.timestamp)});const oe=I[0],Z=[];I.forEach((re,le)=>{const fe=I[le+1];let ce=0;fe===void 0&&(ce=0),ce=fe-re;const pe=re-oe;Z.push({absolute:re,relative:pe,offset:isNaN(ce)?0:ce,index:le})});const ke=S[S.length-1].timestamp-S[0].timestamp,F=ke/x,de=1e3/F;return{width:r,height:i,timestamp:a,bytesize:n,frameCount:x,duration:ke,frameInterval:F,fps:de,timeline:Z,min:j,max:N,averageEmissivity:C.emissivity/S.length,averageReflectedKelvins:C.reflectedKelvins/S.length}},Ml=(t,e)=>{const r=new DataView(t.slice(0,25)),i=r.getUint8(15),n=r.getUint16(17,!0),s=r.getUint16(19,!0),a=i===1?4:2,u=57,h=n*s*a,d=u+h,m=t.slice(25),f=e*d,P=f+d;return{array:m.slice(f,P),dataType:i}},Ll=async(t,e)=>{const r=new DataView(t),i=r.getBigInt64(0,!0),n=62135596800000n,s=10000n,a=24n*60n*60n*1000n*s,u=0x4000000000000000n,h=0x8000000000000000n;let m=i&0x3fffffffffffffffn;i&h&&(m>u-a&&(m-=u),m<0&&(m+=a));const P=m/s-n,x=Number(P),_=r.getFloat32(8,!0),S=r.getFloat32(12,!0),C=r.getFloat32(24,!0),j=r.getFloat32(28,!0),N=t.slice(57);let I=[];if(e===0){const oe=new Uint16Array(N),Z=Math.abs(_-S),ke=65535;oe.forEach(F=>{const de=F/ke;I.push(_+Z*de)})}else e===1&&(I=Array.from(new Float32Array(N)));return{timestamp:x,min:_,max:S,emissivity:C,reflectedKelvins:j,pixels:I}},Rl=async t=>{let e=[];const r=async C=>{const j=new DataView(C.slice(0,25)),N=j.getUint8(15),I=j.getUint16(17,!0),oe=j.getUint16(19,!0),Z=N===1?4:2,ke=57,F=I*oe*Z,de=ke+F,re=C.slice(25),le=re.byteLength/de;let fe=[];for(let ce=0;ce<le;ce++){const J=ce*de+57,me=J+F,Ae=re.slice(J,me);N===0||N===1&&(fe=fe.concat(Array.from(new Float32Array(Ae))))}return fe};(await Promise.all(t.map(C=>r(C)))).forEach(C=>{e=e.concat(C)}),e.sort((C,j)=>C-j);const n=e[0],s=e[e.length-1],a=Math.abs(n-s),u=200,h=a/u,d=[];let m=[...e];for(let C=0;C<u;C++){const j=n+h*C,N=j+h,I=m.findIndex(de=>de>N),Z=m.slice(0,I-1).length,ke=Z/e.length*100,F={from:j,to:N,count:Z,percentage:ke};d.push(F),m=m.slice(I)}const f=[...d].sort((C,j)=>C.percentage-j.percentage),P=f[0].percentage,x=f[f.length-1].percentage,_=Math.abs(P-x);return d.map(C=>({...C,height:C.percentage/_*100}))},Dl=(t,e)=>{const r=e.endsWith("lrc"),n=new TextDecoder().decode(t.slice(0,4))==="LRC\0";return r&&n},jl=[{extension:"lrc",minme:"application/octet-stream"}],Fl={name:"LabIR Recording (.lrc)",description:"Radiometric data saved by thermal cameras TIMI Edu and by measurement systems developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",devices:[{deviceName:"TIMI Edu Infrared Camera",deviceUrl:"https://edu.labir.cz",manufacturer:"TIMI Creation, s.r.o.",manufacturerUrl:"https://timic.cz"}],extensions:jl,is:Dl,baseInfo:Tl,getFrameSubset:Ml,frameData:Ll,registryHistogram:Rl},Hs=Object.freeze(Fl),Nl={LrcParser:Hs},Bs=Object.values(Nl),Wl=(t,e)=>{const r=Bs.find(i=>i.is(t,e));if(r===void 0)throw new Ns(2,e,`No parser found for '${e}'.`);return r};Bs.map(t=>t.extensions);var Hl=class Is{constructor(e,r,i){v(this,"response");this.service=e,this.thermalUrl=r,this.visibleUrl=i}static fromUrl(e,r,i){return new Is(e,r,i)}async load(){return this.response===void 0&&(this.response=this.processResponse(fetch(this.thermalUrl))),this.response}async processResponse(e){const r=await e;if(r.status!==200)return this.pocessTheService(new cn(this.thermalUrl,1,`File '${this.thermalUrl}' was not found.`));const i=await r.arrayBuffer();try{const n=Wl(i,this.thermalUrl);return this.pocessTheService(new Gr(this.service,i,n,this.thermalUrl,this.visibleUrl))}catch(n){if(n instanceof Ns)return this.pocessTheService(cn.fromError(n));throw n}}pocessTheService(e){return e}},Bl=class{constructor(t){v(this,"requestsByUrl",new Map);v(this,"cacheByUrl",new Map);this.manager=t}get pool(){return this.manager.pool}static isolatedInstance(t,e="isolated_registry"){const i=new ai(t).addOrGetRegistry(e);return{service:i.service,registry:i}}get requestsCount(){return this.requestsByUrl.size}fileIsPending(t){return this.requestsByUrl.has(t)}get cachedServicesCount(){return this.cacheByUrl.size}fileIsInCache(t){return this.cacheByUrl.has(t)}async loadFile(t,e){if(this.cacheByUrl.has(t))return this.cacheByUrl.get(t);if(this.requestsByUrl.has(t))return this.requestsByUrl.get(t).load();{const r=Hl.fromUrl(this,t,e);this.requestsByUrl.set(t,r);const i=await r.load();return this.requestsByUrl.delete(t),this.cacheByUrl.set(t,i),i}}},Il=class extends ct{validate(t){return Math.min(Math.max(0,t),1)}afterSetEffect(t){this.parent.forEveryInstance(e=>e.recieveOpacity(t))}imposeOpacity(t){return this.value=t,this.value}},Ul=class extends ct{constructor(){super(...arguments);v(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this.map.clear(),e.forEach(r=>this._map.set(r.url,r))}addFile(e){return this._map.has(e.url)?this._map.get(e.url):(this.value=[...this.value,e],e)}removeAllInstances(){this.forEveryInstance(e=>e.destroySelfAndBelow()),this.value=[]}forEveryInstance(e){this.value.forEach(r=>e(r))}},Vl=class extends Rs{validate(t){return t}afterSetEffect(){}recalculateFromInstances(){return this.value=this._getMinmaxFromInstances(),this.value}_getMinmaxFromInstances(){const t=this.parent.files.value;if(t.length!==0)return t.reduce((e,r)=>r.min<e.min||r.max>e.max?{min:r.min<e.min?r.min:e.min,max:r.max>e.max?r.max:e.max}:e,{min:1/0,max:-1/0})}},ql=class extends ni{constructor(e,r,i,n){super();v(this,"hash",Math.random());v(this,"minmax",new Vl(this,void 0));v(this,"files",new Ul(this,[]));v(this,"cursorPosition",new pl(this,void 0));v(this,"forEveryInstance",e=>{this.files.value.forEach(r=>e(r))});this.registry=e,this.id=r,this.name=i,this.description=n}get pool(){return this.registry.manager.pool}destroySelfAndBelow(){this.removeAllChildren(),this.minmax.reset()}removeAllChildren(){this.files.removeAllInstances()}reset(){this.files.reset(),this.minmax.reset(),this.cursorPosition.reset()}},zl=class extends ct{constructor(){super(...arguments);v(this,"_map",new Map)}get map(){return this._map}validate(e){return e}afterSetEffect(e){this._map.clear(),e.forEach(r=>this._map.set(r.id,r))}addOrGetGroup(e,r,i){if(this._map.has(e))return this._map.get(e);const n=new ql(this.parent,e,r,i);return this._map.set(e,n),this.value.push(n),this.value=[...this.value],n}removeGroup(e){var r;this._map.has(e)&&((r=this._map.get(e))==null||r.destroySelfAndBelow(),this._map.delete(e),this.value=Array.from(this._map.values()))}removeAllGroups(){this.value.forEach(e=>e.destroySelfAndBelow()),this.value=[]}},Yl=class extends ct{constructor(){super(...arguments);v(this,"_resolution",150);v(this,"buffer",new Map);v(this,"bufferPixelsCount",0);v(this,"_bufferResolution",1e3)}get resolution(){return this._resolution}set bufferResolution(e){this._bufferResolution=Math.round(Math.max(e,1e3))}get bufferResolution(){return this._bufferResolution}setResolution(e){this._resolution=Math.round(Math.min(Math.max(e,2),400))}validate(e){return e}afterSetEffect(){}recalculateWithCurrentSetting(){return this.recalculateHistogram(),this.value}recalculateHistogramBufferInWorker(){if(this.parent.minmax.value!==void 0&&this.parent.groups.value.length!==0&&this.parent.minmax.distanceInCelsius!==void 0){const e=this.parent.groups.value.map(r=>r.files.value.map(i=>i.getPixelsForHistogram()));this.parent.pool.exec((r,i,n,s,a)=>{let h=r.reduce((x,_)=>{const S=_.reduce((C,j)=>[...C,...j],[]);return[...x,...S]},[]).sort((x,_)=>x-_);const d=s/a;let m=i+d;const f=new Map;let P=0;for(;m!==!1;){const x=h.findIndex(C=>C>m),_=h.slice(0,x).length;f.set(m-d/2,_),P+=_,h=h.slice(x);const S=m+d;m=S<n?S:!1}return{result:f,resultCount:P}},[e,this.parent.minmax.value.min,this.parent.minmax.value.max,this.parent.minmax.distanceInCelsius,this._bufferResolution]).then(r=>{this.buffer=r.result,this.bufferPixelsCount=r.resultCount,this.recalculateWithCurrentSetting()})}}async recalculateHistogram(){const r=this.parent.groups.value.map(n=>n.files.value).reduce((n,s)=>(n=n.concat(s),n),[]).map(n=>n.service.buffer),i=await this.parent.pool.exec(Hs.registryHistogram,[r]);this.value=i}},Gl=class extends ct{validate(t){return t}afterSetEffect(){}markAsLoading(){this.value=!0}markAsLoaded(){this.value=!1}},Xl=class extends Rs{validate(t){return t}afterSetEffect(){}recalculateFromGroups(){const t=this.parent.groups.value;return this.value=this._getMinmaxFromAllGroups(t),this.value}_getMinmaxFromAllGroups(t){return t.length===0?void 0:t.reduce((r,i)=>i.minmax.value===void 0?r:{min:i.minmax.value.min<r.min?i.minmax.value.min:r.min,max:i.minmax.value.max>r.max?i.minmax.value.max:r.max},{min:1/0,max:-1/0})}},Ql=class extends ni{constructor(e,r,i){super();v(this,"hash",Math.random());v(this,"groups",new zl(this,[]));v(this,"opacity",new Il(this,1));v(this,"minmax",new Xl(this,void 0));v(this,"loading",new Gl(this,!1));v(this,"range",new fl(this,void 0));v(this,"histogram",new Yl(this,[]));v(this,"palette");this.id=e,this.manager=r,this.palette=this.manager.palette,i&&i.histogramResolution!==void 0&&i.histogramResolution>0&&this.histogram.setResolution(i.histogramResolution)}get service(){return this.manager.service}get pool(){return this.manager.pool}forEveryGroup(e){this.groups.value.forEach(e)}forEveryInstance(e){this.forEveryGroup(r=>r.files.forEveryInstance(e))}async loadFullMultipleFiles(e){this.reset(),this.loading.markAsLoading();const r=await Promise.all(Object.entries(e).map(async([i,n])=>{const s=this.groups.addOrGetGroup(i),a=await Promise.all(n.map(u=>this.service.loadFile(u.thermalUrl,u.visibleUrl)));return{group:s,groupFiles:a}}));await Promise.all(r.map(async({group:i,groupFiles:n})=>await Promise.all(n.map(async a=>a instanceof Gr?await a.createInstance(i):!1)))),this.postLoadedProcessing()}async loadFullOneFile(e,r){this.reset();const i=this.groups.addOrGetGroup(r),n=await this.service.loadFile(e.thermalUrl,e.visibleUrl);n instanceof Gr&&await n.createInstance(i),this.loading.markAsLoading(),this.postLoadedProcessing()}async processDroppedFiles(e,r){throw new Error("Method not implemented")}async postLoadedProcessing(){this.forEveryGroup(e=>e.minmax.recalculateFromInstances()),this.minmax.recalculateFromGroups(),this.minmax.value&&this.range.imposeRange({from:this.minmax.value.min,to:this.minmax.value.max}),this.histogram.recalculateHistogramBufferInWorker(),this.loading.markAsLoaded()}reset(){this.forEveryGroup(e=>e.reset()),this.opacity.reset(),this.minmax.reset()}removeAllChildren(){this.groups.removeAllGroups()}destroySelfAndBelow(){this.reset()}destroySelfInTheManager(){this.manager.removeRegistry(this.id)}},ai=class extends ni{constructor(e,r){super();v(this,"id");v(this,"service",new Bl(this));v(this,"registries",{});v(this,"palette",new yl(this,"jet"));v(this,"pool");this.pool=e||Ls.pool(),this.id=Math.random(),r&&r.palette&&this.palette.setPalette(r.palette)}forEveryRegistry(e){Object.values(this.registries).forEach(r=>e(r))}addOrGetRegistry(e,r){return this.registries[e]===void 0&&(this.registries[e]=new Ql(e,this,r)),this.registries[e]}removeRegistry(e){this.registries[e]!==void 0&&(this.registries[e].destroySelfAndBelow(),delete this.registries[e])}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Us=class extends Event{constructor(e,r,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=r,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let $r=class{constructor(e,r,i,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,a)),this.unsubscribe=a},this.host=e,r.context!==void 0){const s=r;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=r,this.callback=i,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Us(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Kl=class{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,r=!1){const i=r||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:i}]of this.subscriptions)r(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,r,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:r});const{disposer:n}=this.subscriptions.get(e);e(this.value,n)}clearCallbacks(){this.subscriptions.clear()}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Zl=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},Xt=class extends Kl{constructor(e,r,i){var n,s;super(r.context!==void 0?r.initialValue:i),this.onContextRequest=a=>{const u=a.composedPath()[0];a.context===this.context&&u!==this.host&&(a.stopPropagation(),this.addCallback(a.callback,u,a.subscribe))},this.onProviderRequest=a=>{const u=a.composedPath()[0];if(a.context!==this.context||u===this.host)return;const h=new Set;for(const[d,{consumerHost:m}]of this.subscriptions)h.has(d)||(h.add(d),m.dispatchEvent(new Us(this.context,d,!0)));a.stopPropagation()},this.host=e,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(s=(n=this.host).addController)==null||s.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Zl(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vs({context:t}){return(e,r)=>{const i=new WeakMap;if(typeof r=="object")return r.addInitializer(function(){i.set(this,new Xt(this,{context:t}))}),{get(){return e.get.call(this)},set(n){var s;return(s=i.get(this))==null||s.setValue(n),e.set.call(this,n)},init(n){var s;return(s=i.get(this))==null||s.setValue(n),n}};{e.constructor.addInitializer(a=>{i.set(a,new Xt(a,{context:t}))});const n=Object.getOwnPropertyDescriptor(e,r);let s;if(n===void 0){const a=new WeakMap;s={get(){return a.get(this)},set(u){i.get(this).setValue(u),a.set(this,u)},configurable:!0,enumerable:!0}}else{const a=n.set;s={...n,set(u){i.get(this).setValue(u),a==null||a.call(this,u)}}}return void Object.defineProperty(e,r,s)}}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zr=globalThis,xn=zr.ShadowRoot&&(zr.ShadyCSS===void 0||zr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_n=Symbol(),ns=new WeakMap;let qs=class{constructor(e,r,i){if(this._$cssResult$=!0,i!==_n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(xn&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=ns.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ns.set(r,e))}return e}toString(){return this.cssText}};const Jl=t=>new qs(typeof t=="string"?t:t+"",void 0,_n),Ie=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1],t[0]);return new qs(r,t,_n)},ec=(t,e)=>{if(xn)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),n=zr.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,t.appendChild(i)}},ss=xn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return Jl(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tc,defineProperty:rc,getOwnPropertyDescriptor:ic,getOwnPropertyNames:nc,getOwnPropertySymbols:sc,getPrototypeOf:ac}=Object,Ot=globalThis,as=Ot.trustedTypes,oc=as?as.emptyScript:"",Ji=Ot.reactiveElementPolyfillSupport,pr=(t,e)=>t,Xr={toAttribute(t,e){switch(e){case Boolean:t=t?oc:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},kn=(t,e)=>!tc(t,e),os={attribute:!0,type:String,converter:Xr,reflect:!1,hasChanged:kn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ot.litPropertyMetadata??(Ot.litPropertyMetadata=new WeakMap);class Yt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=os){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,r);n!==void 0&&rc(this.prototype,e,n)}}static getPropertyDescriptor(e,r,i){const{get:n,set:s}=ic(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return n==null?void 0:n.call(this)},set(a){const u=n==null?void 0:n.call(this);s.call(this,a),this.requestUpdate(e,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??os}static _$Ei(){if(this.hasOwnProperty(pr("elementProperties")))return;const e=ac(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(pr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pr("properties"))){const r=this.properties,i=[...nc(r),...sc(r)];for(const n of i)this.createProperty(n,r[n])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)r.unshift(ss(n))}else e!==void 0&&r.push(ss(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ec(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$EC(e,r){var s;const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){const a=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Xr).toAttribute(r,i.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,r){var s;const i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const a=i.getPropertyOptions(n),u=typeof a.converter=="function"?{fromAttribute:a.converter}:((s=a.converter)==null?void 0:s.fromAttribute)!==void 0?a.converter:Xr;this._$Em=n,this[n]=u.fromAttribute(r,a.type),this._$Em=null}}requestUpdate(e,r,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??kn)(this[e],r))return;this.P(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,r,i){this._$AL.has(e)||this._$AL.set(e,r),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,a]of n)a.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],a)}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdate)==null?void 0:s.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(e){}firstUpdated(e){}}Yt.elementStyles=[],Yt.shadowRootOptions={mode:"open"},Yt[pr("elementProperties")]=new Map,Yt[pr("finalized")]=new Map,Ji==null||Ji({ReactiveElement:Yt}),(Ot.reactiveElementVersions??(Ot.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=globalThis,Qr=fr.trustedTypes,ls=Qr?Qr.createPolicy("lit-html",{createHTML:t=>t}):void 0,zs="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Ys="?"+Ct,lc=`<${Ys}>`,Ft=document,vr=()=>Ft.createComment(""),br=t=>t===null||typeof t!="object"&&typeof t!="function",Gs=Array.isArray,cc=t=>Gs(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",en=`[ 	
\f\r]`,dr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cs=/-->/g,us=/>/g,Lt=RegExp(`>|${en}(?:([^\\s"'>=/]+)(${en}*=${en}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hs=/'/g,ds=/"/g,Xs=/^(?:script|style|textarea|title)$/i,uc=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),H=uc(1),Qt=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),ps=new WeakMap,Dt=Ft.createTreeWalker(Ft,129);function Qs(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ls!==void 0?ls.createHTML(e):e}const hc=(t,e)=>{const r=t.length-1,i=[];let n,s=e===2?"<svg>":"",a=dr;for(let u=0;u<r;u++){const h=t[u];let d,m,f=-1,P=0;for(;P<h.length&&(a.lastIndex=P,m=a.exec(h),m!==null);)P=a.lastIndex,a===dr?m[1]==="!--"?a=cs:m[1]!==void 0?a=us:m[2]!==void 0?(Xs.test(m[2])&&(n=RegExp("</"+m[2],"g")),a=Lt):m[3]!==void 0&&(a=Lt):a===Lt?m[0]===">"?(a=n??dr,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?Lt:m[3]==='"'?ds:hs):a===ds||a===hs?a=Lt:a===cs||a===us?a=dr:(a=Lt,n=void 0);const x=a===Lt&&t[u+1].startsWith("/>")?" ":"";s+=a===dr?h+lc:f>=0?(i.push(d),h.slice(0,f)+zs+h.slice(f)+Ct+x):h+Ct+(f===-2?u:x)}return[Qs(t,s+(t[r]||"<?>")+(e===2?"</svg>":"")),i]};class yr{constructor({strings:e,_$litType$:r},i){let n;this.parts=[];let s=0,a=0;const u=e.length-1,h=this.parts,[d,m]=hc(e,r);if(this.el=yr.createElement(d,i),Dt.currentNode=this.el.content,r===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(n=Dt.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(const f of n.getAttributeNames())if(f.endsWith(zs)){const P=m[a++],x=n.getAttribute(f).split(Ct),_=/([.?@])?(.*)/.exec(P);h.push({type:1,index:s,name:_[2],strings:x,ctor:_[1]==="."?pc:_[1]==="?"?fc:_[1]==="@"?mc:oi}),n.removeAttribute(f)}else f.startsWith(Ct)&&(h.push({type:6,index:s}),n.removeAttribute(f));if(Xs.test(n.tagName)){const f=n.textContent.split(Ct),P=f.length-1;if(P>0){n.textContent=Qr?Qr.emptyScript:"";for(let x=0;x<P;x++)n.append(f[x],vr()),Dt.nextNode(),h.push({type:2,index:++s});n.append(f[P],vr())}}}else if(n.nodeType===8)if(n.data===Ys)h.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(Ct,f+1))!==-1;)h.push({type:7,index:s}),f+=Ct.length-1}s++}}static createElement(e,r){const i=Ft.createElement("template");return i.innerHTML=e,i}}function Kt(t,e,r=t,i){var a,u;if(e===Qt)return e;let n=i!==void 0?(a=r._$Co)==null?void 0:a[i]:r._$Cl;const s=br(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==s&&((u=n==null?void 0:n._$AO)==null||u.call(n,!1),s===void 0?n=void 0:(n=new s(t),n._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=n:r._$Cl=n),n!==void 0&&(e=Kt(t,n._$AS(t,e.values),n,i)),e}class dc{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??Ft).importNode(r,!0);Dt.currentNode=n;let s=Dt.nextNode(),a=0,u=0,h=i[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Pr(s,s.nextSibling,this,e):h.type===1?d=new h.ctor(s,h.name,h.strings,this,e):h.type===6&&(d=new gc(s,this,e)),this._$AV.push(d),h=i[++u]}a!==(h==null?void 0:h.index)&&(s=Dt.nextNode(),a++)}return Dt.currentNode=Ft,n}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Pr{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,n){this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Kt(this,e,r),br(e)?e===_e||e==null||e===""?(this._$AH!==_e&&this._$AR(),this._$AH=_e):e!==this._$AH&&e!==Qt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):cc(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==_e&&br(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ft.createTextNode(e)),this._$AH=e}$(e){var s;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=yr.createElement(Qs(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===n)this._$AH.p(r);else{const a=new dc(n,this),u=a.u(this.options);a.p(r),this.T(u),this._$AH=a}}_$AC(e){let r=ps.get(e.strings);return r===void 0&&ps.set(e.strings,r=new yr(e)),r}k(e){Gs(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const s of e)n===r.length?r.push(i=new Pr(this.S(vr()),this.S(vr()),this,this.options)):i=r[n],i._$AI(s),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class oi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,n,s){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=e,this.name=r,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_e}_$AI(e,r=this,i,n){const s=this.strings;let a=!1;if(s===void 0)e=Kt(this,e,r,0),a=!br(e)||e!==this._$AH&&e!==Qt,a&&(this._$AH=e);else{const u=e;let h,d;for(e=s[0],h=0;h<s.length-1;h++)d=Kt(this,u[i+h],r,h),d===Qt&&(d=this._$AH[h]),a||(a=!br(d)||d!==this._$AH[h]),d===_e?e=_e:e!==_e&&(e+=(d??"")+s[h+1]),this._$AH[h]=d}a&&!n&&this.j(e)}j(e){e===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pc extends oi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_e?void 0:e}}class fc extends oi{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_e)}}class mc extends oi{constructor(e,r,i,n,s){super(e,r,i,n,s),this.type=5}_$AI(e,r=this){if((e=Kt(this,e,r,0)??_e)===Qt)return;const i=this._$AH,n=e===_e&&i!==_e||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==_e&&(i===_e||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class gc{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Kt(this,e)}}const tn=fr.litHtmlPolyfillSupport;tn==null||tn(yr,Pr),(fr.litHtmlVersions??(fr.litHtmlVersions=[])).push("3.1.4");const vc=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let n=i._$litPart$;if(n===void 0){const s=(r==null?void 0:r.renderBefore)??null;i._$litPart$=n=new Pr(e.insertBefore(vr(),s),s,void 0,r??{})}return n._$AI(t),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let it=class extends Yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vc(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Qt}};var $s;it._$litElement$=!0,it.finalized=!0,($s=globalThis.litElementHydrateSupport)==null||$s.call(globalThis,{LitElement:it});const rn=globalThis.litElementPolyfillSupport;rn==null||rn({LitElement:it});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bc={attribute:!0,type:String,converter:Xr,reflect:!1,hasChanged:kn},yc=(t=bc,e,r)=>{const{kind:i,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,t),i==="accessor"){const{name:a}=r;return{set(u){const h=e.get.call(this);e.set.call(this,u),this.requestUpdate(a,h,t)},init(u){return u!==void 0&&this.P(a,void 0,t),u}}}if(i==="setter"){const{name:a}=r;return function(u){const h=this[a];e.call(this,u),this.requestUpdate(a,h,t)}}throw Error("Unsupported decorator location: "+i)};function Ce(t){return(e,r)=>typeof r=="object"?yc(t,e,r):((i,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,a?{...i,wrapped:!0}:i),a?Object.getOwnPropertyDescriptor(n,s):void 0})(t,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(t){return Ce({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wc=(t,e,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,r),r);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function li(t){return(e,r)=>{const{slot:i,selector:n}=t??{},s="slot"+(i?`[name=${i}]`:":not([name])");return wc(e,r,{get(){var h;const a=(h=this.renderRoot)==null?void 0:h.querySelector(s),u=(a==null?void 0:a.assignedElements(t))??[];return n===void 0?u:u.filter(d=>d.matches(n))}})}}class Ks extends it{constructor(){super(),this.hash=(Math.random()*1e4).toFixed(0),this.identificator=[this.getClassName(),wn.version,this.hash].join("__")}log(...e){console.log(this.identificator,...e)}}const Zs="manager",Js="registry",ea="group",ta="group";var xc=Object.defineProperty,_c=Object.getOwnPropertyDescriptor,ra=(t,e,r,i)=>{for(var n=i>1?void 0:i?_c(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&xc(e,r,n),n};let hn=class extends Ks{constructor(){super(...arguments),this.manager=new ai}getClassName(){return"ThermalManagerElement"}render(){return H`
            <slot></slot>
        `}};ra([Vs({context:Zs})],hn.prototype,"manager",2);hn=ra([Oe("thermal-manager")],hn);class $n extends Ks{constructor(){super(...arguments),this._injectedManager=new $r(this,{context:Zs,subscribe:!0})}get manager(){return this._manager}connectedCallback(){super.connectedCallback(),this._injectedManager.value?this._manager=this._injectedManager.value:this._manager=new ai}}var kc=Object.defineProperty,$c=Object.getOwnPropertyDescriptor,ia=(t,e,r,i)=>{for(var n=i>1?void 0:i?$c(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&kc(e,r,n),n};let wr=class extends $n{constructor(){super(...arguments),this.uuid=wr.DEFAULT_NAME,this.registryProvider=new Xt(this,{context:Js,initialValue:void 0})}getClassName(){return"ThermalRegistryElement"}connectedCallback(){super.connectedCallback();const t=this.manager.addOrGetRegistry(this.uuid);this.registryProvider.setValue(t,!0)}render(){return H`
            <slot></slot>
        `}};wr.DEFAULT_NAME="default_registry";ia([Ce({type:String,attribute:!0,reflect:!0})],wr.prototype,"uuid",2);wr=ia([Oe("thermal-registry")],wr);var Pc=Object.defineProperty,Cc=Object.getOwnPropertyDescriptor,na=(t,e,r,i)=>{for(var n=i>1?void 0:i?Cc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Pc(e,r,n),n};class gt extends $n{constructor(){super(...arguments),this._injectedRegistry=new $r(this,{context:Js,subscribe:!0})}get registry(){return this._registry}connectedCallback(){super.connectedCallback(),this._injectedRegistry.value?this._registry=this._injectedRegistry.value:this._registry=this.manager.addOrGetRegistry(this.identificator)}}na([Te()],gt.prototype,"_registry",2);na([Te()],gt.prototype,"registry",1);var Oc=Object.defineProperty,Sc=Object.getOwnPropertyDescriptor,ci=(t,e,r,i)=>{for(var n=i>1?void 0:i?Sc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Oc(e,r,n),n};let Nt=class extends gt{constructor(){super(...arguments),this.uuid=Nt.DEFAULT_NAME,this.groupProvider=new Xt(this,{context:ea,initialValue:void 0})}getClassName(){return"ThermalManagerElement"}connectedCallback(){super.connectedCallback(),this.group=this.registry.groups.addOrGetGroup(this.uuid,this.name,this.description),this.groupProvider.setValue(this.group,!0)}render(){return H`
            <slot></slot>
        `}};Nt.DEFAULT_NAME="default_group";ci([Ce({type:String,attribute:!0,reflect:!0})],Nt.prototype,"uuid",2);ci([Ce({type:String,attribute:!0,reflect:!0})],Nt.prototype,"name",2);ci([Ce({type:String,attribute:!0,reflect:!0})],Nt.prototype,"description",2);Nt=ci([Oe("thermal-group")],Nt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ac=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ec={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tc=t=>(...e)=>({_$litDirective$:t,values:e});class Mc{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const n of r)(i=n._$AO)==null||i.call(n,e,!1),mr(n,e);return!0},Kr=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},sa=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Dc(e)}};function Lc(t){this._$AN!==void 0?(Kr(this),this._$AM=t,sa(this)):this._$AM=t}function Rc(t,e=!1,r=0){const i=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(e)if(Array.isArray(i))for(let s=r;s<i.length;s++)mr(i[s],!1),Kr(i[s]);else i!=null&&(mr(i,!1),Kr(i));else mr(this,t)}const Dc=t=>{t.type==Ec.CHILD&&(t._$AP??(t._$AP=Rc),t._$AQ??(t._$AQ=Lc))};class jc extends Mc{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),sa(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),r&&(mr(this,e),Kr(this))}setValue(e){if(Ac(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=()=>new Fc;class Fc{}const nn=new WeakMap,qe=Tc(class extends jc{render(t){return _e}update(t,[e]){var i;const r=e!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),_e}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let r=nn.get(e);r===void 0&&(r=new WeakMap,nn.set(e,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=nn.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class ui extends gt{constructor(){super(...arguments),this._injectedGroup=new $r(this,{context:ea,subscribe:!0})}get group(){return this._group}connectedCallback(){super.connectedCallback(),this._injectedGroup.value?this._group=this._injectedGroup.value:this._group=this.registry.groups.addOrGetGroup(this.identificator)}}var Nc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,wt=(t,e,r,i)=>{for(var n=i>1?void 0:i?Wc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Nc(e,r,n),n};let ot=class extends ui{constructor(){super(),this.canvasContainer=Be(),this.errors=[],this.fileProvider=new Xt(this,{context:ta,initialValue:void 0})}getClassName(){return"FileContextElement"}connectedCallback(){super.connectedCallback(),this.enqueueInTheRegistry()}disconnectedCallback(){this.file&&this.file.unmountFromDom()}async enqueueInTheRegistry(){if(this.thermal){const t=await this.registry.service.loadFile(this.thermal,this.visible);if(t instanceof cn)this.errors=[t.message];else if(t instanceof Gr){const e=await t.createInstance(this.group);this.log("load file",e),this.file=e,this.fileProvider.setValue(e),this.errors=[],this.registry.postLoadedProcessing()}}}willUpdate(t){super.willUpdate(t),t.has("thermal")||t.has("visible"),t.has("file")&&this.file&&this.file.unmountFromDom()}update(t){var e,r;if(super.update(t),t.has("file")){const i=this.renderRoot.querySelector("#canvas-container");(e=this.file)==null||e.mountToDom(i),(r=this.file)==null||r.draw()}}render(){return H`

            
        ${this.barElements.length>=0?H`
            <div class="bar">
                <slot name="bar"></slot>
            </div> 
        `:""}

        ${this.pre.length>=0?H`
            <div class="pre">
                <slot name="pre"></slot>
            </div> 
        `:""}


        <div part="file-canvas-wrapper">
        
            <div class="container" part="file-canvas-container">
        

            ${this.file===void 0?H`
                <div class="placeholder"><div class="loader"></div></div>
            `:""}
            <div ${qe(this.canvasContainer)} id="canvas-container"></div>

            ${this.errors.length>0?H`
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
                                    ${this.errors.map(t=>H`<li>${t}</li>`)}
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
        
        `}};ot.styles=Ie`

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
    
    `;wt([Ce({type:String,reflect:!0})],ot.prototype,"thermal",2);wt([Ce({type:String,reflect:!0})],ot.prototype,"visible",2);wt([Ce({type:Object})],ot.prototype,"file",2);wt([Te()],ot.prototype,"errors",2);wt([li({slot:"bar",flatten:!0})],ot.prototype,"barItems",2);wt([Te()],ot.prototype,"fileProvider",2);wt([li({slot:"bar",flatten:!0})],ot.prototype,"barElements",2);wt([li({slot:"pre",flatten:!0})],ot.prototype,"pre",2);ot=wt([Oe("thermal-image")],ot);var Hc=Object.defineProperty,Bc=Object.getOwnPropertyDescriptor,aa=(t,e,r,i)=>{for(var n=i>1?void 0:i?Bc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Hc(e,r,n),n};let Zr=class extends it{constructor(){super(),this.dialogRef=Be(),this.closeButtonRef=Be(),this.invokerRef=Be()}setClose(){var t;(t=this.dialogRef.value)==null||t.close(),window.document.body.style.removeProperty("overflow-y"),window.document.body.style.removeProperty("height")}setOpen(){var t;(t=this.dialogRef.value)==null||t.showModal(),window.document.body.style.overflowY="hidden",window.document.body.style.height="100vh"}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),t==="open"&&(r==="true"?this.setOpen():this.setClose())}connectedCallback(){super.connectedCallback()}render(){return H`
            <slot name="invoker" ${qe(this.invokerRef)} @click=${this.setOpen}></slot>
            <dialog ${qe(this.dialogRef)} class="dialog">

                <header class="dialog-header">

                    <h2 class="dialog-title">${this.label}</h2>

                    <button class="dialog-close" ${qe(this.closeButtonRef)} @click=${this.setClose}>

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
        `}};Zr.styles=Ie`

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

        
    
    `;aa([Ce({type:String,reflect:!0})],Zr.prototype,"label",2);Zr=aa([Oe("thermal-dialog")],Zr);var Ic=Object.defineProperty,Uc=Object.getOwnPropertyDescriptor,Pn=(t,e,r,i)=>{for(var n=i>1?void 0:i?Uc(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ic(e,r,n),n};let Wt=class extends it{constructor(){super(...arguments),this.variant="slate",this.size="sm"}render(){return H`
            <button class="${this.variant}">
                <slot></slot>
            </button>
        `}};Wt.VARIANTS=["slate","primary","foreground","background"];Wt.styles=Ie`

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
    
    `;Pn([Ce({type:String,converter:{fromAttribute:t=>Wt.VARIANTS.includes(t)?t:"slate",toAttribute:t=>t}})],Wt.prototype,"variant",2);Pn([Ce({type:String})],Wt.prototype,"size",2);Wt=Pn([Oe("thermal-button")],Wt);const Zt=Math.min,vt=Math.max,Jr=Math.round,St=t=>({x:t,y:t}),Vc={left:"right",right:"left",bottom:"top",top:"bottom"},qc={start:"end",end:"start"};function fs(t,e,r){return vt(t,Zt(e,r))}function Cr(t,e){return typeof t=="function"?t(e):t}function bt(t){return t.split("-")[0]}function hi(t){return t.split("-")[1]}function oa(t){return t==="x"?"y":"x"}function la(t){return t==="y"?"height":"width"}function Or(t){return["top","bottom"].includes(bt(t))?"y":"x"}function ca(t){return oa(Or(t))}function zc(t,e,r){r===void 0&&(r=!1);const i=hi(t),n=ca(t),s=la(n);let a=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(a=ei(a)),[a,ei(a)]}function Yc(t){const e=ei(t);return[dn(t),e,dn(e)]}function dn(t){return t.replace(/start|end/g,e=>qc[e])}function Gc(t,e,r){const i=["left","right"],n=["right","left"],s=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return r?e?n:i:e?i:n;case"left":case"right":return e?s:a;default:return[]}}function Xc(t,e,r,i){const n=hi(t);let s=Gc(bt(t),r==="start",i);return n&&(s=s.map(a=>a+"-"+n),e&&(s=s.concat(s.map(dn)))),s}function ei(t){return t.replace(/left|right|bottom|top/g,e=>Vc[e])}function Qc(t){return{top:0,right:0,bottom:0,left:0,...t}}function ua(t){return typeof t!="number"?Qc(t):{top:t,right:t,bottom:t,left:t}}function Jt(t){const{x:e,y:r,width:i,height:n}=t;return{width:i,height:n,top:r,left:e,right:e+i,bottom:r+n,x:e,y:r}}function ms(t,e,r){let{reference:i,floating:n}=t;const s=Or(e),a=ca(e),u=la(a),h=bt(e),d=s==="y",m=i.x+i.width/2-n.width/2,f=i.y+i.height/2-n.height/2,P=i[u]/2-n[u]/2;let x;switch(h){case"top":x={x:m,y:i.y-n.height};break;case"bottom":x={x:m,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:f};break;case"left":x={x:i.x-n.width,y:f};break;default:x={x:i.x,y:i.y}}switch(hi(e)){case"start":x[a]-=P*(r&&d?-1:1);break;case"end":x[a]+=P*(r&&d?-1:1);break}return x}const Kc=async(t,e,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:s=[],platform:a}=r,u=s.filter(Boolean),h=await(a.isRTL==null?void 0:a.isRTL(e));let d=await a.getElementRects({reference:t,floating:e,strategy:n}),{x:m,y:f}=ms(d,i,h),P=i,x={},_=0;for(let S=0;S<u.length;S++){const{name:C,fn:j}=u[S],{x:N,y:I,data:oe,reset:Z}=await j({x:m,y:f,initialPlacement:i,placement:P,strategy:n,middlewareData:x,rects:d,platform:a,elements:{reference:t,floating:e}});m=N??m,f=I??f,x={...x,[C]:{...x[C],...oe}},Z&&_<=50&&(_++,typeof Z=="object"&&(Z.placement&&(P=Z.placement),Z.rects&&(d=Z.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:n}):Z.rects),{x:m,y:f}=ms(d,P,h)),S=-1)}return{x:m,y:f,placement:P,strategy:n,middlewareData:x}};async function ha(t,e){var r;e===void 0&&(e={});const{x:i,y:n,platform:s,rects:a,elements:u,strategy:h}=t,{boundary:d="clippingAncestors",rootBoundary:m="viewport",elementContext:f="floating",altBoundary:P=!1,padding:x=0}=Cr(e,t),_=ua(x),C=u[P?f==="floating"?"reference":"floating":f],j=Jt(await s.getClippingRect({element:(r=await(s.isElement==null?void 0:s.isElement(C)))==null||r?C:C.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(u.floating)),boundary:d,rootBoundary:m,strategy:h})),N=f==="floating"?{x:i,y:n,width:a.floating.width,height:a.floating.height}:a.reference,I=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u.floating)),oe=await(s.isElement==null?void 0:s.isElement(I))?await(s.getScale==null?void 0:s.getScale(I))||{x:1,y:1}:{x:1,y:1},Z=Jt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:u,rect:N,offsetParent:I,strategy:h}):N);return{top:(j.top-Z.top+_.top)/oe.y,bottom:(Z.bottom-j.bottom+_.bottom)/oe.y,left:(j.left-Z.left+_.left)/oe.x,right:(Z.right-j.right+_.right)/oe.x}}const Zc=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var r,i;const{placement:n,middlewareData:s,rects:a,initialPlacement:u,platform:h,elements:d}=e,{mainAxis:m=!0,crossAxis:f=!0,fallbackPlacements:P,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:S=!0,...C}=Cr(t,e);if((r=s.arrow)!=null&&r.alignmentOffset)return{};const j=bt(n),N=bt(u)===u,I=await(h.isRTL==null?void 0:h.isRTL(d.floating)),oe=P||(N||!S?[ei(u)]:Yc(u));!P&&_!=="none"&&oe.push(...Xc(u,S,_,I));const Z=[u,...oe],ke=await ha(e,C),F=[];let de=((i=s.flip)==null?void 0:i.overflows)||[];if(m&&F.push(ke[j]),f){const ce=zc(n,a,I);F.push(ke[ce[0]],ke[ce[1]])}if(de=[...de,{placement:n,overflows:F}],!F.every(ce=>ce<=0)){var re,le;const ce=(((re=s.flip)==null?void 0:re.index)||0)+1,pe=Z[ce];if(pe)return{data:{index:ce,overflows:de},reset:{placement:pe}};let J=(le=de.filter(me=>me.overflows[0]<=0).sort((me,Ae)=>me.overflows[1]-Ae.overflows[1])[0])==null?void 0:le.placement;if(!J)switch(x){case"bestFit":{var fe;const me=(fe=de.map(Ae=>[Ae.placement,Ae.overflows.filter(ze=>ze>0).reduce((ze,Ue)=>ze+Ue,0)]).sort((Ae,ze)=>Ae[1]-ze[1])[0])==null?void 0:fe[0];me&&(J=me);break}case"initialPlacement":J=u;break}if(n!==J)return{reset:{placement:J}}}return{}}}};function da(t){const e=Zt(...t.map(s=>s.left)),r=Zt(...t.map(s=>s.top)),i=vt(...t.map(s=>s.right)),n=vt(...t.map(s=>s.bottom));return{x:e,y:r,width:i-e,height:n-r}}function Jc(t){const e=t.slice().sort((n,s)=>n.y-s.y),r=[];let i=null;for(let n=0;n<e.length;n++){const s=e[n];!i||s.y-i.y>i.height/2?r.push([s]):r[r.length-1].push(s),i=s}return r.map(n=>Jt(da(n)))}const eu=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:r,elements:i,rects:n,platform:s,strategy:a}=e,{padding:u=2,x:h,y:d}=Cr(t,e),m=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(i.reference))||[]),f=Jc(m),P=Jt(da(m)),x=ua(u);function _(){if(f.length===2&&f[0].left>f[1].right&&h!=null&&d!=null)return f.find(C=>h>C.left-x.left&&h<C.right+x.right&&d>C.top-x.top&&d<C.bottom+x.bottom)||P;if(f.length>=2){if(Or(r)==="y"){const le=f[0],fe=f[f.length-1],ce=bt(r)==="top",pe=le.top,J=fe.bottom,me=ce?le.left:fe.left,Ae=ce?le.right:fe.right,ze=Ae-me,Ue=J-pe;return{top:pe,bottom:J,left:me,right:Ae,width:ze,height:Ue,x:me,y:pe}}const C=bt(r)==="left",j=vt(...f.map(le=>le.right)),N=Zt(...f.map(le=>le.left)),I=f.filter(le=>C?le.left===N:le.right===j),oe=I[0].top,Z=I[I.length-1].bottom,ke=N,F=j,de=F-ke,re=Z-oe;return{top:oe,bottom:Z,left:ke,right:F,width:de,height:re,x:ke,y:oe}}return P}const S=await s.getElementRects({reference:{getBoundingClientRect:_},floating:i.floating,strategy:a});return n.reference.x!==S.reference.x||n.reference.y!==S.reference.y||n.reference.width!==S.reference.width||n.reference.height!==S.reference.height?{reset:{rects:S}}:{}}}};async function tu(t,e){const{placement:r,platform:i,elements:n}=t,s=await(i.isRTL==null?void 0:i.isRTL(n.floating)),a=bt(r),u=hi(r),h=Or(r)==="y",d=["left","top"].includes(a)?-1:1,m=s&&h?-1:1,f=Cr(e,t);let{mainAxis:P,crossAxis:x,alignmentAxis:_}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return u&&typeof _=="number"&&(x=u==="end"?_*-1:_),h?{x:x*m,y:P*d}:{x:P*d,y:x*m}}const ru=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var r,i;const{x:n,y:s,placement:a,middlewareData:u}=e,h=await tu(e,t);return a===((r=u.offset)==null?void 0:r.placement)&&(i=u.arrow)!=null&&i.alignmentOffset?{}:{x:n+h.x,y:s+h.y,data:{...h,placement:a}}}}},iu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:r,y:i,placement:n}=e,{mainAxis:s=!0,crossAxis:a=!1,limiter:u={fn:C=>{let{x:j,y:N}=C;return{x:j,y:N}}},...h}=Cr(t,e),d={x:r,y:i},m=await ha(e,h),f=Or(bt(n)),P=oa(f);let x=d[P],_=d[f];if(s){const C=P==="y"?"top":"left",j=P==="y"?"bottom":"right",N=x+m[C],I=x-m[j];x=fs(N,x,I)}if(a){const C=f==="y"?"top":"left",j=f==="y"?"bottom":"right",N=_+m[C],I=_-m[j];_=fs(N,_,I)}const S=u.fn({...e,[P]:x,[f]:_});return{...S,data:{x:S.x-r,y:S.y-i}}}}};function nr(t){return pa(t)?(t.nodeName||"").toLowerCase():"#document"}function et(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Et(t){var e;return(e=(pa(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pa(t){return t instanceof Node||t instanceof et(t).Node}function pt(t){return t instanceof Element||t instanceof et(t).Element}function ft(t){return t instanceof HTMLElement||t instanceof et(t).HTMLElement}function gs(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof et(t).ShadowRoot}function Sr(t){const{overflow:e,overflowX:r,overflowY:i,display:n}=lt(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+r)&&!["inline","contents"].includes(n)}function nu(t){return["table","td","th"].includes(nr(t))}function di(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Cn(t){const e=On(),r=lt(t);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!e&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!e&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function su(t){let e=At(t);for(;ft(e)&&!er(e);){if(di(e))return null;if(Cn(e))return e;e=At(e)}return null}function On(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function er(t){return["html","body","#document"].includes(nr(t))}function lt(t){return et(t).getComputedStyle(t)}function pi(t){return pt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function At(t){if(nr(t)==="html")return t;const e=t.assignedSlot||t.parentNode||gs(t)&&t.host||Et(t);return gs(e)?e.host:e}function fa(t){const e=At(t);return er(e)?t.ownerDocument?t.ownerDocument.body:t.body:ft(e)&&Sr(e)?e:fa(e)}function pn(t,e,r){var i;e===void 0&&(e=[]),r===void 0&&(r=!0);const n=fa(t),s=n===((i=t.ownerDocument)==null?void 0:i.body),a=et(n);return s?e.concat(a,a.visualViewport||[],Sr(n)?n:[],a.frameElement&&r?pn(a.frameElement):[]):e.concat(n,pn(n,[],r))}function ma(t){const e=lt(t);let r=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const n=ft(t),s=n?t.offsetWidth:r,a=n?t.offsetHeight:i,u=Jr(r)!==s||Jr(i)!==a;return u&&(r=s,i=a),{width:r,height:i,$:u}}function ga(t){return pt(t)?t:t.contextElement}function Gt(t){const e=ga(t);if(!ft(e))return St(1);const r=e.getBoundingClientRect(),{width:i,height:n,$:s}=ma(e);let a=(s?Jr(r.width):r.width)/i,u=(s?Jr(r.height):r.height)/n;return(!a||!Number.isFinite(a))&&(a=1),(!u||!Number.isFinite(u))&&(u=1),{x:a,y:u}}const au=St(0);function va(t){const e=et(t);return!On()||!e.visualViewport?au:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ou(t,e,r){return e===void 0&&(e=!1),!r||e&&r!==et(t)?!1:e}function xr(t,e,r,i){e===void 0&&(e=!1),r===void 0&&(r=!1);const n=t.getBoundingClientRect(),s=ga(t);let a=St(1);e&&(i?pt(i)&&(a=Gt(i)):a=Gt(t));const u=ou(s,r,i)?va(s):St(0);let h=(n.left+u.x)/a.x,d=(n.top+u.y)/a.y,m=n.width/a.x,f=n.height/a.y;if(s){const P=et(s),x=i&&pt(i)?et(i):i;let _=P,S=_.frameElement;for(;S&&i&&x!==_;){const C=Gt(S),j=S.getBoundingClientRect(),N=lt(S),I=j.left+(S.clientLeft+parseFloat(N.paddingLeft))*C.x,oe=j.top+(S.clientTop+parseFloat(N.paddingTop))*C.y;h*=C.x,d*=C.y,m*=C.x,f*=C.y,h+=I,d+=oe,_=et(S),S=_.frameElement}}return Jt({width:m,height:f,x:h,y:d})}function lu(t){let{elements:e,rect:r,offsetParent:i,strategy:n}=t;const s=n==="fixed",a=Et(i),u=e?di(e.floating):!1;if(i===a||u&&s)return r;let h={scrollLeft:0,scrollTop:0},d=St(1);const m=St(0),f=ft(i);if((f||!f&&!s)&&((nr(i)!=="body"||Sr(a))&&(h=pi(i)),ft(i))){const P=xr(i);d=Gt(i),m.x=P.x+i.clientLeft,m.y=P.y+i.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-h.scrollLeft*d.x+m.x,y:r.y*d.y-h.scrollTop*d.y+m.y}}function cu(t){return Array.from(t.getClientRects())}function ba(t){return xr(Et(t)).left+pi(t).scrollLeft}function uu(t){const e=Et(t),r=pi(t),i=t.ownerDocument.body,n=vt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=vt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let a=-r.scrollLeft+ba(t);const u=-r.scrollTop;return lt(i).direction==="rtl"&&(a+=vt(e.clientWidth,i.clientWidth)-n),{width:n,height:s,x:a,y:u}}function hu(t,e){const r=et(t),i=Et(t),n=r.visualViewport;let s=i.clientWidth,a=i.clientHeight,u=0,h=0;if(n){s=n.width,a=n.height;const d=On();(!d||d&&e==="fixed")&&(u=n.offsetLeft,h=n.offsetTop)}return{width:s,height:a,x:u,y:h}}function du(t,e){const r=xr(t,!0,e==="fixed"),i=r.top+t.clientTop,n=r.left+t.clientLeft,s=ft(t)?Gt(t):St(1),a=t.clientWidth*s.x,u=t.clientHeight*s.y,h=n*s.x,d=i*s.y;return{width:a,height:u,x:h,y:d}}function vs(t,e,r){let i;if(e==="viewport")i=hu(t,r);else if(e==="document")i=uu(Et(t));else if(pt(e))i=du(e,r);else{const n=va(t);i={...e,x:e.x-n.x,y:e.y-n.y}}return Jt(i)}function ya(t,e){const r=At(t);return r===e||!pt(r)||er(r)?!1:lt(r).position==="fixed"||ya(r,e)}function pu(t,e){const r=e.get(t);if(r)return r;let i=pn(t,[],!1).filter(u=>pt(u)&&nr(u)!=="body"),n=null;const s=lt(t).position==="fixed";let a=s?At(t):t;for(;pt(a)&&!er(a);){const u=lt(a),h=Cn(a);!h&&u.position==="fixed"&&(n=null),(s?!h&&!n:!h&&u.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Sr(a)&&!h&&ya(t,a))?i=i.filter(m=>m!==a):n=u,a=At(a)}return e.set(t,i),i}function fu(t){let{element:e,boundary:r,rootBoundary:i,strategy:n}=t;const a=[...r==="clippingAncestors"?di(e)?[]:pu(e,this._c):[].concat(r),i],u=a[0],h=a.reduce((d,m)=>{const f=vs(e,m,n);return d.top=vt(f.top,d.top),d.right=Zt(f.right,d.right),d.bottom=Zt(f.bottom,d.bottom),d.left=vt(f.left,d.left),d},vs(e,u,n));return{width:h.right-h.left,height:h.bottom-h.top,x:h.left,y:h.top}}function mu(t){const{width:e,height:r}=ma(t);return{width:e,height:r}}function gu(t,e,r){const i=ft(e),n=Et(e),s=r==="fixed",a=xr(t,!0,s,e);let u={scrollLeft:0,scrollTop:0};const h=St(0);if(i||!i&&!s)if((nr(e)!=="body"||Sr(n))&&(u=pi(e)),i){const f=xr(e,!0,s,e);h.x=f.x+e.clientLeft,h.y=f.y+e.clientTop}else n&&(h.x=ba(n));const d=a.left+u.scrollLeft-h.x,m=a.top+u.scrollTop-h.y;return{x:d,y:m,width:a.width,height:a.height}}function sn(t){return lt(t).position==="static"}function bs(t,e){return!ft(t)||lt(t).position==="fixed"?null:e?e(t):t.offsetParent}function wa(t,e){const r=et(t);if(di(t))return r;if(!ft(t)){let n=At(t);for(;n&&!er(n);){if(pt(n)&&!sn(n))return n;n=At(n)}return r}let i=bs(t,e);for(;i&&nu(i)&&sn(i);)i=bs(i,e);return i&&er(i)&&sn(i)&&!Cn(i)?r:i||su(t)||r}const vu=async function(t){const e=this.getOffsetParent||wa,r=this.getDimensions,i=await r(t.floating);return{reference:gu(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function bu(t){return lt(t).direction==="rtl"}const yu={convertOffsetParentRelativeRectToViewportRelativeRect:lu,getDocumentElement:Et,getClippingRect:fu,getOffsetParent:wa,getElementRects:vu,getClientRects:cu,getDimensions:mu,getScale:Gt,isElement:pt,isRTL:bu},wu=ru,xu=iu,_u=Zc,ku=eu,$u=(t,e,r)=>{const i=new Map,n={platform:yu,...r},s={...n.platform,_c:i};return Kc(t,e,{...n,platform:s})};var Pu=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,fi=(t,e,r,i)=>{for(var n=i>1?void 0:i?Cu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Pu(e,r,n),n};let tr=class extends it{constructor(){super(...arguments),this.dropdownRef=Be(),this.invokerRef=Be(),this.optionsRef=Be(),this.open="close",this.variant="slate"}setOpen(){this.open="open"}setClose(){this.open="close"}toggle(){this.open==="open"?this.open="close":this.open="open"}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}placeOptions(){$u(this.invokerRef.value,this.optionsRef.value,{middleware:[wu(2),_u(),ku(),xu()],placement:"bottom-start",strategy:"fixed"}).then(({x:t,y:e})=>{this.optionsRef.value&&(this.optionsRef.value.style.left=`${t}px`,this.optionsRef.value.style.top=`${e}px`)})}updated(t){super.updated(t),this.placeOptions()}firstUpdated(t){super.firstUpdated(t),this._options.forEach(e=>{e.childNodes.forEach(r=>r.addEventListener("click",()=>{this.setClose()}))})}attributeChangedCallback(t,e,r){var i,n,s,a;t==="open"&&(r==="open"?((i=this.optionsRef.value)==null||i.classList.add("dropdown-options__show"),(n=this.dropdownRef.value)==null||n.classList.add("dropdown__open")):((s=this.optionsRef.value)==null||s.classList.remove("dropdown-options__show"),(a=this.dropdownRef.value)==null||a.classList.remove("dropdown__open")))}render(){return H`

            <div class="dropdown" ${qe(this.dropdownRef)}>

                <thermal-button class="dropdown-invoker" ${qe(this.invokerRef)} @click=${this.toggle.bind(this)} variant="${this.variant}">
                    <div class="dropdown-invoker-wrapper">
                        <slot name="invoker">
                            <div>Dropdown</div>
                        </slot>
                        <div class="dropdown-invoker-wrapper-icon">

                        ${this.open==="close"?H`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>`:H`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>`}
                        </div>
                    </div>
                </thermal-button>

                <div class="clicker" @click=${this.setClose}></div>
                <div class="dropdown-options" ${qe(this.optionsRef)} >
                    <slot name="option"></slot>
                </div>
            
            </div>
        
        `}};tr.styles=Ie`

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
    
    `;fi([li({slot:"option"})],tr.prototype,"_options",2);fi([Ce({type:String,reflect:!0})],tr.prototype,"open",2);fi([Ce({type:String,reflect:!0})],tr.prototype,"variant",2);tr=fi([Oe("thermal-dropdown")],tr);var Ou=Object.defineProperty,Su=Object.getOwnPropertyDescriptor,mi=(t,e,r,i)=>{for(var n=i>1?void 0:i?Su(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ou(e,r,n),n};let rr=class extends it{constructor(){super(...arguments),this.collapsed=!1,this.drawerRef=Be(),this.contentRef=Be(),this.rulerContentRef=Be()}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated(t),this.observer=new ResizeObserver(e=>{if(this.collapsed===!1){const i=this.contentRef.value.clientWidth;this.lastContentWidth=i}const r=e[0];this.lastContentWidth<r.contentRect.width?this.collapsed&&(this.collapsed=!1):this.collapsed===!1&&(this.collapsed=!0)}),this.observer.observe(this.drawerRef.value)}render(){return H`

            <div class="container">

                <div class="ruler">
                    <div class="ruler-item ruler-item__current" ${qe(this.drawerRef)}></div>
                    <div class="ruler-item ruler-item__content" ${qe(this.rulerContentRef)} style="width: ${this.lastContentWidth+1}px"></div>
                </div>
                <div class="content" ${qe(this.contentRef)}>

                    ${this.collapsed===!1?H`
                        <slot></slot>    
                    `:_e}
                
                </div>

            </div>

            ${this.collapsed?H`
                <thermal-dropdown>
                    <div slot="invoker" class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </div>

                    <slot slot="option"></slot>
                </thermal-dropdown>
            `:_e}
        
        `}};rr.styles=Ie`

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

    `;mi([Te()],rr.prototype,"collapsed",2);mi([Te()],rr.prototype,"lastContentWidth",2);mi([Te()],rr.prototype,"drawerRef",2);rr=mi([Oe("thermal-bar")],rr);var Au=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,xa=(t,e,r,i)=>{for(var n=i>1?void 0:i?Eu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Au(e,r,n),n};let ti=class extends $n{getClassName(){return"PaletteDropdownElement"}connectedCallback(){super.connectedCallback(),this.value=this.manager.palette.value;const t=e=>{if(typeof e=="string"){const r=e;this.value=r}};this.manager.palette.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.manager.palette.removeListener(this.identificator)}onSelect(t){this.manager.palette.setPalette(t),this.value=t}paletteTemplate(t,e){return H`

            <div class="button ${e}">
                <span class="palette" style="background:${t.gradient}"></span>
                <!-- <span>${t.name}</span> -->
            </div>
        
        `}render(){return H`

            <thermal-dropdown variant="foreground">

                <div slot="invoker" class="button">
                    <span class="palette" style="background:${this.manager.palette.currentPalette.gradient}"></span>
                    <!-- <span>${this.manager.palette.currentPalette.name}</span> -->
                </div>

                ${Object.entries(Ds).map(([t,e])=>H`
                    <div slot="option"><thermal-button @click=${()=>this.onSelect(t)} variant="${e.name===this.manager.palette.currentPalette.name?"background":"slate"}">
                        ${this.paletteTemplate(e)}
                    </thermal-button></div>
                `)}
            
            </thermal-dropdown>

        `}};ti.styles=Ie`

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

    `;xa([Ce({type:String,reflect:!0,attribute:!0})],ti.prototype,"value",2);ti=xa([Oe("thermal-palette")],ti);var Tu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,_a=(t,e,r,i)=>{for(var n=i>1?void 0:i?Mu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Tu(e,r,n),n};let ri=class extends gt{getClassName(){return"OpacityRangeElement"}connectedCallback(){super.connectedCallback(),this.value=this.registry.opacity.value;const t=e=>{this.value!==e&&(this.value=e,this.renderRoot.querySelector("#handler").value=e.toString())};this.registry.opacity.addListener(this.identificator,t.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.registry.opacity.removeListener(this.identificator)}onInputChange(t){const e=parseFloat(t.target.value);this.value=e,this.registry.opacity.imposeOpacity(e)}updated(t){super.updated(t),t.has("value")&&parseFloat(t.get("value"))!==this.value&&this.registry.opacity.imposeOpacity(this.value)}render(){return H`
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
        `}};ri.styles=Ie`

        .thermal-opacity-handler {
            accent-color: var( --thermal-primary );
        }
    
    `;_a([Ce({type:Number,reflect:!0,attribute:!0})],ri.prototype,"value",2);ri=_a([Oe("thermal-opacity")],ri);var Lu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,Du=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ru(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Lu(e,r,n),n};let ys=class extends gt{getClassName(){return"RegistrySetAutoRangeElement"}doAction(){this.registry.range.applyAuto()}render(){return H`
            <thermal-button @click=${this.doAction}>Autimatic range</thermal-button>
        `}};ys=Du([Oe("thermal-range-auto")],ys);var ju=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,Nu=(t,e,r,i)=>{for(var n=i>1?void 0:i?Fu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ju(e,r,n),n};let ws=class extends gt{getClassName(){return"RegistrySetMinmaxRangeButton"}doAction(){this.registry.range.applyMinmax()}render(){return H`
            <thermal-button @click=${this.doAction}>Maximal range</thermal-button>
        `}};ws=Nu([Oe("thermal-range-minmax")],ws);var Wu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,gi=(t,e,r,i)=>{for(var n=i>1?void 0:i?Hu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Wu(e,r,n),n};class xt extends ui{constructor(){super(...arguments),this._injectedFile=new $r(this,{context:ta,subscribe:!0}),this.ready=!1}get file(){return this._file}connectedCallback(){super.connectedCallback(),this._injectedFile.value&&(this._file=this._injectedFile.value)}update(e){return super.update(e),!0}}gi([Te()],xt.prototype,"_injectedFile",2);gi([Te()],xt.prototype,"_file",2);gi([Te()],xt.prototype,"file",1);gi([Te()],xt.prototype,"ready",2);var Bu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,Uu=(t,e,r,i)=>{for(var n=i>1?void 0:i?Iu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Bu(e,r,n),n};let fn=class extends xt{getClassName(){return"FileInfoButton"}connectedCallback(){super.connectedCallback()}onFileLoaded(){}render(){var t,e,r,i,n,s,a,u,h,d,m,f,P;return H`
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
                                ${((r=this._injectedFile.value)==null?void 0:r.url)&&H`
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
                            ${((n=this._injectedFile.value)==null?void 0:n.visibleUrl)&&H`
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
                            <td>${((s=this._injectedFile.value)==null?void 0:s.timestamp)&&xl.human(this._injectedFile.value.timestamp)}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>${(a=this._injectedFile.value)==null?void 0:a.width} x ${(u=this._injectedFile.value)==null?void 0:u.height} px <small>(${(h=this._injectedFile.value)==null?void 0:h.pixels.length} pixels)</small></td>
                        </tr>
                        <tr>
                            <td>Signature</td>
                            <td>${(d=this._injectedFile.value)==null?void 0:d.signature}</td>
                        </tr>
                        <tr>
                            <td>Frames</td>
                            <td>${(m=this._injectedFile.value)==null?void 0:m.frames.length}</td>
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
                            <td>${(P=this._injectedFile.value)==null?void 0:P.dataTypeHuman}</td>
                        </tr>
                    </table>
                </div>
            </thermal-dialog-component>
        `}};fn.styles=Ie`

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
    
    `;fn=Uu([Oe("thermal-file-info")],fn);var Vu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,zu=(t,e,r,i)=>{for(var n=i>1?void 0:i?qu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Vu(e,r,n),n};let mn=class extends it{render(){return H`
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
                        <p>version ${wn.version}</p>
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
        `}};mn.styles=Ie`

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
    
    `;mn=zu([Oe("thermal-app-info")],mn);var Yu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,Xu=(t,e,r,i)=>{for(var n=i>1?void 0:i?Gu(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Yu(e,r,n),n};let gn=class extends xt{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return H`

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

        
        `}};gn.styles=Ie`

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
    
    `;gn=Xu([Oe("thermal-file-name")],gn);var Qu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Zu=(t,e,r,i)=>{for(var n=i>1?void 0:i?Ku(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Qu(e,r,n),n};let vn=class extends xt{getClassName(){return"FileNameButton"}connectedCallback(){super.connectedCallback()}render(){return H`

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

        
        `}};vn.styles=Ie`

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
    
    `;vn=Zu([Oe("thermal-file-download")],vn);(()=>{var t=Object.defineProperty,e=Math.pow,r=(o,c,g)=>c in o?t(o,c,{enumerable:!0,configurable:!0,writable:!0,value:g}):o[c]=g,i=(o,c,g)=>(r(o,typeof c!="symbol"?c+"":c,g),g),n=(o,c)=>` ${c&&c.length>0?c.map(g=>`<link rel="stylesheet" href="${g}" />`).join(""):""} <style> ${o} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,s=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",u="pointers-min-distance",h="pointers-max-distance",d="range-dragging",m="data",f="min",P="max",x="step",_="round",S="type",C="theme",j="rtl",N="btt",I="disabled",oe="keyboard-disabled",Z="mousewheel-disabled",ke="slider-width",F="slider-height",de="slider-radius",re="slider-bg",le="slider-bg-hover",fe="slider-bg-fill",ce="pointer-width",pe="pointer-height",J="pointer-radius",me="pointer-bg",Ae="pointer-bg-hover",ze="pointer-bg-focus",Ue="pointer-shadow",sr="pointer-shadow-hover",It="pointer-shadow-focus",Er="pointer-border",Tr="pointer-border-hover",yi="pointer-border-focus",Mr="animate-onclick",wi="css-links",Ze="vertical",_t="horizontal",ar=(o,c,g,p,T)=>{let V=c-o;return V===0?g:(p-g)*(T-o)/V+g},st=o=>!isNaN(parseFloat(o))&&isFinite(o),Ee=(o,c)=>st(o)?Number(o):c,Lr=(o,c)=>c===0?0:Math.round(o/c)*c,xi=(o,c=1/0)=>{if(c===1/0)return o;let g=e(10,c);return Math.round(o*g)/g},Ne=o=>o==null?!1:typeof o=="boolean"?o:o.trim().toLowerCase()==="true",_i=(o,c)=>{o.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},ki=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},$i=(o,c)=>{o.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},Pi=(o,c)=>{o.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},Ci=(o,c)=>{if(!c||c.length<=0)return;let g=c.map(T=>st(T)?Ee(T,T):T),p={values:g||[]};p.value=g[0],p.value0=g[0],p.value1=g[0];for(let T=1;T<g.length;T++)p[`value${T+1}`]=g[T];o.dispatchEvent(new CustomEvent("change",{detail:p}))},w=(o,c,g)=>{let p=0,T,V,K,M,L=!1,ee=(z,Pe,He,We,Me,Le)=>{let Xe=p;He!==void 0&&z>He&&(z=He),Pe!==void 0&&z<Pe&&(z=Pe),p=z;let Qe=p;return(We===Ze&&Le||We===_t&&Me)&&(Qe=100-Qe),We===Ze?c.style.top=`${Qe}%`:c.style.left=`${Qe}%`,Xe!==p},se=z=>z===c||c.contains(z),W=(z,Pe,He,We)=>{T=z,V=Pe,K=He,M=We},we=z=>{L=z,c.classList.toggle("disabled",L),L?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},rt=(z,Pe)=>{Pe==null?c.removeAttribute(z):c.setAttribute(z,Pe)},Ye=z=>c.getAttribute(z),q=z=>{if(!L){switch(z.key){case"ArrowLeft":{z.preventDefault(),typeof T=="function"&&T(g);break}case"ArrowRight":{z.preventDefault(),typeof V=="function"&&V(g);break}case"ArrowUp":{z.preventDefault(),typeof K=="function"&&K(g);break}case"ArrowDown":{z.preventDefault(),typeof M=="function"&&M(g);break}}Pi(o,z)}},te=()=>{L||_i(o,c)};return c.className=`pointer pointer-${g}`,c.addEventListener("keydown",q),c.addEventListener("click",te),{$pointer:c,get percent(){return p},get disabled(){return L},set disabled(z){we(z)},updatePosition:ee,isClicked:se,setCallbacks:W,setAttr:rt,getAttr:Ye,destroy:()=>{c.removeEventListener("keydown",q),c.removeEventListener("click",te),c.remove()}}},O=o=>{if(o==null)return;if(Array.isArray(o))return o;if(o.trim()==="")return;let c=o.split(","),g=[],p=!0;for(let T=0;T<c.length;T++){let V=c[T].trim();V!==""&&(g.push(V),st(V)||(p=!1))}return p?g.map(T=>Number(T)):g},A=(o,c)=>c?c.findIndex(g=>g===o||g.toString().trim()===o.toString().trim()):-1,E=o=>({updatePosition:(c,g,p,T)=>{if(g.length<=0)return;let V=g.length===1,K=g[0],M=g[g.length-1];c===Ze?(o.style.removeProperty("width"),o.style.removeProperty("right"),o.style.removeProperty("left"),V?o.style.height=`${K}%`:o.style.height=`${Math.abs(K-M)}%`,T?(o.style.bottom="0%",V?o.style.top="auto":o.style.top=`${Math.min(100-M,100-K)}%`):(o.style.bottom="auto",V?o.style.top="0%":o.style.top=`${Math.min(K,M)}%`)):(o.style.removeProperty("height"),o.style.removeProperty("top"),o.style.removeProperty("bottom"),V?o.style.width=`${K}%`:o.style.width=`${Math.abs(K-M)}%`,p?(o.style.right="0%",V?o.style.left="auto":o.style.left=`${Math.min(100-M,100-K)}%`):(o.style.right="auto",V?o.style.left="0%":o.style.left=`${Math.min(K,M)}%`))}}),U="--animate-onclick",ve="--width",G="--height",$e="--panel-bg-border-radius",ue="--panel-bg",R="--panel-bg-hover",he="--panel-bg-fill",y="--pointer-width",k="--pointer-height",X="--pointer-border-radius",ie="--pointer-bg",je="--pointer-bg-hover",Ve="--pointer-bg-focus",ut="--pointer-shadow",Je="--pointer-shadow-hover",tt="--pointer-shadow-focus",kt="--pointer-border",B="--pointer-border-hover",Q="--pointer-border-focus",$=(o,c,g)=>{let p=new Map;for(let T of o.attributes){let V=T.nodeName.trim().toLowerCase();if(!c.test(V))continue;let K=V.replace(/\D/g,"").trim(),M=K===""||K==="0"||K==="1"?0:Ee(K,0)-1,L=g&&typeof g=="function"?g(T.value):T.value;p.set(M,L)}return p},Y=o=>{if(!o)return null;let c=o.getAttribute(wi);if(!c)return null;let g=c.split(";"),p=[];for(let T of g)T.trim()!==""&&p.push(T.trim());return p},be=[[ve,ke,"sliderWidth",null],[G,F,"sliderHeight",null],[$e,de,"sliderRadius",null],[ue,re,"sliderBg",null],[R,le,"sliderBgHover",null],[he,fe,"sliderBgFill",null],[y,ce,"pointer#Width",/^pointer([0-9]*)-width$/],[k,pe,"pointer#Height",/^pointer([0-9]*)-height$/],[X,J,"pointer#Radius",/^pointer([0-9]*)-radius$/],[ie,me,"pointer#Bg",/^pointer([0-9]*)-bg$/],[je,Ae,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Ve,ze,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[ut,Ue,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[Je,sr,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[tt,It,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[kt,Er,"pointer#Border",/^pointer([0-9]*)-border$/],[B,Tr,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Q,yi,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],ge=(o,c,g)=>{let p=null,T=[],V=new Map,K=(q,te=c)=>{let z=[...te.classList];for(let Pe of z)Pe.startsWith(q)&&c.classList.remove(Pe)},M=()=>{K("shape");let q=c.querySelectorAll(".pointer");for(let te of q)K("shape",te)},L=q=>{p=q,K("theme-"),typeof q=="string"&&c.classList.add(`theme-${q}`)},ee=()=>{if(M(),!(T.length<=0)){c.classList.add("shape",`shape-${T[0]}`);for(let q=1;q<T.length;q++){let te=T[q];if(!te)continue;let z=c.querySelector(`.pointer-${q}`);!z||z.classList.add("shape",`shape-${te}`)}}},se=(q,te)=>{T[q]=te,ee()},W=()=>{M();let q=$(o,/^pointer([0-9]*)-shape$/);if(!(q.size<=0)){for(let te of q){let z=te[0];T[z]=te[1]}ee()}},we=(q,te)=>`${q}-${te}`,rt=(q,te,z)=>{let Pe=g[z];if(!Pe)return;let He=z===0?c:Pe.$pointer;if(te==null){V.has(we(q,z))&&V.delete(we(q,z)),He.style.removeProperty(q);return}V.set(we(q,z),te),He.style.setProperty(q,te)},Ye=(q,te)=>V.get(we(q,te));return(()=>{for(let q of be){let[te,z,Pe,He]=q;if(He){let Me=$(o,He);for(let Le of Me){let Xe=Le[0],Qe=Le[1];rt(te,Qe,Xe)}}else{let Me=o.getAttribute(z);rt(te,Me,0)}let We=[];if(Pe.indexOf("#")===-1)We.push([Pe,0]);else{We.push([Pe.replace("#",""),0]),We.push([Pe.replace("#","0"),0]),We.push([Pe.replace("#","1"),0]);for(let Me=1;Me<g.length;Me++)We.push([Pe.replace("#",(Me+1).toString()),Me])}for(let Me of We)try{let Le=Me[0],Xe=Me[1];Object.prototype.hasOwnProperty.call(o,Le)||Object.defineProperty(o,Le,{get(){return Ye(te,Xe)},set:Qe=>{rt(te,Qe,Xe)}})}catch(Le){console.error(Le)}}L(o.getAttribute(C)),W()})(),{setStyle:rt,getStyle:Ye,get theme(){return p},set theme(q){L(q)},get pointerShapes(){return T},setPointerShape:se}},Se="animate-on-click",ne="range-dragging",Ge=(o,c,g,p)=>{let T=[],V=se=>{for(let W of T)W.update&&typeof W.update=="function"&&W.update(se)},K=()=>{for(let se of T)se.destroy&&typeof se.destroy=="function"&&se.destroy()},M=(se,W)=>{for(let we of T)we.onAttrChange&&typeof we.onAttrChange=="function"&&we.onAttrChange(se,W)},L=se=>{if(se.gettersAndSetters){for(let W of se.gettersAndSetters)if(!(!W.name||!W.attributes))try{Object.prototype.hasOwnProperty.call(o,W.name)||Object.defineProperty(o,W.name,W.attributes)}catch(we){console.error("defineSettersGetters error:",we)}}},ee=se=>{var W;if(!se.css)return;let we=(W=o.shadowRoot)==null?void 0:W.querySelector("style");!we||(we.innerHTML+=se.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let se of window.tcRangeSliderPlugins){let W=se();T.push(W),W.init&&typeof W.init=="function"&&(W.init(o,c,g,p),L(W),ee(W))}},update:V,onAttrChange:M,destroy:K}},Fe=10,Rr=20,Oa=(o,c)=>{let g=new Map,p=/^value([0-9]*)$/;for(let M of o.attributes){let L=M.nodeName.trim().toLowerCase();if(!p.test(L))continue;let ee=L.replace("value","").trim(),se=ee===""||ee==="0"||ee==="1"?0:Ee(ee,0)-1,W=st(M.value)?Ee(M.value,0):M.value;g.set(se,W)}let T=Math.max(...Array.from(g.keys())),V=[];V.push([w(o,c,0),g.get(0)]);let K=c;for(let M=1;M<=T;M++){let L=c.cloneNode(!0);K.after(L),K=L,V.push([w(o,L,M),g.get(M)])}return V},Tn=(o,c,g,p,T,V,K)=>{try{Object.defineProperty(o,p,{configurable:!0,get(){if(!c)return;let M=c.pointers[g];if(!M)return;let L=c.getTextValue(M.percent);return st(L)?Ee(L,L):L},set:M=>{c.pointers[g]?c==null||c.setValue(M,g):c==null||c.addPointer(M)}}),Object.defineProperty(o,T,{configurable:!0,get(){var M,L;return(L=(M=c==null?void 0:c.pointers[g])==null?void 0:M.getAttr("aria-label"))!=null?L:void 0},set:M=>{!c||c.setAriaLabel(g,M)}}),Object.defineProperty(o,V,{configurable:!0,get(){var M,L;return(L=(M=c==null?void 0:c.styles)==null?void 0:M.pointerShapes[g])!=null?L:null},set:M=>{!c||!c.styles||c.styles.setPointerShape(g,M)}}),Object.defineProperty(o,K,{configurable:!0,get(){var M;return(M=c==null?void 0:c.pointers[g].disabled)!=null?M:!1},set:M=>{if(!c)return;let L=c==null?void 0:c.pointers[g];!L||(L.disabled=M)}})}catch(M){console.error(M)}},Sa=(o,c)=>{let g=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let p=2;p<Fe;p++)g.push([`value${p}`,`ariaLabel${p}`,`pointer${p}Shape`,`pointer${p}Disabled`,p-1]);for(let p of g)Tn(o,c,p[4],p[0],p[1],p[2],p[3])},Mn=(o,c,g)=>{var p;let T=(p=g.shadowRoot)==null?void 0:p.querySelector(".container");if(T)for(let V of o)c?T.prepend(V.$pointer):T.append(V.$pointer)},Aa=(o,c)=>{if(!(!c||o.length<=1)){for(let g of o)g.$pointer.style.zIndex=Rr.toString();c.$pointer.style.zIndex=(Rr*2).toString()}},Oi=0,or=100,Ut=2,Ln="0.3s",Ea=(o,c,g)=>{let p=g.map(l=>l[0]),T=null,V=null,K=null,M=null,L=Oi,ee=or,se,W,we=_t,rt=Ut,Ye=!1,q=!1,te=!1,z=0,Pe=1/0,He=!1,We,Me,Le=!1,Xe=!1,Qe=!1,$t=Ln,Rn=[],Dn=l=>{Le||(l.preventDefault&&l.preventDefault(),Tt(l),window.addEventListener("mousemove",Tt),window.addEventListener("mouseup",Dr),ki(o,l))},Dr=l=>{Le||(We=void 0,Me=void 0,window.removeEventListener("mousemove",Tt),window.removeEventListener("mouseup",Dr),$t&&c.classList.add(Se),$i(o,l))},La=(l,b)=>{if(p.length<=0)return;if(p.length===1)return p[0].isClicked(l)&&$t&&c.classList.remove(Se),p[0];let D=Da(l);if(He){let ye=b,at=Fr(ye);at!==void 0&&(ye=Lr(ye,at)),D?(We=ye,Me=0,$t&&c.classList.remove(Se)):We!==void 0&&(Me=ye-We,We=ye)}if(!Ra(l)&&!D){for(let ye of p)if(!(!ye.isClicked(l)||ye.disabled))return $t&&c.classList.remove(Se),ye;for(let ye of p)if(T===ye)return ye}let xe=1/0,Re=null;for(let ye of p){if(ye.disabled)continue;let at=Math.abs(b-ye.percent);at<xe&&(xe=at,Re=ye)}return Re},jn=()=>p.findIndex(l=>T===l&&!l.disabled),Tt=l=>{let b;if(we===Ze){let{height:xe,top:Re}=c.getBoundingClientRect(),ye=l.type.indexOf("mouse")!==-1?l.clientY:l.touches[0].clientY;b=Math.min(Math.max(0,ye-Re),xe)*100/xe}else{let{width:xe,left:Re}=c.getBoundingClientRect(),ye=l.type.indexOf("mouse")!==-1?l.clientX:l.touches[0].clientX;b=Math.min(Math.max(0,ye-Re),xe)*100/xe}if((Ye||q)&&(b=100-b),T=La(l.target,b),T&&Aa(p,T),He&&p.length>1&&Me!==void 0){let xe=p[0],Re=p[p.length-1],ye=xe.percent+Me<0,at=Re.percent+Me>100;if(ye||at)return;for(let qr=0;qr<p.length;qr++)Ke(qr,p[qr].percent+Me);return}let D=jn();D!==-1&&(Ke(D,b),T==null||T.$pointer.focus())},jr=l=>{if(Le||document.activeElement!==o||T!=null&&T.disabled)return;l.stopPropagation(),l.preventDefault();let b=l.deltaY<0,D=Ye||q,xe=b?!D:D,Re=jn();Re!==-1&&(xe?lr(Re,p[Re].percent):cr(Re,p[Re].percent))},Fn=l=>{Le||Xe||(we===Ze?q?Ke(l,100):Ke(l,0):Ye?cr(l,p[l].percent):lr(l,p[l].percent))},Nn=l=>{Le||Xe||(we===Ze?q?Ke(l,0):Ke(l,100):Ye?lr(l,p[l].percent):cr(l,p[l].percent))},Wn=l=>{Le||Xe||(we===Ze?q?cr(l,p[l].percent):lr(l,p[l].percent):Ye?Ke(l,100):Ke(l,0))},Hn=l=>{Le||Xe||(we===Ze?q?lr(l,p[l].percent):cr(l,p[l].percent):Ye?Ke(l,0):Ke(l,100))},Ra=l=>l.classList.contains("panel"),Da=l=>l.classList.contains("panel-fill"),lr=(l,b)=>{if(b===void 0)return;let D=Fr(b);D==null&&(D=1),b-=D,b<0&&(b=0),Ke(l,b)},cr=(l,b)=>{if(b===void 0)return;let D=Fr(b);D==null&&(D=1),b+=D,b>100&&(b=100),Ke(l,b)},Mt=()=>{!M||M.update({percents:Bn(),values:In(),$pointers:Un(),min:Vn(),max:qn(),data:Ei(),step:Ai(),round:Mi(),type:Ti(),textMin:Nr(),textMax:Wr(),rightToLeft:Di(),bottomToTop:ji(),pointersOverlap:Hi(),pointersMinDistance:Li(),pointersMaxDistance:Ri(),rangeDragging:Bi(),disabled:Fi(),keyboardDisabled:Ni(),mousewheelDisabled:Wi()})},ja=()=>{Mt()},Fa=l=>{if(!(te||p.length<=1||ee===L))if(l===0){let b=Pe*100/(ee-L);return Math.max(0,p[l+1].percent-b)}else{let b=z*100/(ee-L);return Math.min(p[l-1].percent+b,100)}},Na=l=>{if(!(te||p.length<=1||ee===L))if(l===p.length-1){let b=Pe*100/(ee-L);return Math.min(p[l-1].percent+b,100)}else{let b=z*100/(ee-L);return Math.max(0,p[l+1].percent-b)}},Fr=l=>{let b;if(typeof se=="function"){let D=ar(0,100,L,ee,l);b=se(D,l)}else b=se;if(st(b)){let D=ee-L;return b=D===0?0:b*100/D,b}},Vt=l=>{if(l===void 0)return;let b=ar(0,100,L,ee,l);return W!==void 0?W[Math.round(b)]:xi(b,rt)},Nr=()=>W!==void 0?W[L]:L,Wr=()=>W!==void 0?W[ee]:ee,Ai=()=>se,Wa=l=>{var b;return l<=0||te?Nr():(b=Vt(p[l-1].percent))!=null?b:""},Ha=l=>{var b;return p.length<=1||l>=p.length-1||te?Wr():(b=Vt(p[l+1].percent))!=null?b:""},Bn=()=>p.map(l=>l.percent),In=()=>p.map(l=>Vt(l.percent)),Un=()=>p.map(l=>l.$pointer),Vn=()=>L,qn=()=>ee,Ei=()=>W,Ti=()=>we,Mi=()=>rt,Li=()=>z,Ri=()=>Pe,Ba=l=>Rn[l],Di=()=>Ye,ji=()=>q,Fi=()=>Le,Ni=()=>Xe,Wi=()=>Qe,Hi=()=>te,Bi=()=>He,Ke=(l,b)=>{if(b===void 0)return;let D=Fr(b);D!==void 0&&(b=Lr(b,D));let xe=p[l];if(!xe)return;let Re=xe.updatePosition(b,Fa(l),Na(l),we,Ye,q);V==null||V.updatePosition(we,p.map(ye=>ye.percent),Ye,q),Mt();for(let ye of p){let at=Vt(ye.percent);at!==void 0&&(ye.setAttr("aria-valuenow",at.toString()),ye.setAttr("aria-valuetext",at.toString()))}Ua(),Re&&Ci(o,p.map(ye=>Vt(ye.percent)))},ht=()=>{for(let l=0;l<p.length;l++)Ke(l,p[l].percent)},Ia=(l,b)=>{L=W!==void 0?0:Ee(l,Oi),ee=W!==void 0?W.length-1:Ee(b,or),Hr(L),Br(ee)},Ua=()=>{var l,b;for(let D=0;D<p.length;D++){let xe=p[D];xe.setAttr("aria-valuemin",((l=Wa(D))!=null?l:"").toString()),xe.setAttr("aria-valuemax",((b=Ha(D))!=null?b:"").toString())}},Hr=l=>{L=Ee(l,Oi),L>ee&&(ee=L+or),ht()},Br=l=>{ee=Ee(l,or),ee<L&&(ee=L+or),ht()},zn=l=>{te=!0;for(let b=0;b<l.length;b++)Ir(l[b],b);te=!1;for(let b=0;b<l.length;b++)Ir(l[b],b)},Ir=(l,b)=>{let D;W!==void 0?(D=l==null?0:A(l,W),D===-1&&(D=0)):(D=Ee(l,L),D<L&&(D=L),D>ee&&(D=ee));let xe=ar(L,ee,0,100,D);Ke(b,xe)},Ur=l=>{if(l==null){se=void 0;return}if(typeof l=="function"){se=l,ht();return}if(st(l)){se=Ee(l,1);let b=Math.abs(ee-L);se>b&&(se=void 0),ht();return}se=void 0},Ii=l=>{te=l,ht()},Ui=l=>{(!st(l)||l<0)&&(l=0),z=l},Vi=l=>{(!st(l)||l<0)&&(l=1/0),Pe=l},qi=l=>{Le=l,c.classList.toggle("disabled",Le),Le?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},Yn=l=>{Xe=l},Gn=l=>{Qe=l,Qe?document.removeEventListener("wheel",jr):document.addEventListener("wheel",jr,{passive:!1})},zi=l=>{if(l==null){W=void 0;return}if(W=O(l),W===void 0||W.length<=0){W=void 0;return}Hr(0),Br(W.length-1),se===void 0&&Ur(1)},Yi=l=>{var b;typeof l=="string"?we=l.trim().toLowerCase()===Ze?Ze:_t:we=_t;let D=(b=o.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!D)return;D.className=`range-slider-box type-${we}`,ht();let xe=we===Ze?"vertical":"horizontal";for(let Re of p)Re.setAttr("aria-orientation",xe)},Gi=l=>{Ye=l,p.length>1&&Mn(p,Ye,o),ht(),Mt()},Xi=l=>{q=l,p.length>1&&Mn(p,q,o),ht(),Mt()},Qi=l=>{rt=Ee(l,Ut),rt<0&&(rt=Ut),Mt()},Xn=l=>{l==null||l.toString().trim().toLowerCase()==="false"?($t=void 0,c.style.removeProperty(U),c.classList.remove(Se)):($t=l.toString(),c.style.setProperty(U,$t),c.classList.add(Se))},Qn=(l,b)=>{let D=p[l];!D||(D.setAttr("aria-label",b),Rn[l]=b)},Vr=l=>{if(We=void 0,p.length<=1){He=!1,c.classList.remove(ne);return}He=l,c.classList.toggle(ne,He)},Va=()=>{qi(Ne(o.getAttribute(I))),Xe=Ne(o.getAttribute(oe)),Qe=Ne(o.getAttribute(Z));let l=$(o,/^pointer([0-9]*)-disabled$/,b=>Ne(b));for(let b of l){let D=b[0];!p[D]||(p[D].disabled=b[1])}},qa=()=>{let l=$(o,/^aria-label([0-9]*)$/);for(let b of l){let D=b[0];Qn(D,b[1])}},za=l=>{let b=p.length,D=p[b-1].$pointer,xe=D.cloneNode(!0);D.after(xe);let Re=w(o,xe,b);return Re.setCallbacks(Fn,Nn,Wn,Hn),p.push(Re),Ir(l,b),ht(),Mt(),b},Ya=()=>{let l=p.length,b=p[l-1];return b?(b.destroy(),p.pop(),p.length<=1&&Vr(!1),ht(),Mt(),l-1):-1};return(()=>{var l,b;for(let xe of p)xe.setCallbacks(Fn,Nn,Wn,Hn);let D=(l=o.shadowRoot)==null?void 0:l.querySelector(".panel-fill");D&&(V=E(D)),Yi(o.getAttribute(S)),Gi(Ne(o.getAttribute(j))),Xi(Ne(o.getAttribute(N))),Ia(o.getAttribute(f),o.getAttribute(P)),Ur(o.getAttribute(x)),zi(o.getAttribute(m)),zn(g.map(xe=>xe[1])),Ii(Ne(o.getAttribute(a))),Ui(Ee(o.getAttribute(u),0)),Vi(Ee(o.getAttribute(h),1/0)),Vr(Ne(o.getAttribute(d))),Qi(Ee(o.getAttribute(_),Ut)),Va(),qa(),K=ge(o,c,p),Xn((b=o.getAttribute(Mr))!=null?b:Ln),c.addEventListener("mousedown",Dn),c.addEventListener("mouseup",Dr),c.addEventListener("touchmove",Tt),c.addEventListener("touchstart",Tt),Qe||document.addEventListener("wheel",jr,{passive:!1}),M=Ge(o,ja,{setValues:zn,setMin:Hr,setMax:Br,setStep:Ur,setPointersOverlap:Ii,setPointersMinDistance:Ui,setPointersMaxDistance:Vi,setDisabled:qi,setType:Yi,setRightToLeft:Gi,setBottomToTop:Xi,setRound:Qi,setKeyboardDisabled:Yn,setMousewheelDisabled:Gn,setRangeDragging:Vr,setData:zi},{getPercents:Bn,getValues:In,getPointerElements:Un,getMin:Vn,getMax:qn,getStep:Ai,getData:Ei,getType:Ti,getRound:Mi,getTextMin:Nr,getTextMax:Wr,isRightToLeft:Di,isBottomToTop:ji,isDisabled:Fi,isKeyboardDisabled:Ni,isMousewheelDisabled:Wi,isPointersOverlap:Hi,isRangeDraggingEnabled:Bi,getPointersMinDistance:Li,getPointersMaxDistance:Ri}),M.init()})(),{get pointers(){return p},get styles(){return K},get pluginsManager(){return M},get min(){return Nr()},get max(){return Wr()},get step(){return Ai()},get pointersOverlap(){return Hi()},set pointersOverlap(l){Ii(l)},get pointersMinDistance(){return Li()},set pointersMinDistance(l){Ui(l)},get pointersMaxDistance(){return Ri()},set pointersMaxDistance(l){Vi(l)},get disabled(){return Fi()},set disabled(l){qi(l)},get data(){return Ei()},get type(){return Ti()},set type(l){Yi(l)},get rightToLeft(){return Di()},set rightToLeft(l){Gi(l)},get bottomToTop(){return ji()},set bottomToTop(l){Xi(l)},get round(){return Mi()},set round(l){Qi(l)},get animateOnClick(){return $t},set animateOnClick(l){Xn(l)},get keyboardDisabled(){return Ni()},set keyboardDisabled(l){Yn(l)},get mousewheelDisabled(){return Wi()},set mousewheelDisabled(l){Gn(l)},get rangeDragging(){return Bi()},set rangeDragging(l){Vr(l)},setMin:Hr,setMax:Br,setValue:Ir,setStep:Ur,setData:zi,getTextValue:Vt,setAriaLabel:Qn,getAriaLabel:Ba,addPointer:za,removePointer:Ya,destroy:()=>{c.removeEventListener("mousedown",Dn),c.removeEventListener("mouseup",Dr),c.removeEventListener("touchmove",Tt),c.removeEventListener("touchstart",Tt),document.removeEventListener("wheel",jr);for(let l of p)l.destroy();M==null||M.destroy()}}},Ta=(o,c,g)=>{let p=be.find(([M,L,ee,se])=>L.replace("#","")===c.replace(/\d+/g,""));if(p&&o.styles){let[M,L,ee,se]=p,W=c.replace(/\D/g,"").trim(),we=W===""||W==="0"||W==="1"?0:Ee(W,0)-1;o.styles.setStyle(M,g,we);return}switch(o&&o.pluginsManager&&o.pluginsManager.onAttrChange(c,g),c){case f:{o.setMin(g);break}case P:{o.setMax(g);break}case x:{o.setStep(g);break}case a:{o.pointersOverlap=Ne(g);break}case u:{o.pointersMinDistance=Ee(g,0);break}case d:{o.rangeDragging=Ne(g);break}case h:{o.pointersMaxDistance=Ee(g,1/0);break}case I:{o.disabled=Ne(g);break}case oe:{o.keyboardDisabled=Ne(g);break}case Z:{o.mousewheelDisabled=Ne(g);break}case m:{o.setData(g);break}case S:{o.type=g;break}case j:{o.rightToLeft=Ne(g);break}case N:{o.bottomToTop=Ne(g);break}case _:{o.round=Ee(g,Ut);break}case C:{o.styles&&(o.styles.theme=g);break}case Mr:{o.animateOnClick=g;break}}let T=null;if(/^value([0-9]*)$/.test(c)&&(T="value"),/^pointer([0-9]*)-disabled$/.test(c)&&(T="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&(T="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&(T="pointer-shape"),!T)return;let V=c.replace(/\D/g,"").trim(),K=V===""||V==="0"||V==="1"?0:Ee(V,0)-1;switch(T){case"value":{o.setValue(g,K);break}case"pointer-disabled":{let M=o==null?void 0:o.pointers[K];if(!M)return;M.disabled=Ne(g);break}case"aria-label":{o.setAriaLabel(K,g);break}case"pointer-shape":{o.styles&&o.styles.setPointerShape(K,g);break}}},Ma=class extends HTMLElement{constructor(){super(),i(this,"slider"),i(this,"_externalCSSList",[]),i(this,"_observer",null),this.attachShadow({mode:"open"})}set step(o){this.slider&&this.slider.setStep(o)}get step(){var o;return(o=this.slider)==null?void 0:o.step}set disabled(o){this.slider&&(this.slider.disabled=o)}get disabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.disabled)!=null?c:!1}set data(o){var c;(c=this.slider)==null||c.setData(o)}get data(){var o;return(o=this.slider)==null?void 0:o.data}set min(o){var c;(c=this.slider)==null||c.setMin(o)}get min(){var o;return(o=this.slider)==null?void 0:o.min}set max(o){var c;(c=this.slider)==null||c.setMax(o)}get max(){var o;return(o=this.slider)==null?void 0:o.max}set round(o){!this.slider||(this.slider.round=o)}get round(){var o,c;return(c=(o=this.slider)==null?void 0:o.round)!=null?c:Ut}set type(o){!this.slider||(this.slider.type=o??_t)}get type(){var o;return((o=this.slider)==null?void 0:o.type)||_t}set pointersOverlap(o){!this.slider||(this.slider.pointersOverlap=o)}get pointersOverlap(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersOverlap)!=null?c:!1}set pointersMinDistance(o){!this.slider||(this.slider.pointersMinDistance=o)}get pointersMinDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMinDistance)!=null?c:0}set pointersMaxDistance(o){!this.slider||(this.slider.pointersMaxDistance=o)}get pointersMaxDistance(){var o,c;return(c=(o=this.slider)==null?void 0:o.pointersMaxDistance)!=null?c:1/0}set theme(o){!this.slider||!this.slider.styles||(this.slider.styles.theme=o)}get theme(){var o,c,g;return(g=(c=(o=this.slider)==null?void 0:o.styles)==null?void 0:c.theme)!=null?g:null}set rtl(o){!this.slider||(this.slider.rightToLeft=o)}get rtl(){var o,c;return(c=(o=this.slider)==null?void 0:o.rightToLeft)!=null?c:!1}set btt(o){!this.slider||(this.slider.bottomToTop=o)}get btt(){var o,c;return(c=(o=this.slider)==null?void 0:o.bottomToTop)!=null?c:!1}set keyboardDisabled(o){!this.slider||(this.slider.keyboardDisabled=o)}get keyboardDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(o){!this.slider||(this.slider.mousewheelDisabled=o)}get mousewheelDisabled(){var o,c;return(c=(o=this.slider)==null?void 0:o.mousewheelDisabled)!=null?c:!1}set animateOnClick(o){!this.slider||(this.slider.animateOnClick=o)}get animateOnClick(){var o;return(o=this.slider)==null?void 0:o.animateOnClick}get rangeDragging(){var o,c;return(c=(o=this.slider)==null?void 0:o.rangeDragging)!=null?c:!1}set rangeDragging(o){this.slider&&(this.slider.rangeDragging=Ne(o))}get externalCSSList(){return this._externalCSSList}addPointer(o){var c,g;if(!this.slider)return;let p=(g=(c=this.slider)==null?void 0:c.addPointer(o))!=null?g:0;Tn(this,this.slider,p,`value${p+1}`,`ariaLabel${p+1}`,`pointerShape${p+1}`,`pointer${p+1}Disabled`)}removePointer(){var o;!this.slider||(o=this.slider)==null||o.removePointer()}addCSS(o){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=o,this.shadowRoot.appendChild(c)}connectedCallback(){var o,c;if(!this.shadowRoot)return;this._externalCSSList=Y(this),this.shadowRoot.innerHTML=n(s,this._externalCSSList);let g=(o=this.shadowRoot)==null?void 0:o.querySelector(".pointer");if(!g)return;let p=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!p)return;let T=Oa(this,g);this.slider=Ea(this,p,T),Sa(this,this.slider),this._observer=new MutationObserver(V=>{V.forEach(K=>{var M;if(!this.slider||K.type!=="attributes")return;let L=K.attributeName;!L||Ta(this.slider,L,(M=this.getAttribute(L))!=null?M:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Si=Ma;window.tcRangeSlider=Si,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Si),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Si{})})();(()=>{var t=(u,h,d,m,f)=>{let P=h-u;return P===0?d:(m-d)*(f-u)/P+d},e=u=>!isNaN(parseFloat(u))&&isFinite(u),r=(u,h)=>e(u)?Number(u):h,i=u=>u==null?!1:typeof u=="boolean"?u:u.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var n=11,s=11,a=()=>{let u=null,h=null,d=null,m=null,f=null,P=!1,x=n,_=s,S=()=>{var F;let de=(F=u==null?void 0:u.shadowRoot)==null?void 0:F.querySelector("#range-slider");d=document.createElement("div"),d.classList.add("marks"),m=document.createElement("div"),m.classList.add("mark-points"),d.append(m),f=document.createElement("div"),f.classList.add("mark-values"),d.append(f),de.append(d)},C=()=>{!h||!d||d.classList.toggle("is-reversed",h.isRightToLeft()||h.isBottomToTop())},j=()=>{var F;if(!d||!h)return;let de=h.getMin(),re=h.getMax(),le=h.getType()==="vertical",fe=h.isRightToLeft()||h.isBottomToTop();for(let pe=0;pe<x;pe++){let J=document.createElement("div");J.classList.add("mark",`mark-${pe}`);let me=x===0?0:pe*100/(x-1);le?fe?J.style.top=`${100-me}%`:J.style.top=`${me}%`:fe?J.style.left=`${100-me}%`:J.style.left=`${me}%`,m==null||m.append(J)}let ce=h.getData();for(let pe=0;pe<_;pe++){let J=document.createElement("div");J.classList.add("mark-value",`mark-value-${pe}`);let me=_===0?0:pe*100/(_-1),Ae=t(0,_-1,de,re,pe);J.textContent=(ce?(F=ce[Math.round(Ae)])!=null?F:"":Ae).toString(),le?fe?J.style.top=`${100-me}%`:J.style.top=`${me}%`:fe?J.style.left=`${100-me}%`:J.style.left=`${me}%`,f==null||f.append(J)}},N=(F,de)=>{ke(),x=F,_=de,x<=0&&(x=n),_<=0&&(_=s),S(),j(),C()},I=F=>{P=F,P?(S(),j(),C()):ke()},oe=F=>{!d||d.style.setProperty("--marks-color",F)},Z=F=>{!d||d.style.setProperty("--values-color",F)},ke=()=>{d==null||d.remove()};return{get name(){return"Marks"},init:(F,de,re,le)=>{var fe,ce;h=le,u=F,P=i(u.getAttribute("marks")),P&&(N(r(u.getAttribute("marks-count"),n),r(u.getAttribute("marks-values-count"),s)),oe((fe=u.getAttribute("marks-color"))!=null?fe:"#cbd5e1"),Z((ce=u.getAttribute("marks-values-color"))!=null?ce:"#475569"))},onAttrChange:(F,de)=>{F==="marks"&&I(i(de)),F==="marks-count"&&N(r(de,n),_),F==="marks-values-count"&&N(x,r(de,s)),F==="marks-color"&&oe(de),F==="marks-values-color"&&Z(de)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return P??!1},set:F=>{I(i(F))}}},{name:"marksCount",attributes:{get(){return x??n},set:F=>{N(r(F,n),_)}}},{name:"marksValuesCount",attributes:{get(){return x??n},set:F=>{N(x,r(F,s))}}},{name:"marksColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--marks-color")},set:F=>{oe(F)}}},{name:"markValuesColor",attributes:{get(){return d==null?void 0:d.style.getPropertyValue("--values-color")},set:F=>{Z(F)}}}],destroy:ke,css:`
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
    `}};window.tcRangeSliderPlugins.push(a)})();var Ju=Object.defineProperty,eh=Object.getOwnPropertyDescriptor,Bt=(t,e,r,i)=>{for(var n=i>1?void 0:i?eh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&Ju(e,r,n),n};let yt=class extends gt{constructor(){super(...arguments),this.sliderRef=Be()}getClassName(){return"RangeSliderElement"}connectedCallback(){super.connectedCallback(),this.palette=this.registry.palette.currentPalette,this.registry.palette.addListener(this.identificator,()=>{this.palette=this.registry.palette.currentPalette}),this.registry.minmax.addListener(this.identificator,t=>{t&&(this.min=t.min,this.max=t.max)}),this.registry.range.addListener(this.identificator,t=>{t&&(this.from=t.from,this.to=t.to)})}firstUpdated(t){super.firstUpdated(t);const e=this.sliderRef.value;e.addCSS(`
                .pointer-shape {
                    border-color: var( --thermal-foreground );
                    border-radius: 0;
                    width: 7px;
                }
        `),e.addEventListener("change",r=>{const n=r.detail;this.from=n.value1,this.to=n.value2}),e.addEventListener("onMouseUp",()=>{this.from!==void 0&&this.to!==void 0&&this.registry.range.imposeRange({from:this.from,to:this.to})})}canRanderSlider(){return this.min!==void 0&&this.max!==void 0&&this.from!==void 0&&this.to!==void 0}render(){return H`

        <div class="container ${this.canRanderSlider()?"ready":"loading"}">

            <div class="skeleton"></div>

            <tc-range-slider 
                ${qe(this.sliderRef)}
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

        `}};yt.styles=Ie`

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
    
    `;Bt([Ce({type:Number,reflect:!0})],yt.prototype,"min",2);Bt([Ce({type:Number,reflect:!0})],yt.prototype,"max",2);Bt([Ce({type:Number,reflect:!0})],yt.prototype,"from",2);Bt([Ce({type:Number,reflect:!0})],yt.prototype,"to",2);Bt([Te()],yt.prototype,"palette",2);Bt([Te()],yt.prototype,"sliderRef",2);yt=Bt([Oe("thermal-range")],yt);var th=Object.defineProperty,rh=Object.getOwnPropertyDescriptor,vi=(t,e,r,i)=>{for(var n=i>1?void 0:i?rh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&th(e,r,n),n};let ir=class extends gt{constructor(){super(...arguments),this.histogram=[],this.interactive=!1,this.height="calc( var( --thermal-gap ) * 1.5 )"}getClassName(){return"HistogramElement"}firstUpdated(t){super.firstUpdated(t),this.registry.histogram.addListener(this.identificator,e=>{this.histogram=e})}disconnectedCallback(){super.disconnectedCallback(),this.registry.histogram.removeListener(this.identificator)}renderHistogram(){return H`

            <div class="container ${this.histogram.length>0?"ready":"loading"} ${this.interactive?"interactive":_e}">

                <div class="histogram" style="height: ${this.height}">

                    ${this.histogram.map(t=>H`
                            <div class="histogram-bar">
                                <div style="height: ${t.height}%" class="histogram-bar-inner"></div>
                            </div
                        `)}

                </div>

            </div>
        
        `}render(){return this.interactive===!1?this.renderHistogram():H`
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
        `}};ir.styles=Ie`

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


    `;vi([Te()],ir.prototype,"histogram",2);vi([Ce({type:Boolean,reflect:!0})],ir.prototype,"interactive",2);vi([Ce({type:String,reflect:!0})],ir.prototype,"height",2);ir=vi([Oe("thermal-histogram")],ir);var ih=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,bi=(t,e,r,i)=>{for(var n=i>1?void 0:i?nh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&ih(e,r,n),n};let mt=class extends gt{constructor(){super(...arguments),this.ticksRef=Be(),this.placement="top",this.minmax=void 0,this.ticks=[]}getClassName(){return"TicksElement"}firstUpdated(t){super.firstUpdated(t),this.registry.minmax.addListener(this.identificator,e=>{this.minmax=e,this.calculateTicks(e,this.ticksRef.value.clientWidth)}),this.observer=new ResizeObserver(e=>{const r=e[0];this.calculateTicks(this.minmax,r.contentRect.width)}),this.observer.observe(this.ticksRef.value)}clamp(t,e,r){return t<e?e:t>r?r:t}map(t,e,r,i,n){const s=(t-e)*(n-i)/(r-e)+i;return this.clamp(s,i,n)}calculateTicks(t,e){if(t===void 0)this.ticks=[];else{const r=[0],i=Math.floor(e/mt.TICK_WIDTH)-2,n=100/i;for(let s=1;s<i;s++)r.push(n*s);r.push(100),this.ticks=r.map(s=>this.calculateOneTick(t,s)).filter(s=>s!==void 0)}}calculateOneTick(t,e){if(t!==void 0){const r=this.map(e,0,100,t.min,t.max);return{percentage:e,value:r}}}render(){return H`

            <div class="container ${this.minmax!==void 0?"ready":"loading"} placement-${this.placement} ">

                <div class="skeleton"></div>

                <div class="ticks" ${qe(this.ticksRef)}>

                    ${this.ticks.map(t=>H`
                            <div class="tick" >
                                <div class="tick-value">
                                ${t.value.toFixed(mt.TICK_FIXED)}
                                </div>
                            </div>
                        `)}

                </div>                

            </div>
        
        `}};mt.TICK_WIDTH=40;mt.TICK_FIXED=2;mt.styles=Ie`

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


    `;bi([Ce({type:String,reflect:!0})],mt.prototype,"placement",2);bi([Te()],mt.prototype,"minmax",2);bi([Te()],mt.prototype,"ticks",2);mt=bi([Oe("thermal-ticks")],mt);var sh=Object.defineProperty,ah=Object.getOwnPropertyDescriptor,oh=(t,e,r,i)=>{for(var n=i>1?void 0:i?ah(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&sh(e,r,n),n};let bn=class extends xt{getClassName(){return"FileShareButton"}connectedCallback(){super.connectedCallback()}render(){var t;return H`
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
        `}};bn.styles=Ie`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;bn=oh([Oe("thermal-file-share")],bn);var lh=Object.defineProperty,ch=Object.getOwnPropertyDescriptor,Ar=(t,e,r,i)=>{for(var n=i>1?void 0:i?ch(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&lh(e,r,n),n};let Ht=class extends xt{constructor(){super(...arguments),this.playing=!1,this.percentage=0,this.ms="0:00:000",this.timelineRef=Be(),this.barRef=Be(),this.highlights=[]}getClassName(){return"TimelineElement"}update(t){var r,i;const e=super.update(t);return(r=this._injectedFile.value)==null||r.timeline.removeListener(this.identificator),(i=this._injectedFile.value)==null||i.timeline.addListener(this.identificator,n=>{this.percentage=n/this._injectedFile.value.duration*100,this.ms=this.formatDuration(this._injectedFile.value.timeline.value)}),e}formatDuration(t){const e=t%1e3,r=1e3*60,i=Math.floor(t/r),n=(t-i*r-e)/1e3,s=(a,u)=>{const h=a.toString();if(h.length===u)return h;if(h.length<u){const d=u-h.length;let m="";for(let f=0;f<d;f++)m=m+"0";return m+h}};return[i,s(n,2),s(e,3)].join(":")}play(){this._injectedFile.value&&(this.playing=!0,this._injectedFile.value.timeline.play())}pause(){this._injectedFile.value&&(this.playing=!1,this._injectedFile.value.timeline.pause())}applyBar(t){if(this.timelineRef.value&&this.barRef.value&&this._injectedFile.value){const r=(t.clientX-this.timelineRef.value.offsetLeft)/this.timelineRef.value.clientWidth*100;this._injectedFile.value.timeline.setValueByPercent(r)}}recieveHighlights(t){this.highlights=t}render(){const t=this._injectedFile.value;return t===void 0||t.duration===0?_e:H`
            <div class="container">


                ${t!==void 0?H`
                        <div class="container">

                            <div class="item button" @click=${this.playing?this.pause.bind(this):this.play.bind(this)}>


                                ${this.playing?H`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
                                    </svg>
                                    `:H`
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                                    </svg>
                                    `}

                            </div>


                            <div class="item cursor">
                                ${this.ms}
                            </div>

                            <div class="item timeline" @click=${this.applyBar.bind(this)} ${qe(this.timelineRef)}>
                                <div class="timeline-bar">
                                    <div class="bar" style="width: ${this.percentage}%" ${qe(this.barRef)}></div>
                                </div>
                                <div class="timeline-marks">
                                    ${this.highlights.length>0?this.highlights.map(e=>{const r=e.fromMs/t.duration*100,i=(e.toMs-e.fromMs)/t.duration*100;return H`
                                        <div class="mark" style="left: ${r}%; width: ${i}%"></div>
                                    `}):_e}
                                </div>
                            </div>

                            <div class="item">${this.formatDuration(t.timeline.duration)}</div>
                        </div>
                    `:_e}
            
            </div>

          `}};Ht.styles=Ie`
    
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
        .timeline-bar {
            width: 100%;
            height: 100%;
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
        }
    
    `;Ar([Te()],Ht.prototype,"playing",2);Ar([Te()],Ht.prototype,"percentage",2);Ar([Te()],Ht.prototype,"ms",2);Ar([Te()],Ht.prototype,"highlights",2);Ht=Ar([Oe("thermal-timeline")],Ht);var uh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,Sn=(t,e,r,i)=>{for(var n=i>1?void 0:i?hh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&uh(e,r,n),n};let _r=class extends ui{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=Be()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return H`
    <thermal-manager>
      <thermal-registry>
        <thermal-group>
          <div class="container fullscreen-${this.fullscreen}" ${qe(this.appRef)}>

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
                ${this.fullscreen==="on"?H`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:H`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
              
            </thermal-image>

          </div>
          <thermal-group>
      </thermal-registry>
    </thermal-manager>
    `}};_r.styles=Ie`

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
  
  `;Sn([Ce({type:String,reflect:!0})],_r.prototype,"url",2);Sn([Ce({type:String,reflect:!0})],_r.prototype,"fullscreen",2);_r=Sn([Oe("thermal-file-app")],_r);var dh=Object.defineProperty,ph=Object.getOwnPropertyDescriptor,An=(t,e,r,i)=>{for(var n=i>1?void 0:i?ph(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&dh(e,r,n),n};let kr=class extends ui{constructor(){super(...arguments),this.url="",this.fullscreen="off",this.appRef=Be(),this.imageRef=Be(),this.timelineRef=Be()}getClassName(){return"SingleFileApp"}connectedCallback(){super.connectedCallback(),window.addEventListener("fullscreenchange",()=>{document.fullscreenElement||(this.fullscreen="off")})}attributeChangedCallback(t,e,r){var i;super.attributeChangedCallback(t,e,r),t==="fullscreen"&&(r==="on"?(i=this.appRef.value)==null||i.requestFullscreen():r==="off"&&document.fullscreenElement&&document.exitFullscreen())}toggleFullscreen(){this.fullscreen==="on"?this.fullscreen="off":this.fullscreen="on"}render(){return H`
    <thermal-manager>
      <thermal-registry>
        <thermal-group>
          <div class="container fullscreen-${this.fullscreen}" ${qe(this.appRef)}>

            <thermal-image thermal="${this.url}">
              <thermal-file-name slot="bar"></thermal-file-name>
              
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
                ${this.fullscreen==="on"?H`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
                  </svg>`:H`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                  </svg>`}
                </div>
              </thermal-button>
              
            </thermal-image>

            <thermal-lesson timeline="${this.timelineRef.value}">
                <thermal-timeline ${qe(this.timelineRef)} slot="timeline"></thermal-timeline>
                <slot name="mark"></slot>
            </thermal-lesson>
            
            <slot></slot>

          </div>
          <thermal-group>
      </thermal-registry>
    </thermal-manager>
    `}};kr.styles=Ie`

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
  
  `;An([Ce({type:String,reflect:!0})],kr.prototype,"url",2);An([Ce({type:String,reflect:!0})],kr.prototype,"fullscreen",2);kr=An([Oe("thermal-lesson-app")],kr);const ka="manager",fh="registry";var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,$a=(t,e,r,i)=>{for(var n=i>1?void 0:i?gh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&mh(e,r,n),n};let yn=class extends it{constructor(){super(...arguments),this.manager=new ai(Ls.pool())}render(){return H`<slot></slot>`}};$a([Vs({context:ka}),Te()],yn.prototype,"manager",2);yn=$a([Oe("manager-new")],yn);var vh=Object.defineProperty,bh=(t,e,r,i)=>{for(var n=void 0,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=a(e,r,n)||n);return n&&vh(e,r,n),n};class Pa extends it{constructor(){super(...arguments),this.manager=new $r(this,{context:ka,subscribe:!0})}connectedCallback(){super.connectedCallback(),console.log("new context",this.manager)}updated(e){super.updated(e),console.log(e,this.manager.value)}render(){return H`<slot></slot>`}}bh([Te()],Pa.prototype,"manager");var yh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,xh=(t,e,r,i)=>{for(var n=i>1?void 0:i?wh(e,r):e,s=t.length-1,a;s>=0;s--)(a=t[s])&&(n=(i?a(e,r,n):a(n))||n);return i&&n&&yh(e,r,n),n};let xs=class extends Pa{constructor(){super(...arguments),this.registry=new Xt(this,{context:fh,initialValue:void 0})}connectedCallback(){super.connectedCallback(),console.log("manažer",this.manager.value)}render(){return H`<slot></slot>`}};xs=xh([Oe("registry-new")],xs);const an=window.matchMedia("(prefers-color-scheme: dark)"),En="thermal-dark-mode",_s=()=>{document.body.classList.add(En)},_h=()=>{document.body.classList.remove(En)},kh=()=>{an.matches&&_s();const t=e=>{e.matches?_s():_h()};an.addEventListener("change",t),an.addListener(t)},$h=wn.version.toString().replaceAll(".","-"),Ca=t=>`thermal__${t}__${$h}`,Ph=t=>document.getElementById(Ca(t))!==null,ks=(t,e)=>{if(!Ph(t)){const r=document.createElement("style");r.setAttribute("id",Ca(t)),r.innerHTML=e,document.head.appendChild(r)}},Ch=()=>{ks("rootVariables",`

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


            
        
        `),ks("darkModeOverrides",`
        
            body.${En} {

                --thermal-primary: aqua;
                --thermal-foreground: white;
                --thermal-background: black;
            
                --thermal-primary-light: var( --thermal-primary-base-dark );
                --thermal-primary-dark: var( --thermal-primary-base-light );

                --thermal-slate-light: var( --thermal-slate-base-dark );
                --thermal-slate-dark: var( --thermal-slate-base-light );
            
            }
            
        `)};console.info(`@labir/embed ${Ps}
Author: ${Os}
Repository: ${Cs.url}
`);kh();Ch();document.addEventListener("DOMContentLoaded",()=>{});
