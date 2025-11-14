import { Instance } from "@labirthermal/core";
import { FileInfo } from "@labirthermal/server";
import { customElement, property } from "lit/decorators.js";
import { AbstractFileAnalysisButton } from "./AbstractFileAnalysisButton";

@customElement("file-analysis-restore-button")
export class FileAnalysisRestoreButton extends AbstractFileAnalysisButton {

    public label = "";

    icon = "restore";
    public iconStyle = "outline";

    tooltip = "Načíst analýzy uložené na serveru";

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void;


    public onInstanceCreated(): void {}



    protected onClick = async (file: Instance) => {

        if (
            this.info
            && this.info.analyses
        ) {

            // Remove all analyses from the instance
            this.file?.analysis.value.forEach((analysis) => {
                file.analysis.layers.removeAnalysis(analysis.key);
            });

            // Create new analyses from the file info
            this.info.analyses.forEach((analysis, slot) => {
                file.slots.createAnalysisFromSerialized(analysis, slot);
            });

            // Select all layers after restoring
            file.analysis.layers.selectAll();

        }
    }


    public onFailure(): void { }


}