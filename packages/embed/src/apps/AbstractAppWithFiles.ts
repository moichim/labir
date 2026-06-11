import { provide } from "@lit/context";
import { pngExportWidthContext } from "../hierarchy/providers/context/pngExportContext";
import { AbstractThermalElement } from "../index.export";
import { AbstractControlledApp } from "./AbstractControlledApp";

/**
 * The basis for all apps that will work with ANY thermal files.
 * 
 * To work with thermal files, the app needs to use some contexts hooking into the functionality of `@labirthermal/core`. This class provides the necessary properties, states, contexts and more in order to provide a solid foundation for further implementations.
 * 
 * @package `@labirthermal/embed`
 */
export abstract class AbstractAppWithFiles extends AbstractThermalElement {


}