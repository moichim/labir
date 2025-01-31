import { AbstractFilter } from "../filters/AbstractFilter";
import { FilterContainer } from "../filters/FilterContainer";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { ThermalFileReader } from "../loading/workers/ThermalFileReader";
import { ParsedFileBaseInfo, ParsedFileFrame } from "../loading/workers/parsers/structure";
import { AnalysisDrive } from "../properties/analysis/AnalysisDrive";
import { AnalysisDataState } from "../properties/analysisData/AnalysisDataState";
import { AnalysisSlotsState } from "../properties/analysisSlots/AnalysisSlotsDrive";
import { ThermalCursorPositionOrUndefined } from "../properties/drives/CursorPositionDrive";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { TimelineDrive } from "../properties/time/playback/TimelineDrive";
import { RecordingDrive } from "../properties/time/recording/RecordingDrive";
import { AbstractFile } from "./AbstractFile";
import { InstanceDOM } from "./dom/InstanceDom";
import { VisibleLayer } from "./dom/layers/VisibleLayer";
import { ThermalCanvasLayer } from "./dom/layers/thermalCanvasLayer";
import ThermalCursorLayer from "./dom/layers/thermalCursorLayer";
import { ThermalListenerLayer } from "./dom/layers/thermalListenerLayer";
import { FilePngExport } from "./utils/FilePngExport";

export class Instance extends AbstractFile {

    declare public timeline: TimelineDrive;
    declare public analysis: AnalysisDrive;
    declare public analysisData: AnalysisDataState;
    public slots!: AnalysisSlotsState;

    /**
     * Exports
     */
    protected _export?: FilePngExport;
    /** Lazy-loaded `ThermalFileExport` object */
    public get export() {
        if (!this._export) {
            const newExport = new FilePngExport(this);
            this._export = newExport;
        }
        return this._export;
    }


    private constructor(
        public readonly group: ThermalGroup,
        public readonly reader: ThermalFileReader,
        baseInfo: ParsedFileBaseInfo,
        public readonly firstFrame: ParsedFileFrame,
    ) {

        super(
            group,
            baseInfo,
            firstFrame.pixels,
            reader.thermalUrl,
            reader.visibleUrl
        );

        this.setPixels(firstFrame.pixels);

    }

    public createInnerDom(): { canvasLayer: ThermalCanvasLayer; visibleLayer: VisibleLayer; cursorLayer: ThermalCursorLayer; listenerLayer: ThermalListenerLayer; } {
        return {
            canvasLayer: new ThermalCanvasLayer(this),
            visibleLayer: new VisibleLayer(this, this.visibleUrl),
            cursorLayer: new ThermalCursorLayer(this),
            listenerLayer: new ThermalListenerLayer(this),
        }
    }

    public hydrateListener(dom: InstanceDOM): void {

        if (!dom.listenerLayer || !dom.cursorLayer) {
            return;
        }

        const listenerLayerRoot = dom.listenerLayer.getLayerRoot();

        if (!listenerLayerRoot) {
            return;
        }

        dom.parent.analysis.activateListeners(listenerLayerRoot as HTMLDivElement);

        dom.listenerLayer.getLayerRoot().onmousemove = (
            event: MouseEvent
        ) => {

            if (dom.cursorLayer)
                dom.cursorLayer.setShow(true);

            dom.setHover(true);

            const client = dom.parent.meta.width;
            const parent = dom.root.clientWidth;

            const aspect = client / parent;

            const x = Math.round(event.offsetX * aspect);
            const y = Math.round(event.offsetY * aspect);

            dom.parent.group.cursorPosition.recieveCursorPosition({ x, y });

        }

        dom.listenerLayer.getLayerRoot().onmouseleave = () => {

            if (dom.cursorLayer)
                dom.cursorLayer.setShow( false );

            dom.setHover(false);

            dom.parent.group.cursorPosition.recieveCursorPosition(undefined);

        }

    }

    public dehydrateListener(dom: InstanceDOM): void {

        dom.parent.analysis.deactivateListeners();

    }



    public buildServices() {

        this.cursorValue = new CursorValueDrive(this, undefined);
        this.timeline = new TimelineDrive(this, 0, this.timelineData, this.firstFrame);
        this.timeline.init();
        this.recording = new RecordingDrive(this, false);
        this.analysis = new AnalysisDrive(this, []);
        this.analysisData = new AnalysisDataState(this);
        this.slots = new AnalysisSlotsState(this, new Map);

        return this;

    }

    protected formatId(thermalUrl: string) {
        return `instance_${this.group.id}_${thermalUrl}`;
    }

    protected onSetPixels(value: number[]): void {

        value;


        // If this file is loaded, recalculate all side effects
        if (this.dom && this.dom.built) {

            // Redraw
            this.draw();

            // Recalculate the value in the group container
            this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value);

            // Recalculate the value in the local cursor layer
            if (this.group.cursorPosition.value) {

                // Get the new value
                const label = this.group.tool.value.getLabelValue(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y, this);

                // Set the value
                this.dom.cursorLayer?.setLabel(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y, label);
            }

            // Recalculate all analysis
            // this.analysis.value.forEach(analysis => analysis.recalculateValues());
        }

    }

    public getPixelsForHistogram(): number[] {
        return [];
    }


    public static fromService(
        group: ThermalGroup,
        service: ThermalFileReader,
        baseInfo: ParsedFileBaseInfo,
        firstFrame: ParsedFileFrame,
    ): Instance {


        const instance = new Instance(
            group,
            service,
            baseInfo,
            firstFrame
        );

        return instance.buildServices();

    }


    public recieveCursorPosition(
        position: ThermalCursorPositionOrUndefined
    ) {

        // If position
        if (position !== undefined) {

            const x = Math.min( this.meta.width, Math.max( 0, position.x ) );
            const y = Math.min( this.meta.height, Math.max( 0, position.y ) );

            // Get label value from the current tool
            const label = this.group.tool.value.getLabelValue(x, y, this);

            if (this.dom) {

                this.dom.cursorLayer?.setLabel(x, y, label);
                if (this.dom.cursorLayer)
                    this.dom.cursorLayer.setShow( true );
            }


        } else {

            if ( this.dom ) {

                this.dom.cursorLayer?.resetCursor();
                this.dom.cursorLayer?.setShow( false );

            }

        }


        // The cursor value needs to be calculated anyways, no matter the tool
        this.cursorValue.recalculateFromCursor(position);

    }


    public readonly filters = new FilterContainer(this);

    public getInstances() {
        return [this];
    }

    public getAllApplicableFilters(): AbstractFilter[] {

        const manager = this.group.registry.manager.filters.getActiveFilters();
        const registry = this.group.registry.filters.getActiveFilters();
        const group = this.group.filters.getActiveFilters();
        const file = this.filters.getActiveFilters();

        return [
            ...manager,
            ...registry,
            ...group,
            ...file
        ];

    }

    public async applyAllAvailableFilters() {

        // Get new info
        const baseInfo = await this.reader.baseInfo();
        const frameData = await this.reader.frameData(this.timeline.currentStep.index);

        // If the dimensions change, unmount from DOM and mount again to create new canvas
        if (this.root) {

            const container = this.root;
            this.unmountFromDom();
            this.mountToDom(container);

        }

        // Update the base info of the file
        this.meta.set(baseInfo);

        this.setPixels(frameData.pixels);


    }

}