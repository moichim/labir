
import { IParserObject } from "../types";
import { baseInfo } from "./jobs/baseInfo";
import { frameData, getFrameSubset } from "./jobs/getFrameSubset";
import { registryHistogram } from "./jobs/histogram";
import { is } from "./jobs/is";


const extensions: IParserObject["extensions"] = [{
    extension: "lrc",
    minme: "application/octet-stream"
}];




const parser: IParserObject = {
    name: "LabIR Recording (.lrc)",
    description: "Radiometric data saved by thermal cameras TIMI Edu and by measurement systems developed by the Infrared Technologies research team at the University of West Bohemia in Pilsen (CZ)",
    devices: [{
        deviceName: "TIMI Edu Infrared Camera",
        deviceUrl: "https://edu.labir.cz",
        manufacturer: "TIMI Creation, s.r.o.",
        manufacturerUrl: "https://timic.cz"
    }],
    extensions,
    is,
    baseInfo,
    getFrameSubset,
    frameData,
    registryHistogram
}

export const LrcParser = Object.freeze( parser );