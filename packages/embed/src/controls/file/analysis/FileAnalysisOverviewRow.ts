import { consume } from "@lit/context";
import { property } from "lit/decorators.js";
import { interactiveAnalysisContext } from "../../../hierarchy/providers/context/ManagerContext";
import { booleanConverter } from "../../../utils/converters/booleanConverter";
import { FileAnalysisRowElement } from "./FileAnalysisRow";
import type { AnalysisTableMode } from "./AnalysisTableOptions";

/** @deprecated Use file-analysis-table-row with mode="compact". */
export class FileAnalysisOverviewRowElement extends FileAnalysisRowElement {
    public mode: AnalysisTableMode = "compact";
    public showRangePropagator = false;

    @consume({ context: interactiveAnalysisContext, subscribe: true })
    @property({ converter: booleanConverter(false) })
    public interactiveanalysis = false;
}
