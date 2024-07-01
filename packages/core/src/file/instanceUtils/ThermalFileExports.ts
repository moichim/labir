import { download, generateCsv, mkConfig } from "export-to-csv";
import { ThermalFileInstance } from "../ThermalFileInstance";

/** Handle the entire exports of a file */
export class ThermalFileExport {

    constructor(
        public readonly file: ThermalFileInstance
    ) {}


    public canvasAsPng() {
        return this.file.canvasLayer.exportAsPng();
    }

    public thermalDataAsCsv(
        fileNameSuffix = "__thermal-data"
    ) {

        const csvConfig = mkConfig({ useKeysAsHeaders: true, fieldSeparator: ";", filename: this.file.fileName.replace( ".lrc", fileNameSuffix ) });


        const data = this.file.frames.map( frame => {

            const { pixels, ...data } = frame;

            console.log( pixels );

            return data;

        } );

        const csv = generateCsv( csvConfig )( data );

        download( csvConfig )(csv);

    }



}