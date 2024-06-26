'use strict';

var reactBridge = require('@labir/react-bridge');
var react = require('react');
var jsxRuntime = require('@emotion/react/jsx-runtime');
var react$2 = require('@headlessui/react');
var react$1 = require('@emotion/react');
var uuid = require('uuid');
var ze = require('classnames');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var ze__default = /*#__PURE__*/_interopDefault(ze);

var ne=r=>{let{registry:t,instance:o}=reactBridge.useSingleFileRegistry(r.url),a=react.useRef(null),[n,i]=react.useState(!1),x=react.useCallback(()=>{a.current&&(n?(document.exitFullscreen(),i(!1)):a.current.requestFullscreen().then(()=>i(!0)));},[a,n,i]);return react.useEffect(()=>{let C=k=>{console.log(k);};return document.addEventListener("fullscreenchange",C),()=>document.removeEventListener("fullscreenchange",C)},[]),jsxRuntime.jsx(jsxRuntime.Fragment,{children:o&&jsxRuntime.jsx("div",{className:"lrc-dark",ref:a,children:jsxRuntime.jsxs(M,{secondRow:jsxRuntime.jsx(reactBridge.ThermalRegistryRange,{registry:t,step:.1,trackBg:e.colorValue("gray",300),ticksLineColor:e.colorValue("gray",500),ticksLabelColor:e.colorValue("gray",500),handleBG:e.colorValue("gray",900),handleColor:e.colorValue("gray",50),histogramBackground:e.colorValue("gray",200),histogramBarBackground:e.colorValue("gray",600),histogramBorderWidthInPx:0,histogramSizeInPx:40}),mainContent:jsxRuntime.jsx(reactBridge.ThermalInstance,{instance:o}),children:[jsxRuntime.jsx(B,{instance:o}),jsxRuntime.jsx(S,{instance:o}),jsxRuntime.jsx(I,{}),jsxRuntime.jsx(P,{registry:t}),jsxRuntime.jsx(w,{registry:t}),jsxRuntime.jsx(V,{instance:o}),jsxRuntime.jsx(l,{onClick:x,children:n?"Zav\u0159\xEDt":"Otev\u0159\xEDt"})]})},o.id)})};var l=react.forwardRef(({...r},t)=>{let o=react$1.css({boxSizing:"border-box",padding:"4px 8px"});return jsxRuntime.jsx(react$2.Button,{css:o,ref:t,...r,children:r.children})});var P=({registry:r,...t})=>{let{onClick:o}=reactBridge.useRangeButtonAuto(r);return jsxRuntime.jsx(l,{onClick:o,...t,children:"Automatick\xFD teplotn\xED rozsah"})};var w=({registry:r,...t})=>{let{onClick:o}=reactBridge.useRangeButtonFull(r);return jsxRuntime.jsx(l,{onClick:o,...t,children:"Pln\xFD teplotn\xED rozsah"})};var A={name:"@labir/emotion",version:"1.2.12",description:"An UI for @labir/react-bridge based on @emotion/react",main:"index.js",module:"dist/index.mjs",types:"dist/index.d.ts",scripts:{vite:"vite",build:"tsup",lint:"eslint src"},author:"Jan J\xE1chim <jachim5@gmail.com>",license:"ISC",repository:{type:"git",url:"https://github.com/moichim/labir"},dependencies:{"@emotion/react":"^11.11.4","@headlessui/react":"^2.0.4","@labir/core":"workspace:*","@labir/react-bridge":"workspace:*",classnames:"^2.5.1",react:"^18.3.1","react-code-blocks":"^0.1.6","react-dom":"^18.3.1","usehooks-ts":"^3.1.0",uuid:"^9.0.1"},devDependencies:{"@eslint/js":"^9.3.0","@types/node":"^20.12.12","@types/react":"^18.3.2","@types/react-dom":"^18.3.0","@types/uuid":"^9.0.8","@vitejs/plugin-react":"^4.3.0",eslint:"^8.57.0",tsup:"^8.0.2",typescript:"^5.4.5","typescript-eslint":"^7.10.0",vite:"^5.2.11"}};var c=class c{static key(t){return `--${c.prefix}-${t}`}static value(t){return `var( ${c.key(t)} )`}static colorKey(t,o=500){return `--${c.prefix}-${t}-${o}`}static colorValue(t,o=500){return c.value(`${t}-${o}`)}static breakpointValue(t){return c.value(`bp-${t}`)}static gapValue(t){return t===void 0?c.value("gap"):`calc( ${c.value("gap")} * ${t} )`}};c.prefix="lrc";var e=c;var d=class{constructor(){this.primary={50:"#f3f8f9",100:"#dbf1fa",200:"#b1e1f4",300:"#7dc2e3",400:"#469fcd",500:"#347eb6",600:"#2c649d",700:"#254b7c",800:"#1b3358",900:"#101f3a"};this.secondary={50:"#fbfbf7",100:"#f9f1d9",200:"#f1dbae",300:"#ddb579",400:"#c6894a",500:"#a9672b",600:"#8b4c1b",700:"#693917",800:"#472711",900:"#2c170c"};this.gray={50:"#f9f9f8",100:"#f0f0f1",200:"#dddde0",300:"#b9babe",400:"#8f9295",500:"#717071",600:"#5b5555",700:"#464040",800:"#302b2d",900:"#1d1b1d"};this.success={50:"#f4f7f2",100:"#e5f0db",200:"#c2e7ae",300:"#88cb78",400:"#3fab47",500:"#2a9026",600:"#237a1a",700:"#1f5d17",800:"#173f14",900:"#102610"};this.danger={50:"#fcfcfa",100:"#f9f2ed",200:"#f3d7d9",300:"#e4adb2",400:"#d77e86",500:"#c25960",600:"#a53e43",700:"#7d2e31",800:"#561f21",900:"#321313"};this.breakpoints={xs:0,sm:640,md:900,lg:1200,xl:1450};this.gap={xs:"15px",sm:"16px",md:"18px",lg:"20px",xl:"22px"};this.fontSize={xs:"15px",sm:"15px",md:"15px",lg:"15px",xl:"15px"};this.fontStyles={};}getColorVariables(t,o=!1){let a=this[t];if(o===!1)return Object.fromEntries(Object.entries(a).map(([i,x])=>[e.key(`${t}-${i}`),x]));let n={};return n[e.key(`${t}-50`)]=a[900],n[e.key(`${t}-100`)]=a[800],n[e.key(`${t}-200`)]=a[700],n[e.key(`${t}-300`)]=a[600],n[e.key(`${t}-400`)]=a[500],n[e.key(`${t}-500`)]=a[400],n[e.key(`${t}-600`)]=a[300],n[e.key(`${t}-700`)]=a[200],n[e.key(`${t}-800`)]=a[100],n[e.key(`${t}-900`)]=a[50],n}getColorsVariables(t=!1){return {...this.getColorVariables("primary",t),...this.getColorVariables("secondary",t),...this.getColorVariables("gray",t),...this.getColorVariables("success",t),...this.getColorVariables("danger",t)}}getFontVariables(){return {[e.key("font-size-xs")]:this.fontSize.xs,[e.key("font-size-sm")]:this.fontSize.sm,[e.key("font-size-md")]:this.fontSize.md,[e.key("font-size-lg")]:this.fontSize.lg,[e.key("font-size-xl")]:this.fontSize.xl}}getGapVariables(){return {[e.key("gap-xs")]:this.gap.xs,[e.key("gap-sm")]:this.gap.sm,[e.key("gap-md")]:this.gap.md,[e.key("gap-lg")]:this.gap.lg,[e.key("gap-xl")]:this.gap.xl}}getBreakpointsVariables(){return {[e.key("bp-xs")]:`${this.breakpoints.xs}px`,[e.key("bp-sm")]:`${this.breakpoints.sm}px`,[e.key("bp-md")]:`${this.breakpoints.md}px`,[e.key("bp-lg")]:`${this.breakpoints.lg}px`,[e.key("bp-xl")]:`${this.breakpoints.xl}px`}}static printCss(t){return Object.entries(t).map(([o,a])=>`${o}:${a};`).join(`
`)}};var ye=(r=void 0,t="lrc")=>{let o=react.useRef({}),a=react.useRef({}),n=react.useMemo(()=>document.head,[]),i=react.useMemo(()=>r!==void 0?r:document.head,[r]),x=react.useCallback(s=>`${t}__${A.version}__${s}`,[t]),C=react.useCallback((s,g)=>{let u=document.createElement("style");return u.id=x(s),u.innerHTML=g,u},[x]),k=react.useCallback(s=>s in a.current,[a]),N=react.useCallback(s=>{if(k(s))return a.current[s]},[a,k]),q=react.useCallback((s,g)=>{if(s in o.current)return;let u=C(s,g);o.current[s]=u,n.appendChild(u);},[n]),K=react.useCallback((s,g)=>{if(k(s))return;let u=C(s,g);a.current[s]=u,i.appendChild(u);},[k,C,a,i]),Q=react.useCallback(s=>{N(s);},[N,a,i]);return {addCss:K,removeCss:Q,addHeadCss:q}},xe={addCss:()=>{},removeCss:()=>{},addHeadCss:()=>{}},z=react.createContext(xe),Ce=({...r})=>{let t=ye(r.appRoot),o=react.useMemo(()=>new d,[]),a=react.useMemo(()=>`
  
    .lrc-light {
      ${d.printCss(o.getColorsVariables())}
    }
    .lrc-dark {
        ${d.printCss(o.getColorsVariables(!0))}
    }

    .lrc-app__root {

        @media ( min-width: ${o.breakpoints.sm}px ) {
            ${e.key("gap")}: ${e.value("gap-sm")};
            ${e.key("font-size")}: ${e.value("font-size-sm")};
        }
        @media ( min-width: ${o.breakpoints.md}px ) {
            ${e.key("gap")}: ${e.value("gap-md")};
            ${e.key("font-size")}: ${e.value("font-size-md")};
        }
        @media ( min-width: ${o.breakpoints.lg}px ) {
            ${e.key("gap")}: ${e.value("gap-lg")};
            ${e.key("font-size")}: ${e.value("font-size-lg")};
        }
        @media ( min-width: ${o.breakpoints.xl}px ) {
            ${e.key("gap")}: ${e.value("gap-xl")};
            ${e.key("font-size")}: ${e.value("font-size-xl")};
        }

        font-size: ${e.value("font-size")};
        ${e.key("font-size")}: ${e.value("font-size-xs")};
        font-family: sans-serif;
    }
  
  `,[]);return react.useInsertionEffect(()=>{t.addHeadCss("baseStyles",`
            :root {

                ${d.printCss(o.getColorsVariables())}
                ${d.printCss(o.getFontVariables())}
                ${d.printCss(o.getGapVariables())}
                ${d.printCss(o.getBreakpointsVariables())}

                ${e.key("gap")}: ${e.value("gap-xs")};
                ${e.key("font-size")}: ${e.value("font-size-xs")};

            }
            
        `),t.addHeadCss("implementationStylesHead",a),t.addCss("implementationStyles",a);},[]),jsxRuntime.jsx(z.Provider,{value:t,children:jsxRuntime.jsx("div",{className:"lrc-app__root",children:r.children})})},m=(r,t)=>{let o=react.useContext(z);react.useInsertionEffect(()=>(o.addCss(r,t),()=>{o.removeCss(r);}),[]);},$=(r,t)=>{let o=react.useContext(z);react.useInsertionEffect(()=>(o.addHeadCss(r,t),()=>{}),[]);};var B=r=>{let t=react.useMemo(()=>`
    
.lrc__downloadDropdown__items {
    background: ${e.colorValue("gray",100)};
    padding: ${e.gapValue(.25)};
    box-shadow: 3px 3px 10px ${e.colorValue("gray",200)};
    border: 1px solid ${e.colorValue("gray",300)};
    border-radius: 5px;
    z-index: 9999;
}

.lrc__downloadDropdown__item {
    font-size: ${e.value("font-size")};
    padding: ${e.gapValue(.5)} ${e.gapValue(.7)};
    font-family: sans-serif;
    cursor: pointer;
    border-radius: 5px;
    display: block;
    color: white;

    &:hover {
        background: ${e.colorValue("gray",200)};
    }
}

.lrc-dark .lrc__paletteDropdown__item {
  color: white;
  box-shadow: 3px 3px 10px ${e.colorValue("gray",50)};
}

`,[]);m("downloadDropdown",t),$("downloadDropdown",t);let o=react.useMemo(()=>[{href:r.instance.url,text:"St\xE1hnout LRC soubor"}],[r.instance]);return jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsxs(react$2.Menu,{children:[jsxRuntime.jsx(react$2.MenuButton,{as:l,children:jsxRuntime.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[jsxRuntime.jsxs("span",{children:[r.instance.url," "]}),jsxRuntime.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",style:{width:"1em"},children:jsxRuntime.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"})})]})}),jsxRuntime.jsx(react$2.MenuItems,{anchor:{to:"bottom",gap:"5px",offset:"5px",padding:"5px"},portal:!1,as:"nav",style:{background:"red"},className:"lrc__downloadDropdown__items lrc-dark lrc-app__root",children:o.map(a=>jsxRuntime.jsx(react$2.MenuItem,{as:"a",href:a.href,className:"lrc__downloadDropdown__item",children:a.text},a.text))})]})})};var I=()=>{let r=reactBridge.useThermalManagerPaletteDrive(uuid.v4()),t=react.useMemo(()=>`
    
  .lrc__paletteDropdown__items {
      background: ${e.colorValue("gray",100)};
      padding: ${e.gapValue(.25)};
      box-shadow: 3px 3px 10px ${e.colorValue("gray",200)};
      border: 1px solid ${e.colorValue("gray",300)};
      border-radius: 5px;
  }

  .lrc__paletteDropdown__item {
      font-size: ${e.value("font-size")};
      padding: ${e.gapValue(.5)} ${e.gapValue(.3)};
      font-family: sans-serif;
      cursor: pointer;
      border-radius: 5px;

      &:hover {
          background: ${e.colorValue("gray",200)};
      }
  }

  .lrc-dark .lrc__paletteDropdown__item {
    color: white;
    box-shadow: 3px 3px 10px ${e.colorValue("gray",50)};
  }

`,[]);return m("paletteDropdown",t),$("paletteDropdown",t),jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsxs(react$2.Menu,{children:[jsxRuntime.jsx(react$2.MenuButton,{as:l,children:jsxRuntime.jsx(jsxRuntime.Fragment,{children:jsxRuntime.jsx(reactBridge.PaletteGgradientDisplay,{...r.palette})})}),jsxRuntime.jsx(react$2.MenuItems,{anchor:{to:"bottom",gap:"5px",offset:"0px",padding:"5px"},portal:!1,as:"nav",style:{background:"red"},className:"lrc__paletteDropdown__items lrc-dark lrc-app__root",children:Object.entries(r.availablePalettes).map(([o,a])=>jsxRuntime.jsx(react$2.MenuItem,{as:"div",onClick:()=>r.set(o),className:"lrc__paletteDropdown__item",children:jsxRuntime.jsx(reactBridge.PaletteGgradientDisplay,{...a})},o))})]})})};var R=({variant:r="primary",className:t,...o})=>(m("thermalUiInput",`
    .lrc__thermal-ui__input {
      border-radius: 5px;
      padding: ${e.gapValue(.3)} ${e.gapValue(.5)};

      &[type=range] {
        padding: 0;
        accent-color: ${e.colorValue(r,500)};
        padding-top: ${e.gapValue(.5)};
      }
    }
  `),jsxRuntime.jsx(react$2.Input,{...o,className:ze__default.default(t,"lrc__thermal-ui__input")}));var He=({registry:r,type:t="number",...o})=>{let{onChange:a,internal:n,onBlur:i}=reactBridge.useHistogramResolutionInput(r);return m("button",`
    .button {
      background: red;
      padding: 50px;
    }
  `),jsxRuntime.jsx(R,{onChange:a,onBlur:i,value:n,min:0,max:200,step:1,type:t,...o})};var Le=({registry:r,type:t="number",...o})=>{let{onChange:a,opacity:n}=reactBridge.useOpacityInput(r);return jsxRuntime.jsx(R,{onChange:a,value:n.value,min:0,max:1,step:.01,type:t,...o})};var _=r=>{let[t,o]=react.useState(!1),a=r.buttonComponent;return jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx(a,{onClick:()=>o(!0),children:r.buttonContent}),jsxRuntime.jsx(react$2.Dialog,{open:t,onClose:()=>o(!1),static:!0,className:"lrc-dark lrc-app__root",children:jsxRuntime.jsx("div",{style:{position:"fixed",width:"100vw",height:"100vh",backdropFilter:"blur(10px)",top:0,left:0,zIndex:9999,display:t?"flex":"none",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif"},children:jsxRuntime.jsx("div",{style:{maxWidth:"800px",background:e.colorValue("gray",100),padding:e.gapValue(),borderColor:e.colorValue("gray",200),borderWidth:1,borderStyle:"solid",boxShadow:`5px 5px 20px ${e.colorValue("gray",50)}`,borderRadius:10,color:"white"},children:jsxRuntime.jsxs(react$2.DialogPanel,{children:[jsxRuntime.jsx(react$2.DialogTitle,{style:{marginTop:0},children:r.title}),jsxRuntime.jsx("div",{style:{opacity:.8},children:r.content}),jsxRuntime.jsx(l,{onClick:()=>o(!1),style:{float:"right"},children:"Zav\u0159\xEDt"})]})})})})]})};var V=r=>jsxRuntime.jsx(_,{title:"Sd\xEDlejte termogram",buttonComponent:l,buttonContent:"Sd\xEDlet",content:jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsx("p",{children:"Do va\u0161eho webu vlo\u017E\xEDte tento termogram pomoc\xED n\xE1sleduj\xEDc\xEDho k\xF3du:"}),jsxRuntime.jsx("pre",{children:`<script type="module" src="https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.js"></script>
<thermal-file url="${r.instance.url}" />`})]})});var S=r=>jsxRuntime.jsx(_,{title:"Informace o termogramu",buttonComponent:l,buttonContent:"Informace o souboru",content:jsxRuntime.jsxs(jsxRuntime.Fragment,{children:[jsxRuntime.jsxs("p",{children:["N\xE1zev souboru: ",r.instance.url," "]}),jsxRuntime.jsxs("p",{children:["Rozli\u0161en\xED: ",r.instance.width," x ",r.instance.height," px"]}),jsxRuntime.jsxs("p",{children:["Minim\xE1ln\xED teplota: ",r.instance.min," \xB0C"]}),jsxRuntime.jsxs("p",{children:["Maxim\xE1ln\xED teplota: ",r.instance.max," \xB0C"]}),jsxRuntime.jsxs("p",{children:["Signatura: ",r.instance.signature]}),jsxRuntime.jsxs("p",{children:["Jednotky: ",r.instance.unit===2?"Stupn\u011B celsia":"kelviny"]}),jsxRuntime.jsx("p",{})]})});var M=r=>(m("thermalBar",`
    
    .lrc__bar {
        box-sizing: border-box;
        padding: ${e.gapValue(.3)};
        background: ${e.colorValue("gray",100)};
        border: 1px solid ${e.colorValue("gray",300)};
        border-radius: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        align-items: center;
        box-shadow: 3px 3px 10px ${e.colorValue("gray",200)};
    }

    .lrc__bar__name {
        font-weight: bold;
        padding-left: 10px;
    }

    .lrc__bar__secondRow {
        width: 100%;
    }
   
   `),jsxRuntime.jsxs("div",{className:"lrc__bar",children:[r.name&&jsxRuntime.jsx("div",{className:"lrc__bar__name",children:r.name}),r.children,r.secondRow&&jsxRuntime.jsx("div",{className:"lrc__bar__secondRow",children:r.secondRow}),r.mainContent&&jsxRuntime.jsx("div",{className:"lrc__bar__secondRow",children:r.mainContent})]}));

exports.Bar = M;
exports.CssContextProvider = Ce;
exports.DownloadDropdown = B;
exports.PaletteDropdown = I;
exports.Skin = e;
exports.ThermalButton = l;
exports.ThermalEmbedModal = V;
exports.ThermalFileApp = ne;
exports.ThermalHistogramResolutionInput = He;
exports.ThermalInfoModal = S;
exports.ThermalOpacityInput = Le;
exports.ThermalRangeAutoButton = P;
exports.ThermalRangeFullButton = w;
exports.useCss = m;
exports.useHeadCss = $;
