import { ThermalManager } from "@labirthermal/core";
import { provide } from "@lit/context";
import { property, state } from "lit/decorators.js";
import { pngExportContext, IAppWithPngExport, PngExportController } from "../controllers/PngExportController";
import { AbstractThermalElement } from "../index.export";
import { AbstractApp } from "./AbstractApp";

/**
 * The basis for all apps that will work with ANY thermal files.
 * 
 * To work with thermal files, the app needs to use some contexts hooking into the functionality of `@labirthermal/core`. This class provides the necessary properties, states, contexts and more in order to provide a solid foundation for further implementations.
 * 
 * @package `@labirthermal/embed`
 */
export abstract class AbstractAppWithFiles extends AbstractApp implements IAppWithPngExport {

    /** The manager is used for external interaction with the internal API of the `@labirthermal/core` */
    public abstract get manager(): ThermalManager;

    @provide({ 
        context: pngExportContext 
    })
    public pngExportController: PngExportController = new PngExportController(this);

    @state()
    public pngExportWidth: number = 1200;

    @state()
    public pngExportFontSize: number = 14;
    
    @state()
    public pngExportsAnalysis: boolean = true;

    @state()
    public pngExportsFileName: boolean = true;

    @state()
    public pngExportsThermalScale: boolean = true;

    @state()
    public pngExportsFileDate: boolean = true;

    @state()
    public pngExportLicense: string | undefined = undefined;

    @property({
        type: Boolean,
        reflect: true,
        attribute: "advanced-palettes"
    })
    public advancedPalettes: boolean = false;

    /** The author of the file is an optional information, but every variant of thermal file should display it in its own way. */
    @property({ 
        type: String 
    })
    public author?: string;

    /** The licence under which the file is published is an optional information. But every variant of thermal file should display it in its own way. */
    @property({ 
        type: String 
    })
    public license?: string;

}