import { elementsAll } from "./iifeCatalog";
import { defineAll } from "./utils/iife";
import { version } from "../package.json";

/**
 * 
 */


defineAll(elementsAll);


// Log the start info
console.info("@labirthermal/webcomponents", version);