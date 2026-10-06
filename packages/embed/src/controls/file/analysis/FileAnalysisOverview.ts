import { FileAnalysisTableElement } from "./FileAnalysisTable";
import type { AnalysisTableMode } from "./AnalysisTableOptions";

/** @deprecated Use file-analysis-table with mode="compact". */
export class FileAnalysisOverviewElement extends FileAnalysisTableElement {
    public mode: AnalysisTableMode = "compact";
    public showRangePropagator = false;
}

/** @deprecated Compatibility alias for the original misspelled tag. */
export class FileAnalysisOveerviewElement extends FileAnalysisOverviewElement {}
