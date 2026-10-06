import type { Instance, ThermalFileFailure } from "@labirthermal/core";
import { consume } from "@lit/context";
import { t } from "i18next";
import { css, html, nothing } from "lit";
import type { PropertyValues } from "lit";
import { property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { AbstractFileConsumer } from "../../../hierarchy/consumers/AbstractFileConsumer";
import { fileAnalysisListContext } from "../../../hierarchy/providers/context/FileContexts";
import type { AnalysisList } from "../../../hierarchy/providers/context/FileContexts";
import { interactiveAnalysisContext } from "../../../hierarchy/providers/context/ManagerContext";
import { T } from "../../../translations/Languages";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import { optionalBooleanConverter } from "./AnalysisTableOptions";
import type { AnalysisTableMode } from "./AnalysisTableOptions";

export class FileAnalysisTableElement extends AbstractFileConsumer {

    @property({ type: String })
    public mode: AnalysisTableMode = "full";

    @property({ attribute: "show-range-propagator", converter: optionalBooleanConverter })
    public showRangePropagator?: boolean;

    @property({ attribute: "selection-enabled", converter: optionalBooleanConverter })
    public selectionEnabled?: boolean;

    @property({ attribute: "edit-enabled", converter: optionalBooleanConverter })
    public editEnabled?: boolean;

    @property({ attribute: "graph-activation-enabled", converter: booleanConverter(true) })
    public graphActivationEnabled: boolean = true;

    @consume({ context: interactiveAnalysisContext, subscribe: true })
    @property({ converter: booleanConverter(false) })
    public interactiveanalysis: boolean = false;

    @property({ converter: booleanConverter(false) })
    public forceinteractiveanalysis: boolean = false;

    @consume({ context: fileAnalysisListContext, subscribe: true })
    @state()
    protected analysis: AnalysisList = [];

    private boundFile?: Instance;

    private readonly selectionChanged = () => this.requestUpdate();

    protected get interactive(): boolean {
        return this.interactiveanalysis || this.forceinteractiveanalysis;
    }

    protected get allowsSelection(): boolean {
        return this.selectionEnabled ?? this.interactive;
    }

    protected get allowsEdit(): boolean {
        return this.editEnabled ?? this.interactive;
    }

    protected get showsRangePropagator(): boolean {
        return this.showRangePropagator ?? this.interactive;
    }

    private get allSelected(): boolean {
        return this.analysis.length > 0 && this.analysis.every(analysis => analysis.selected);
    }

    public onInstanceCreated(): void {
        this.requestUpdate();
    }

    public onFailure(error: ThermalFileFailure): void {
        this.log(error);
    }

    connectedCallback(): void {
        super.connectedCallback();
        this.bindFile();
    }

    disconnectedCallback(): void {
        this.unbindFile();
        super.disconnectedCallback();
    }

    protected updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);
        if (changedProperties.has("file")) {
            this.bindFile();
        }
    }

    private bindFile(): void {
        if (this.boundFile === this.file || !this.isConnected) {
            return;
        }
        this.unbindFile();
        this.boundFile = this.file;
        this.boundFile?.analysis.layers.onSelectionChange.set(this.UUID, this.selectionChanged);
    }

    private unbindFile(): void {
        this.boundFile?.analysis.layers.onSelectionChange.delete(this.UUID);
        this.boundFile = undefined;
    }

    public static styles = css`
        :host {
            display: block;
            width: 100%;
            min-width: 0;
            max-width: 100%;
            contain: inline-size;
            box-sizing: border-box;
            color: var(--thermal-foreground);
        }

        .overflow {
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
            overflow-x: auto;
            overflow-y: hidden;
        }

        table {
            width: max-content;
            min-width: 100%;
            margin: 0;
            table-layout: auto;
            box-sizing: border-box;
            border-collapse: collapse;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
            font-size: var(--thermal-fs-sm);
        }

        th {
            text-align: left;
            white-space: nowrap;
            padding: .5em;
        }

        table.compact th {
            padding: .25em;
        }

        file-analysis-table-row:not(:last-child) {
            border-bottom: var(--thermal-border-width) dotted var(--thermal-slate);
        }

        file-analysis-table-row[selected] {
            background-color: var(--thermal-background);
        }

        .selection {
            display: inline-flex;
            align-items: center;
            gap: .5em;
            padding: 0;
            border: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            cursor: pointer;
        }

        .selection:hover {
            color: var(--thermal-primary);
        }

        .selection-indicator {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
        }

        .selection[aria-pressed="true"] .selection-indicator {
            background: var(--thermal-slate-dark);
        }
    `;

    protected render(): unknown {
        if (this.file === undefined || this.analysis.length === 0) {
            return nothing;
        }

        const compact = this.mode === "compact";

        return html`
            <div class="overflow" tabindex="0" role="region" aria-label=${t(T.analysis)}>
                <table class=${compact ? "compact" : "full"} aria-label=${t(T.analysis)}>
                    <thead>
                        <tr>
                            <th scope="col">
                                ${this.allowsSelection ? html`
                                    <button
                                        type="button"
                                        class="selection"
                                        aria-pressed=${this.allSelected}
                                        @click=${() => {
                                            if (this.allSelected) {
                                                this.file?.analysis.layers.deselectAll();
                                            } else {
                                                this.file?.analysis.layers.selectAll();
                                            }
                                        }}
                                    >
                                        <span class="selection-indicator" aria-hidden="true"></span>
                                        ${t(T.analysis)}
                                    </button>
                                ` : t(T.analysis)}
                            </th>
                            <th scope="col">${t(T.avg)}</th>
                            <th scope="col">${t(T.min)}</th>
                            <th scope="col">${t(T.max)}</th>
                            ${compact ? nothing : html`<th scope="col">${t(T.size)}</th>`}
                            ${!compact && (this.allowsEdit || this.showsRangePropagator)
                                ? html`<th scope="col"></th>`
                                : nothing}
                        </tr>
                    </thead>
                    <tbody>
                        ${repeat(this.analysis, analysis => analysis.key, analysis => html`
                            <file-analysis-table-row
                                .analysis=${analysis}
                                .mode=${this.mode}
                                .interactiveanalysis=${this.allowsSelection}
                                .editEnabled=${this.allowsEdit}
                                .graphActivationEnabled=${this.graphActivationEnabled}
                                .showRangePropagator=${this.showsRangePropagator}
                            ></file-analysis-table-row>
                        `)}
                    </tbody>
                </table>
            </div>
        `;
    }
}
