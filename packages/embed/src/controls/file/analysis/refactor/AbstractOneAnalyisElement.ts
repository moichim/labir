import { AbstractAnalysis, availableAnalysisColors } from "@labirthermal/core";
import { AbstractFileConsumer, BtnSizes, BtnVariants } from "../../../../index.export";
import { property } from "lit/decorators/property.js";
import { html, nothing, PropertyValues } from "lit";

/**
 * A common basis for all components serving as wrappers around a single analysis. It provides the necessary private and protected bindings to the internal analysis object.
 */
export abstract class AbstractOneAnalysisElement extends AbstractFileConsumer {

    @property({ type: Object })
    public analysis?: AbstractAnalysis;

    protected get selected(): boolean | undefined { return this.analysis?.selected; }

    protected get analysisName(): string | undefined { return this.analysis?.name; }
    protected get analysisType(): string | undefined { return this.analysis?.getType(); }

    protected get min(): number | undefined { return this.analysis?.min; }
    protected get max(): number | undefined { return this.analysis?.max; }
    protected get avg(): number | undefined { return this.analysis?.avg; }

    protected get hasMin(): boolean | undefined { return this.analysis?.graph.state.MIN; }
    protected get hasMax(): boolean | undefined { return this.analysis?.graph.state.MAX; }
    protected get hasAvg(): boolean | undefined { return this.analysis?.graph.state.AVG; }

    protected get top(): number | undefined { return this.analysis?.top; }
    protected get bottom(): number | undefined { return this.analysis?.bottom; }
    protected get left(): number | undefined { return this.analysis?.left; }
    protected get right(): number | undefined { return this.analysis?.right; }
    protected get height(): number | undefined { return this.analysis?.height; }
    protected get width(): number | undefined { return this.analysis?.width; }

    protected get color(): string | undefined { return this.analysis?.color; }
    protected get initialColor(): string | undefined { return this.analysis?.initialColor; }

    protected get hasGraph(): boolean | undefined { return this.file?.timeline.isSequence !== undefined; }


    protected setTop(
        value: number
    ): void {
        if (this.analysis) {
            this.analysis.setTop(value);
        }
    }

    protected setBottom(
        value: number
    ): void {
        if (this.analysis) {
            this.analysis.setBottom(value);
        }
    }


    protected setLeft(
        value: number
    ): void {
        if (this.analysis) {
            this.analysis.setLeft(value);
        }
    }


    protected setRight(
        value: number
    ): void {
        if (this.analysis) {
            this.analysis.setRight(value);
        }
    }


    protected setWidth(
        value: number
    ): void {
        if (this.analysis) {
            this.analysis.setWidth(value);
        }
    }


    protected setHeight(
        value: number
    ): void {
        if (this.analysis) {
            this.analysis.setHeight(value);
        }
    }

    protected setHasMin(
        value: boolean
    ): void {
        if (this.analysis) {
            this.analysis.graph.setMinActivation(value);
        }
    }

    protected setHasMax(
        value: boolean
    ): void {
        if (this.analysis) {
            this.analysis.graph.setMaxActivation(value);
        }
    }


    protected setHasAvg(
        value: boolean
    ): void {
        if (this.analysis) {
            this.analysis.graph.setAvgActivation(value);
        }
    }


    protected setSelected(): void {
        if (this.analysis) {
            this.analysis.setSelected();
        }
    }


    protected setDeselected(): void {
        if (this.analysis) {
            this.analysis.setDeselected();
        }
    }


    public setColor(
        value: string
    ): void {
        if (this.analysis) {
            this.analysis.setColor(value);
        }
    }


    public setInitialColor(
        value: string
    ): void {
        if (this.analysis) {
            this.analysis.setInitialColor(value);
        }
    }


    /** An internal listener ID that might not be accidently overriden by subclasses */
    private _UUID_ANALYSIS_LISTENER?: string;

    /** A dynamically allocated internal listener for core object changes */
    private get UUID_ANALYSIS_LISTENER(): string {
        if (this._UUID_ANALYSIS_LISTENER === undefined) {
            this._UUID_ANALYSIS_LISTENER = this.UUID + "-analysis-listener";
        }
        return this._UUID_ANALYSIS_LISTENER;
    }


    /**
     * This is a key method that binds all internal changes in the analysis to the component's redraw. It is called when the component is hydrated with a new analysis.
     */
    private hydrateAnalysis(
        analysis: AbstractAnalysis
    ): void {

        const callback = this.requestUpdate.bind(this);

        // Redraw on any change in the analysis itself
        analysis.onSetName.set(this.UUID, callback);
        analysis.onDeselected.set(this.UUID, callback);
        analysis.onSerializableChange.set(this.UUID, callback);
        analysis.onMoveOrResize.set(this.UUID, callback);
        analysis.onSetColor.set(this.UUID, callback);
        analysis.onSetInitialColor.set(this.UUID, callback);
        analysis.onValues.set(this.UUID, callback);
        analysis.graph.onGraphActivation.set(this.UUID, callback);
        analysis.graph.onGraphData.set(this.UUID, callback);
        analysis.graph.onGraphData.set(this.UUID, callback);

        // Refresh on timeline MS change
        analysis.file.timeline.onFrame.set(this.UUID, callback);

    }


    /**
     * This method removes all listeners from the analysis, enabling its safe removal from this component.
     */
    private dehydrateAnalysis(
        analysis: AbstractAnalysis
    ): void {

        // Remove the analysis listeners
        analysis.onSetName.delete(this.UUID);
        analysis.onDeselected.delete(this.UUID);
        analysis.onSerializableChange.delete(this.UUID);
        analysis.onMoveOrResize.delete(this.UUID);
        analysis.onSetColor.delete(this.UUID);
        analysis.onSetInitialColor.delete(this.UUID);
        analysis.onValues.delete(this.UUID);
        analysis.graph.onGraphActivation.delete(this.UUID);
        analysis.graph.onGraphData.delete(this.UUID);
        analysis.graph.onGraphData.delete(this.UUID);

        // Remove the timeline listeners
        analysis.file.timeline.onFrame.delete(this.UUID);

    }

    updated(_changedProperties: PropertyValues<AbstractOneAnalysisElement>): void {

        super.updated(_changedProperties);

        if ("analysis" in _changedProperties) {

            const oldAnalysis = _changedProperties.get("analysis") as AbstractAnalysis | undefined;

            if (oldAnalysis) {
                this.dehydrateAnalysis(oldAnalysis);
            }

            if (this.analysis) {
                this.hydrateAnalysis(this.analysis);
            }

        }

    }

    connectedCallback() {
        super.connectedCallback();
        if (this.analysis) {
            this.hydrateAnalysis(this.analysis);
        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this.analysis) {
            this.dehydrateAnalysis(this.analysis);
        }
    }

    private renderColorDropdownColorSlot(): unknown {
        return html`<span
            style="display: inline-block; width: 1em; height: 1em;"
        ></span>`;
    }


    protected renderColorDropdown(
        variant?: BtnVariants,
        size?: BtnSizes
    ): unknown {

        if ( this.analysis === undefined ) return nothing;

        const colors = availableAnalysisColors;
        const color = this.initialColor;

        return html`<thermal-dropdown>
            <div slot="invoker">${color}</slot>

            ${colors.map(c => html`<button
                @click=${() => this.setInitialColor(c)}
                .selected=${c === color}
            >${c}</button>`)}
        </thermal-dropdown>`;
    }




}