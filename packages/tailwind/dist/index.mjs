import { useOpacityInput, useThermalManagerPaletteDrive, PaletteGgradientDisplay, useHistogramResolutionInput, useRangeButtonAuto, useRangeButtonFull } from '@labir/react-bridge';
export { ThermalInstance, ThermalProvider, ThermalRegistryHistogram, ThermalRegistryRange, useSingleFileRegistry, useThermalRegistry } from '@labir/react-bridge';
import { Input, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo } from 'react';

var d=Object.defineProperty,R=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,p=(o,t)=>{for(var e in t||(t={}))c.call(t,e)&&g(o,e,t[e]);if(m)for(var e of m(t))P.call(t,e)&&g(o,e,t[e]);return o},a=(o,t)=>R(o,f(t));var s=(o,t)=>{var e={};for(var r in o)c.call(o,r)&&t.indexOf(r)<0&&(e[r]=o[r]);if(o!=null&&m)for(var r of m(o))t.indexOf(r)<0&&P.call(o,r)&&(e[r]=o[r]);return e};var w=r=>{var i=r,{registry:o,type:t="range"}=i,e=s(i,["registry","type"]);let n=useOpacityInput(o);return jsx(Input,a(p({},e),{value:n.opacity.value.toString(),type:t,onChange:n.onChange,min:0,max:1,step:.01}))};var A=({triggerButtonProps:o={variant:"bordered",color:"default"}})=>{let t=useThermalManagerPaletteDrive("wtf"),e=useMemo(()=>Object.entries(t.availablePalettes).map(([r,i])=>a(p({},i),{key:r})),[t.availablePalettes]);return jsxs(Dropdown,{children:[jsx(DropdownTrigger,{children:jsx(Button,a(p({},o),{className:"bg-brimary-500",children:jsx(PaletteGgradientDisplay,p({},t.palette))}))}),jsx(DropdownMenu,{"aria-label":"Thermal palette selection",items:e,onAction:r=>{t.set(r);},children:r=>jsx(DropdownItem,{textValue:r.name,children:jsx(PaletteGgradientDisplay,{name:r.name,gradient:r.gradient,pixels:r.pixels})},r.key)})]})};var H=r=>{var i=r,{registry:o,type:t="range"}=i,e=s(i,["registry","type"]);let n=useHistogramResolutionInput(o);return jsx(Input,a(p({},e),{value:n.internal.toString(),type:t,onChange:n.onChange,onValueChange:n.onBlur,min:2,max:400}))};var N=i=>{var n=i,{registry:o,color:t="default",variant:e="bordered"}=n,r=s(n,["registry","color","variant"]);let l=useRangeButtonAuto(o);return jsx(Button,a(p({},r),{onClick:l.onClick,color:t,variant:e,children:"Automatic range"}))};var J=i=>{var n=i,{registry:o,color:t="default",variant:e="bordered"}=n,r=s(n,["registry","color","variant"]);let l=useRangeButtonFull(o);return jsx(Button,a(p({},r),{onClick:l.onClick,color:t,variant:e,children:"Full range"}))};

export { H as HistogramResolutionInput, w as OpacityInput, A as PaletteDropdown, N as RangeAutoButton, J as RangeFullButton };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.mjs.map