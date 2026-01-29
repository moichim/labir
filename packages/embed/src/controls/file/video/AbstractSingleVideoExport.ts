import { Instance } from "@labirthermal/core";
import { html, nothing } from "lit";
import { state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref, Ref } from "lit/directives/ref.js";
import { Quality, QUALITY_VERY_HIGH } from "mediabunny";
import { ISingleVideoExportElement, RecordingPhase, SingleVideoRenderProps, VideoExportSkin } from "./ISingleVideoExportElement";
import { FileConsumer } from "../../../hierarchy/consumers/FileConsumer";
import { FileProviderElement } from "../../../hierarchy/providers/FileProvider";

export abstract class AbstractSingleVideoExport extends FileConsumer implements ISingleVideoExportElement {

    public innerFileProviderRef: Ref<FileProviderElement> = createRef();
    public exportedDivRef: Ref<HTMLDivElement> = createRef();

    public get slug(): string {
        return [
            "single-video-export",
            this.file?.fileName ?? "no-file",
            this.UUID
        ].join("__")
    }

    public get outerFile(): Instance | undefined {
        return this.file;
    }


    public get innerFile(): Instance | undefined {
        return this.innerFileProviderRef.value?.file;
    }

    public get exportedElement(): HTMLElement | undefined {
        return this.exportedDivRef.value;
    }

    @state() public analysis1?: string;
    @state() public analysis2?: string;
    @state() public analysis3?: string;
    @state() public analysis4?: string;
    @state() public analysis5?: string;
    @state() public analysis6?: string;
    @state() public analysis7?: string;

    @state()
    public recordingPhase: RecordingPhase = RecordingPhase.IDLE;

    @state()
    public recordingPhaseProgress: number = 0;

    public setRecordingPhase( phase: RecordingPhase ): void {
        this.recordingPhase = phase;
    }

    public setRecordingPhaseProgress( progress: number ): void {
        this.recordingPhaseProgress = progress;
    }

    @state()
    public renderProps: SingleVideoRenderProps = {

        hasHistogram: true,
        hasThermalScale: true,
        hasAnalysis: false,
        hasTimeline: false,
        isVertical: false,

        exportFrameWidth: 1200,
        exportFramePadding: 15,
        exportFrameGap: 10,

        fileName: "exported-video",
        jpegQuality: 0.92,
        mp4Quality: QUALITY_VERY_HIGH,

        skin: VideoExportSkin.LIGHT
    }

    public setHasHistogram(value: boolean): void {
        this.renderProps.hasHistogram = value;
        this.requestUpdate();
    }

    public setHasThermalScale(value: boolean): void {
        this.renderProps.hasThermalScale = value;
        this.requestUpdate();
    }

    public setHasAnalysis(value: boolean): void {
        this.renderProps.hasAnalysis = value;
        this.requestUpdate();
    }

    public setHasTimeline(value: boolean): void {
        this.renderProps.hasTimeline = value;
        this.requestUpdate();
    }

    public setIsVertical(value: boolean): void {
        this.renderProps.isVertical = value;
        this.requestUpdate();
    }

    public setExportFramePadding(value: number): void {
        this.renderProps.exportFramePadding = value;
        this.requestUpdate();
    }

    public setExportFrameGap(value: number): void {
        this.renderProps.exportFrameGap = value;
        this.requestUpdate();
    }

    public setExportFrameWidth(value: number): void {
        this.renderProps.exportFrameWidth = value;
        this.requestUpdate();
    }

    public setFileName(value: string): void {
        this.renderProps.fileName = value;
        this.requestUpdate();
    }

    public setJpegQuality(value: number): void {
        this.renderProps.jpegQuality = value;
        this.requestUpdate();
    }

    public setMp4Quality(value: Quality): void {
        this.renderProps.mp4Quality = value;
        this.requestUpdate();
    }

    public setSkin(value: VideoExportSkin): void {
        this.renderProps.skin = value;
        this.requestUpdate();
    }

    

    protected renderWrappedWithFileProvider(
        content: unknown,
    ): unknown {
        const file = this.file;

        if ( !file ) {
            return nothing;
        }

        return html`<file-provider
            ${ref(this.innerFileProviderRef)}
            thermal=${file.thermalUrl}
            batch="true"
            autoclear="true"
            analysis1=${ifDefined(this.analysis1)}
            analysis2=${ifDefined(this.analysis2)}
            analysis3=${ifDefined(this.analysis3)}
            analysis4=${ifDefined(this.analysis4)}
            analysis5=${ifDefined(this.analysis5)}
            analysis6=${ifDefined(this.analysis6)}
            analysis7=${ifDefined(this.analysis7)}
            style="display: contents;"
            keepInitialHistogram="true"
        >
            ${content}
        </file-provider>`;
    }

    protected renderWrappedWithNestedProviders(
        content: unknown,
    ): unknown {

        const registry = this.registry;
        const group = this.group;

        if ( !registry || !group ) {
            return nothing;
        }

        const palette = registry.palette.value;
        const from = registry.range.value?.from ?? undefined;
        const to = registry.range.value?.to ?? undefined;

        return html`<registry-provider
            slug=${this.slug}
            autoclear="true"
            palette=${palette}
            from=${ifDefined(from)}
            to=${ifDefined(to)}
            style="display: contents;"
        >
            <group-provider
                slug=${this.slug}
                autoclear="true"
                batch="true"
                style="display: contents;"
            >
                ${this.renderWrappedWithFileProvider(content)}
            </group-provider>
        </registry-provider>`;

    }






}