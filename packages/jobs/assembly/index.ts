// The entry file of your WebAssembly module.

import { baseInfo } from "./helpers/parser";



function add(a: i32, b: i32): i32 {
  return a + b;
}

export {
  baseInfo,
  add
}
