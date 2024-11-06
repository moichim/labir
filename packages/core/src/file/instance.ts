import { AbstractFile } from "./AbstractFile";
import { ThermalCanvasLayer } from "./instanceUtils/thermalCanvasLayer";
import ThermalCursorLayer from "./instanceUtils/thermalCursorLayer";
import { ThermalListenerLayer } from "./instanceUtils/thermalListenerLayer";
import { VisibleLayer } from "./instanceUtils/VisibleLayer";
import { ThermalGroup } from "../hierarchy/ThermalGroup";
import { TimelineDrive } from "../properties/time/playback/TimelineDrive";
import { CursorValueDrive } from "../properties/states/CursorValueDrive";
import { ThermalFileReader } from "../loading/workers/ThermalFileReader";
import { ParsedFileBaseInfo, ParsedFileFrame } from "../loading/workers/parsers/structure";
import { RecordingDrive } from "../properties/time/recording/RecordingDrive";
import { ThermalFileExport } from "./instanceUtils/ThermalFileExports";
import { AnalysisDrive } from "../properties/analysis/AnalysisDrive";
import { ThermalCursorPositionOrUndefined } from "../properties/drives/CursorPositionDrive";
import { AnalysisDataState } from "../properties/analysisData/AnalysisDataState";
import { AnalysisSlotsState } from "../properties/analysisSlots/AnalysisSlotsDrive";
import { AbstractFilter } from "../filters/AbstractFilter";
import { FilterContainer } from "../filters/FilterContainer";
import { FileMeta } from "./FileMeta";

export class Instance extends AbstractFile {

    declare public timeline: TimelineDrive;
    declare public analysis: AnalysisDrive;
    declare public analysisData: AnalysisDataState;
    public slots!: AnalysisSlotsState;

    public exportAsPng(): void {
        this.export.canvasAsPng();
    }
    public exportThermalDataAsSvg(): void {
        throw new Error("Method not implemented.");
    }

    /**
     * Exports
     */
    protected _export?: ThermalFileExport;
    /** Lazy-loaded `ThermalFileExport` object */
    public get export() {
        if (!this._export) {
            const newExport = new ThermalFileExport(this);
            this._export = newExport;
        }
        return this._export;
    }


    protected constructor(
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
/*
        super( 
            group,
            reader.thermalUrl, 
            width, 
            height,
            initialPixels,
            timestamp,
            duration,
            min,
            max,
            frameCount,
            reader.visibleUrl 
        );
        */
        this.setPixels( firstFrame.pixels );

    }

    public postInit() {
        this.canvasLayer = new ThermalCanvasLayer(this);
        this.visibleLayer = new VisibleLayer(this, this.visibleUrl);
        this.cursorLayer = new ThermalCursorLayer(this);
        this.listenerLayer = new ThermalListenerLayer(this);
        this.cursorValue = new CursorValueDrive(this, undefined);
        this.timeline = new TimelineDrive( this, 0, this.timelineData, this.firstFrame );
        this.timeline.init();
        this.recording = new RecordingDrive( this, false );
        this.analysis = new AnalysisDrive(this, []);
        this.analysisData = new AnalysisDataState(this);
        this.slots = new AnalysisSlotsState(this, new Map);
        return this;
    }

    protected formatId( thermalUrl: string ) {
        return `instance_${this.group.id}_${thermalUrl}`;
    }

    protected onSetPixels(value: number[]): void {
        
        value;
       

        // If this file is loaded, recalculate all side effects
        if (this.mountedBaseLayers) {
            
            // Redraw
            this.draw();

            // Recalculate the value in the group container
            this.cursorValue.recalculateFromCursor(this.group.cursorPosition.value);

            // Recalculate the value in the local cursor layer
            if (this.group.cursorPosition.value) {

                // Get the new value
                const label = this.group.tool.value.getLabelValue( this.group.cursorPosition.value.x, this.group.cursorPosition.value.y, this );

                // Set the value
                this.cursorLayer.setLabel(this.group.cursorPosition.value.x, this.group.cursorPosition.value.y, label);
            }

            // Recalculate all analysis
            this.analysis.value.forEach( analysis => analysis.recalculateValues() );
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

        return instance.postInit();

    }


    public mountListener() {

        if (this.root === undefined) {
            console.warn(`The instance ${this.id} does not have a root, therefore the listener can not be mounted.`);
            return;
        }

        this.listenerLayer.mount();
        this.analysis.activateListeners();

        this.listenerLayer.getLayerRoot().onmousemove = (event: MouseEvent) => {

            // Show the cursor
            this.cursorLayer.show = true;

            // Store the local hover state
            this.isHover = true;

            const client = this.width;
            const parent = this.root!.clientWidth;

            const aspect = client / parent;

            const x = Math.round(event.offsetX * aspect);
            const y = Math.round(event.offsetY * aspect);

            this.group.cursorPosition.recieveCursorPosition({ x, y });

        };

        this.listenerLayer.getLayerRoot().onmouseleave = () => {

            this.cursorLayer!.show = false;

            this.isHover = false;

            // Clear the synchronised cursor in any case
            this.group.cursorPosition.recieveCursorPosition(undefined);

        };

    }

    protected unmountListener() {

        this.listenerLayer.unmount();
        this.analysis.deactivateListeners();

    }

    public recieveCursorPosition(
        position: ThermalCursorPositionOrUndefined
    ) {

        // If position
        if ( position !== undefined ) {

            // Get label value from the current tool
            const label = this.group.tool.value.getLabelValue( position.x, position.y, this );
            this.cursorLayer.setLabel( position.x, position.y, label );

            this.cursorLayer.show = true;

        } else {
            this.cursorLayer.show = false;
            this.cursorLayer.resetCursor();
        }

        
        // The cursor value needs to be calculated anyways, no matter the tool
        this.cursorValue.recalculateFromCursor(position);

    }


    public readonly filters = new FilterContainer( this );

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

    public applyAllAvailableFilters() {

        const filters = this.getAllApplicableFilters();

        this.reader.applyFilters( filters );

        const root = this.root;
        const reader = this.reader;
        const group = this.group;

        // this.unmountFromDom();

        // this.group.files.removeFile( this );

        // const newFile = Instance.fromService( group, reader );

    }

}