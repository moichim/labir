import domtoimage from 'dom-to-image';
import { Instance } from "../../../file/instance";
import { ThermalGroup } from "../../../hierarchy/ThermalGroup";
import { Batch } from "../../../loading/batch/Batch";
import { TimeFormat } from "../../../utils/time/formatting";
import { AbstractAreaAnalysis } from "../../analysis/internals/area/AbstractAreaAnalysis";
import { PointAnalysis } from "../../analysis/internals/point/PointAnalysis";
import { CallbacksManager } from "../../callbacksManager";
import { AnalysisSyncDrive } from "../analysisSync";

export type GroupExportPNGParams = {
    columns?: number,
    width?: number,
    showAnalysis?: boolean,
    fileName?: string,
    backgroundColor?: string
}

type GroupExportPNGParamsMandatory = {
    columns: number,
    width: number,
    showAnalysis: boolean,
    fileName: string,
    backgroundColor: string
}

export class GroupExportPNG {

    public static FONT_SIZE_NORMAL = "16px";
    public static FONT_SIZE_SMALL = "12px";
    public static COLOR_BASE = "black";
    public static COLOR_GRAY = "gray";
    public static COLOR_LIGHT = "lightgray";
    public static WIDTH = "1600px";
    public static FONT_FAMILY = "sans-serif";
    public static GAP_BASE = "10px";
    public static GAP_SMALL = "5px";

    public static DEFAULT_PROPS: GroupExportPNGParams = {
        columns: 3,
        width: 1600,
        showAnalysis: true,
        backgroundColor: "white"
    }

    /** Alias to the group this exporter is attached to */
    protected get group() {
        return this.drive.parent;
    }

    /** Temporary local group is used to build a mirror of images. */
    protected localGroup?: ThermalGroup;

    protected _exporting: boolean = false;
    public get exporting() { return this._exporting; }
    protected readonly onExportingStatusChange = new CallbacksManager<(status: boolean) => void>();

    /** The wrapper contains the entire layout, but is invisible to the user */
    protected wrapper?: HTMLDivElement;

    /** Main DOM element to which the entire layout is inserted */
    protected container?: HTMLDivElement;

    /** The header element with title, description and other stuff */
    protected header?: HTMLDivElement;

    /** Images are mounted to this DIV */
    protected list?: HTMLDivElement;



    public constructor(
        public readonly drive: AnalysisSyncDrive
    ) { }




    /** 
     * Indicate the exporting status. Internal method only! 
     */
    protected setExporting(
        value: boolean
    ) {
        this._exporting = value;
        this.onExportingStatusChange.call(this._exporting);
    }


    /** 
     * A helper function creating a DIV with default styles 
     */
    protected createElementWithText<E extends HTMLElement>(
        element: string,
        text: string,
        fontSize: string = GroupExportPNG.FONT_SIZE_NORMAL,
        fontWeight: CSSStyleDeclaration["fontWeight"] = "normal",
        color: string = GroupExportPNG.COLOR_BASE
    ): E {
        const el = document.createElement(element) as E;
        el.innerHTML = text;
        el.style.fontSize = fontSize;
        el.style.lineHeight = "1em";
        el.style.fontWeight = fontWeight;
        el.style.color = color;
        return el;

    }


    protected buildWrapper(): HTMLDivElement {
        const element = document.createElement("div");

        element.style.position = "absolute";
        element.style.width = "0px";
        element.style.height = "0px";
        element.style.overflow = "hidden";

        return element;
    }


    protected buildContainer(
        width: number = GroupExportPNG.DEFAULT_PROPS.width!,
        backgroundColor: string = GroupExportPNG.DEFAULT_PROPS.backgroundColor!
    ): HTMLDivElement {

        const element = document.createElement("div");
        element.style.width = width.toFixed(0) + "px";
        element.style.fontSize = GroupExportPNG.FONT_SIZE_NORMAL;
        element.style.fontFamily = GroupExportPNG.FONT_FAMILY;
        element.style.color = GroupExportPNG.COLOR_BASE;
        element.style.backgroundColor = backgroundColor;

        return element;

    }


    protected buildHeader(): HTMLDivElement {

        const element = document.createElement("div");
        element.style.padding = GroupExportPNG.GAP_BASE;
        element.style.border = "1px lightgray solid";

        const title = this.createElementWithText<HTMLDivElement>(
            "div",
            this.group.label,
            undefined,
            "bold"
        );
        element.appendChild(title);

        if (this.group.description) {
            const description = this.createElementWithText<HTMLDivElement>(
                "div",
                this.group.description,
                GroupExportPNG.FONT_SIZE_SMALL, "normal",
                GroupExportPNG.COLOR_BASE
            );
            description.style.paddingTop = GroupExportPNG.GAP_SMALL;
            element.appendChild(description);
        }

        // Create the summary

        const orderedFiles = this.group.files.value.sort((a, b) => { return a.timestamp - b.timestamp });
        const dateFrom = TimeFormat.human(orderedFiles[0].timestamp);
        const dateTo = TimeFormat.human(orderedFiles[orderedFiles.length - 1].timestamp)

        const summary = this.createElementWithText<HTMLDivElement>(
            "div",
            `Contains ${this.group.files.value.length} files dated from ${dateFrom} to ${dateTo}. Minimal temperature: ${this.group.registry.minmax.value?.min.toFixed(3)} °C. Maximal temperature: ${this.group.registry.minmax.value?.max.toFixed(3)} °C.`,
            GroupExportPNG.FONT_SIZE_SMALL,
            undefined,
            GroupExportPNG.COLOR_GRAY
        );
        summary.style.paddingTop = GroupExportPNG.GAP_SMALL;

        element.appendChild(summary);

        const colophon = this.createElementWithText<HTMLDivElement>(
            "div",
            `Image exported at ${TimeFormat.human(new Date)} at <i>${window.location.href}</i> using LabIR Edu web viewer. More information at <i>https://edu.labir.cz</i>.`,
            GroupExportPNG.FONT_SIZE_SMALL,
            undefined,
            GroupExportPNG.COLOR_GRAY
        );
        colophon.style.paddingTop = GroupExportPNG.GAP_SMALL;

        element.appendChild(colophon);

        return element;

    }


    protected buildList(): HTMLDivElement {

        const element = document.createElement("div");
        element.style.boxSizing = "border-box";
        element.style.width = "100%";
        element.style.display = "flex";
        element.style.flexWrap = "wrap";

        return element;

    }


    protected buildInstance(
        instance: Instance,
        width: number,
        showAnalysis: boolean
    ) {

        const container = document.createElement("div");
        container.style.width = width.toString() + "%";
        container.style.padding = GroupExportPNG.GAP_SMALL;
        container.style.boxSizing = "border-box";

        const wrapper = document.createElement("div");
        container.appendChild(wrapper);

        const title = this.createElementWithText(
            "div",
            `${TimeFormat.human(instance.timeline.currentStep.absolute)}`,
            GroupExportPNG.FONT_SIZE_SMALL,
            "bold"
        );

        wrapper.appendChild(title);

        // Build the image
        if (this.list) {

            this.list.appendChild(container);
            instance.mountToDom(wrapper);
            instance.draw();

            // Transpose all analysis if necessary
            if (showAnalysis) {

                const referenceInstance = this.group.files.value[0];

                if (referenceInstance && referenceInstance.analysis.value.length > 0) {

                    const table = document.createElement("table");
                    table.style.width = "100%";
                    table.style.borderCollapse = "collapse";


                    const header = document.createElement("tr");

                    ["Analysis", "AVG", "MIN", "MAX"].forEach(string => {
                        const el = this.createElementWithText(
                            "th",
                            string,
                            GroupExportPNG.FONT_SIZE_SMALL,
                            undefined,
                            GroupExportPNG.COLOR_GRAY
                        );
                        el.style.padding = GroupExportPNG.GAP_SMALL + "px";
                        el.style.textAlign = "left";
                        header.appendChild(el);
                    });


                    table.appendChild(header);
                    wrapper.appendChild(table);

                    referenceInstance.slots.forEveryExistingSlot((slot, number) => {

                        // Transpose the analysis to temporary instance
                        const localAnalysis = instance.slots.createFromSerialized(slot.serialized, number);

                        if (localAnalysis) {


                            // Create a record into a table

                            const row = document.createElement("tr");

                            const name = this.createElementWithText(
                                "td",
                                slot.analysis.name,
                                GroupExportPNG.FONT_SIZE_SMALL,
                                undefined,
                                slot.analysis.initialColor
                            );

                            name.style.borderTop = `1px solid ${GroupExportPNG.COLOR_LIGHT}`;
                            name.style.padding = `${GroupExportPNG.GAP_SMALL}px 0px ${GroupExportPNG.GAP_SMALL} 0px`;

                            row.appendChild(name);

                            const createAndAppendValue = (
                                color: string,
                                value?: number,
                            ) => {

                                const td = this.createElementWithText(
                                    "td",
                                    value ? value.toFixed(3) + " °C" : "",
                                    GroupExportPNG.FONT_SIZE_SMALL,
                                    undefined,

                                );

                                td.style.borderTop = `1px solid ${GroupExportPNG.COLOR_LIGHT}`;

                                td.style.paddingTop = `${GroupExportPNG.GAP_SMALL}px`;
                                td.style.paddingBottom = `${GroupExportPNG.GAP_SMALL}px`;

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

            }

        }

    }


    /** 
     * Build the entire DOM structure WITHOUT images.
     */
    protected buildDom(
        params: GroupExportPNGParamsMandatory
    ) {

        // Build individual elements
        this.wrapper = this.buildWrapper();
        this.container = this.buildContainer(params.width!);
        this.header = this.buildHeader();
        this.list = this.buildList();

        // Bind elements together
        this.container.appendChild(this.header);
        this.container.appendChild(this.list);
        this.wrapper.appendChild(this.container);
        document.body.prepend(this.wrapper);


    }


    /**
     * Clear everything and remove the DOM
     */
    protected clear() {

        if (this.localGroup) {

            // Unmount the instances from the DOM
            this.localGroup.files.forEveryInstance(instance => instance.unmountFromDom());

            // Remove all the instances
            this.localGroup.files.removeAllInstances();

        }

        if (this.wrapper) {
            document.body.removeChild(this.wrapper)
        }

        // Delete all objects manually
        delete this.wrapper;
        delete this.container;
        delete this.header;
        delete this.list;

        // Delete the temporary group and its parameters
        delete this.localGroup;

    }


    async downloadPng(
        params?: GroupExportPNGParams
    ) {

        // Do nothing if already exporting
        if (this._exporting === true) {
            console.warn(`The group ${this.group.label} is already exporting a PNG image!`);
            return;
        }

        const options = this.getFinalParams(params);

        this.setExporting(true);

        this.buildDom(options);

        const registryId = Math.random().toFixed();

        // Build internal structure
        const manager = this.group.registry.manager;
        const registry = manager.addOrGetRegistry(registryId);
        const group = registry.groups.addOrGetGroup(this.group.id);

        // Assign the local group for further usage
        this.localGroup = group;


        // Mirror the group state to the local objects
        manager.palette.setPalette(this.group.registry.manager.palette.value);
        registry.range.imposeRange(this.group.registry.range.value!);



        // Extract URLS of affected images
        const imagesThermalUrls = this.group.files.sortedFiles.map(file => file.thermalUrl);

        // Store the batch so that it may be used later
        let batch: Batch | undefined = undefined;

        // Request all the images
        imagesThermalUrls.forEach(url => {
            batch = registry.batch.request(url, undefined, group, async () => { });
        });

        // Set listener on the batch resolve event
        batch!.onResolve.set("temporary export listener", results => {

            const width = 100 / options.columns!;

            // Build all recieved instances
            results.forEach(result => {
                if (result instanceof Instance) {
                    this.buildInstance(result, width, options.showAnalysis!);
                }
            });

            // Wait for some time (instances need to render) and then export and cleanup
            setTimeout(() => {

                domtoimage.toPng(this.container!).then((dataUrl: string) => {

                    // Save the image
                    const link = document.createElement("a");
                    link.download = options.fileName!;
                    link.href = dataUrl;
                    link.click();

                    // Clear everything
                    this.clear();

                    // Mark as free
                    this.setExporting(false);

                })
            }, 2000);

        });

    }


    /**
     * Take provided parameters and combine them with defaults and add filename.
     */
    protected getFinalParams(
        params?: GroupExportPNGParams
    ): GroupExportPNGParamsMandatory {

        let fileName = params?.fileName
            ? params.fileName
            : `group__${this.group.label}__export`;

        if (fileName.endsWith(".PNG")) {
            fileName = fileName.replaceAll(".PNG", ".png");
        }

        if (!fileName.endsWith(".png")) {
            fileName = fileName + ".png";
        }

        if (params === undefined) {
            return {
                ...GroupExportPNG.DEFAULT_PROPS,
                fileName
            } as GroupExportPNGParamsMandatory
        }

        return {
            ...GroupExportPNG.DEFAULT_PROPS,
            ...params,
            fileName
        } as GroupExportPNGParamsMandatory

    }

}