import { Instance } from "../instance";

/** Handle the entire exports of a file */
export class ThermalFileExport {

    constructor(
        public readonly file: Instance
    ) {}


    public canvasAsPng() {
        return this.file.canvasLayer.exportAsPng();
    }

    public thermalDataAsCsv(
        // fileNameSuffix = "__thermal-data"
    ) {


        throw new Error("Not implemented");


    }



}