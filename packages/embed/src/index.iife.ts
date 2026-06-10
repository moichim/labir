import { elementsAll } from "./iifeCatalog";
import { defineAll } from "./utils/iife";
import { version } from "../package.json";

// This is the main entry file for the IIFE build
// This file is executed withg after it is loaded by the browser.

/**
 * LabIR Embed - webcomponents foundation IIFE build
 * @package `@labirthermal/webcomponents`
 */


defineAll( elementsAll );


// Log the start info
console.info("@labirthermal/webcomponents", version);