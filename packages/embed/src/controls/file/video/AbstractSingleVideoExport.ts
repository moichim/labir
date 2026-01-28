import { FileConsumer } from "packages/embed/src/hierarchy/consumers/FileConsumer";
import { ISingleVideoExportElement, RecordingPhase, SingleVideoRenderProps } from "./ISingleVideoExportElement";
import { state } from "lit/decorators.js";
import { Quality, QUALITY_VERY_HIGH } from "mediabunny";
import { createRef, Ref } from "lit/directives/ref";
import { FileProviderElement } from "packages/embed/src/hierarchy/providers/FileProvider";
import { Instance } from "@labirthermal/core";

export abstract class AbstractSingleVideoExport extends FileConsumer implements ISingleVideoExportElement {

    protected innerFileProviderRef: Ref<FileProviderElement> = createRef();
    protected exportedDivRef: Ref<HTMLDivElement> = createRef();



    public get innerFile(): Instance | undefined {
        return this.innerFileProviderRef.value?.file;
    }

    public get exportedElement(): HTMLElement | undefined {
        return this.exportedDivRef.value;
    }



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
        hasAnalysis: true,
        hasTimeline: true,
        isVertical: false,

        exportFrameWidth: 1200,
        exportFramePadding: 15,

        fileName: "exported-video",
        jpegQuality: 0.92,
        mp4Quality: QUALITY_VERY_HIGH
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







}