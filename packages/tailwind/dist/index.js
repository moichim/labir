'use strict';

var reactBridge = require('@labir/react-bridge');
var react = require('@nextui-org/react');
var jsxRuntime = require('react/jsx-runtime');
var react$1 = require('react');

var d=Object.defineProperty,R=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var g=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,p=(o,t)=>{for(var e in t||(t={}))P.call(t,e)&&g(o,e,t[e]);if(m)for(var e of m(t))c.call(t,e)&&g(o,e,t[e]);return o},a=(o,t)=>R(o,f(t));var s=(o,t)=>{var e={};for(var r in o)P.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&m)for(var r of m(o))t.indexOf(r)<0&&c.call(o,r)&&(e[r]=o[r]);return e};var w=r=>{var i=r,{registry:o,type:t="range"}=i,e=s(i,["registry","type"]);let n=reactBridge.useOpacityInput(o);return jsxRuntime.jsx(react.Input,a(p({},e),{value:n.opacity.value.toString(),type:t,onChange:n.onChange,min:0,max:1,step:.01}))};var A=({triggerButtonProps:o={variant:"bordered",color:"default"}})=>{let t=reactBridge.useThermalManagerPaletteDrive("wtf"),e=react$1.useMemo(()=>Object.entries(t.availablePalettes).map(([r,i])=>a(p({},i),{key:r})),[t.availablePalettes]);return jsxRuntime.jsxs(react.Dropdown,{children:[jsxRuntime.jsx(react.DropdownTrigger,{children:jsxRuntime.jsx(react.Button,a(p({},o),{className:"bg-brimary-500",children:jsxRuntime.jsx(reactBridge.PaletteGgradientDisplay,p({},t.palette))}))}),jsxRuntime.jsx(react.DropdownMenu,{"aria-label":"Thermal palette selection",items:e,onAction:r=>{t.set(r);},children:r=>jsxRuntime.jsx(react.DropdownItem,{textValue:r.name,children:jsxRuntime.jsx(reactBridge.PaletteGgradientDisplay,{name:r.name,gradient:r.gradient,pixels:r.pixels})},r.key)})]})};var H=r=>{var i=r,{registry:o,type:t="range"}=i,e=s(i,["registry","type"]);let n=reactBridge.useHistogramResolutionInput(o);return jsxRuntime.jsx(react.Input,a(p({},e),{value:n.internal.toString(),type:t,onChange:n.onChange,onValueChange:n.onBlur,min:2,max:200}))};var N=i=>{var n=i,{registry:o,color:t="default",variant:e="bordered"}=n,r=s(n,["registry","color","variant"]);let l=reactBridge.useRangeButtonAuto(o);return jsxRuntime.jsx(react.Button,a(p({},r),{onClick:l.onClick,color:t,variant:e,children:"Auto"}))};var J=i=>{var n=i,{registry:o,color:t="default",variant:e="bordered"}=n,r=s(n,["registry","color","variant"]);let l=reactBridge.useRangeButtonFull(o);return jsxRuntime.jsx(react.Button,a(p({},r),{onClick:l.onClick,color:t,variant:e,children:"Full"}))};

Object.defineProperty(exports, "ThermalInstance", {
	enumerable: true,
	get: function () { return reactBridge.ThermalInstance; }
});
Object.defineProperty(exports, "ThermalProvider", {
	enumerable: true,
	get: function () { return reactBridge.ThermalProvider; }
});
Object.defineProperty(exports, "ThermalRegistryHistogram", {
	enumerable: true,
	get: function () { return reactBridge.ThermalRegistryHistogram; }
});
Object.defineProperty(exports, "ThermalRegistryRange", {
	enumerable: true,
	get: function () { return reactBridge.ThermalRegistryRange; }
});
Object.defineProperty(exports, "useSingleFileRegistry", {
	enumerable: true,
	get: function () { return reactBridge.useSingleFileRegistry; }
});
Object.defineProperty(exports, "useThermalRegistry", {
	enumerable: true,
	get: function () { return reactBridge.useThermalRegistry; }
});
exports.HistogramResolutionInput = H;
exports.OpacityInput = w;
exports.PaletteDropdown = A;
exports.RangeAutoButton = N;
exports.RangeFullButton = J;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map