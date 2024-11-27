import { ThermalFileReader } from "../../loading/workers/ThermalFileReader";
import { AbstractAreaAnalysis } from "../../properties/analysis/internals/area/AbstractAreaAnalysis";
import { PointAnalysis } from "../../properties/analysis/internals/point/PointAnalysis";
import { AbstractExportProps, AbstractExportTypeMandatory, AbstractPngExport } from "../../utils/AbstractPngExport";
import { Instance } from "../instance";

type FileExportPngParams = AbstractExportProps;

type FileExportPngParamsMandatory = AbstractExportTypeMandatory;

export class FilePngExport extends AbstractPngExport<FileExportPngParams, FileExportPngParamsMandatory> {

    public static DEFAULT_PARAMS: FileExportPngParamsMandatory = {
        fileName: "sth",
        width: 1200,
        showAnalysis: true,
        backgroundColor: "white"
    }

    protected localInstance?: Instance;

    public get canvas() {
        return this.file.canvasLayer.canvas;
    }

    public constructor(
        public readonly file: Instance
    ) {
        super();
    }



    protected onBuildDom(): void {}

    protected beforeDomRemoved(): void {}


    protected afterDomRemoved(): void {
        this.localInstance?.group.registry.manager.removeRegistry( this.localInstance.group.registry.id );
        delete this.localInstance;

    }

    protected getFinalParams(params?: AbstractExportProps | undefined): AbstractExportTypeMandatory {

        const fileName = params && params.fileName
            ? params.fileName
            : `${this.file.fileName}__export`

        return {
            ...FilePngExport.DEFAULT_PARAMS,
            ...params,
            fileName: fileName
        }
    }
    protected onDownload(params: AbstractExportTypeMandatory): void {

        const registryId = Math.random().toString();

        // Build inner container
        const manager = this.file.group.registry.manager;
        const registry = manager.addOrGetRegistry(registryId);
        const group = registry.groups.addOrGetGroup(registryId);

        // Mirror state
        // Mirror the group state to the local objects
        manager.palette.setPalette(this.file.group.registry.manager.palette.value);
        registry.range.imposeRange(this.file.group.registry.range.value!);

        registry.service.loadFile(this.file.thermalUrl).then(async (result) => {

            if (result instanceof ThermalFileReader) {

                this.localInstance = await result.createInstance(group);

                const relativeTime = this.file.timeline.currentStep.relative;

                if ( relativeTime !== 0 ) {
                    this.localInstance.timeline.setRelativeTime( relativeTime );
                }

                if (this.container) {

                    const registryMin = this.file.group.registry.minmax.value!.min;
                    const registryMax = this.file.group.registry.minmax.value!.max;
                    const highlight = registryMin !== this.file.meta.current.min || registryMax !== this.file.meta.current.max
                        ? { from: this.file.meta.current.min, to: this.file.meta.current.max }
                        : undefined;

                    this.container.appendChild(this.buildHorizontalScale(
                        this.container,
                        registryMin,
                        registryMax,
                        this.file.group.registry.range.value!.from,
                        this.file.group.registry.range.value!.to,
                        this.file.group.registry.palette.currentPalette.gradient,
                        "gray",
                        "black",
                        highlight
                    ));


                    this.localInstance.mountToDom(this.container);

                    this.localInstance.draw();

                    if (params.showAnalysis && this.file.analysis.value.length > 0) {

                        const table = document.createElement("table");
                        table.style.width = "100%";
                        table.style.borderCollapse = "collapse";

                        const header = document.createElement("tr");

                        ["Analysis", "AVG", "MIN", "MAX"].forEach(string => {
                            const el = this.createElementWithText(
                                "th",
                                string,
                                FilePngExport.FONT_SIZE_SMALL,
                                undefined,
                                FilePngExport.COLOR_GRAY
                            );
                            el.style.padding = FilePngExport.GAP_SMALL + "px";
                            el.style.textAlign = "left";
                            header.appendChild(el);
                        });

                        table.appendChild(header);
                        this.container.appendChild(table);

                        this.file.slots.forEveryExistingSlot((slot, number) => {

                            const localAnalysis = this.localInstance?.slots.createFromSerialized(slot.serialized, number);

                            if (localAnalysis) {

                                // Create a record into a table

                                const row = document.createElement("tr");

                                const name = this.createElementWithText(
                                    "td",
                                    slot.analysis.name,
                                    FilePngExport.FONT_SIZE_SMALL,
                                    undefined,
                                    slot.analysis.initialColor
                                );

                                name.style.borderTop = `1px solid ${FilePngExport.COLOR_LIGHT}`;
                                name.style.padding = `${FilePngExport.GAP_SMALL}px 0px ${FilePngExport.GAP_SMALL} 0px`;

                                row.appendChild(name);

                                const createAndAppendValue = (
                                    color: string,
                                    value?: number,
                                ) => {

                                    const td = this.createElementWithText(
                                        "td",
                                        value ? value.toFixed(3) + " °C" : "",
                                        FilePngExport.FONT_SIZE_SMALL,
                                        undefined,

                                    );

                                    td.style.borderTop = `1px solid ${FilePngExport.COLOR_LIGHT}`;

                                    td.style.paddingTop = `${FilePngExport.GAP_SMALL}px`;
                                    td.style.paddingBottom = `${FilePngExport.GAP_SMALL}px`;

                                    row.appendChild(td);
                                }

                                if (slot.analysis instanceof AbstractAreaAnalysis) {

                                    createAndAppendValue(slot.analysis.initialColor, localAnalysis.avg);

                                    createAndAppendValue(slot.analysis.initialColor, localAnalysis.min);

                                    createAndAppendValue(slot.analysis.initialColor, localAnalysis.max);

                                } else if (slot.analysis instanceof PointAnalysis) {

                                    createAndAppendValue(slot.analysis.initialColor, localAnalysis.avg);

                                    createAndAppendValue(slot.analysis.initialColor);

                                    createAndAppendValue(slot.analysis.initialColor);

                                }

                                table.appendChild(row);

                            }

                        });

                    }


                    setTimeout(() => {

                        if (this.container) {
                            this.downloadImage(
                                params.fileName,
                                this.container
                            );
                        }

                    }, 1000);

                }

            }

        });
    }



}