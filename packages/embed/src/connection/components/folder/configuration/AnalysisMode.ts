import { FileInfo, FolderInfo } from "@labir/server";
import { consume } from "@lit/context";
import { html, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { syncAnalysisContext, syncAnalysisSetterContext } from "../../../ClientContext";
import { AbstractModeBar } from "./AbstractModeBar";
import { ThermalGroup } from "@labir/core";
import { groupContext } from "../../../../hierarchy/providers/context/GroupContext";
import { t } from "i18next";
import { T } from "../../../../translations/Languages";

@customElement("analysis-mode-settings")
export class AnalysisModeElement extends AbstractModeBar {


    @property({ type: Object, reflect: true })
    public folder?: FolderInfo;

    @property({ type: Object })
    public files?: FileInfo[];

    @property({ type: Function })
    public onChangeAll?: (files: FileInfo[]) => void;

    @property({type: Function})
    public onChangeFile?: (file: FileInfo) => void;

    @consume({ context: groupContext, subscribe: true })
    group!: ThermalGroup;



    @consume({ context: syncAnalysisContext, subscribe: true })
    protected syncAnalysis: boolean = false;

    @consume({ context: syncAnalysisSetterContext, subscribe: true })
    protected syncAnalysisSetter: (sync: boolean) => void = () => { };


    protected render(): unknown {
        return html`

            ${this.renderToggle(
            t(T.syncanalyses),
            this.syncAnalysis,
            (checked) => {
                // Remove all analyses first
                if (checked) {
                    this.group.files.value.forEach( file => file.analysis.value.forEach(analysis => file.analysis.layers.removeAnalysis( analysis.key )) );
                }
                // Then turn on the sync
                this.syncAnalysisSetter(checked);
            }
        )}

            ${!this.syncAnalysis
                ? html`<thermal-btn
                    icon="restore"
                    iconStyle="outline"
                    tooltip="Zobrazit uložené analýzy"
                    @click=${() => {

                        if ( !this.files ) {
                            return;
                        }

                        this.log( this.group, this.files );

                        this.files.forEach( def => {

                            if ( !def.analyses ) {
                                return;
                            }

                            this.group.files.value.forEach( instance => {

                                if ( def.fileName === instance.fileName ) {

                                    def.analyses.forEach( analysis => {

                                        const a = instance.slots.createAnalysisFromSerialized( analysis );

                                        a?.setSelected();

                                    } );

                                }

                            } );


                        } );

                        // this.

                    }}
                ></thermal-btn>`
                : nothing
            }

            ${this.folder?.may_manage_files_in
                ? html`<thermal-btn
                    icon="save"
                    tooltip="Uložt aktuální stav všech analýz na server"
                    @click=${async () => {

                        if ( !this.files || !this.client ) {
                            return;
                        }

                        this.files.forEach( async ( defOld ) => {

                            if ( !this.client ) {
                                return;
                            }

                            const newAnalyses: string[] = [];

                            this.group.files.value.forEach( async( instance ) => {

                                if ( defOld.fileName === instance.fileName ) {

                                    instance.analysis.value.forEach( slot => {

                                        newAnalyses.push( slot.toSerialized() );

                                    });
                                }
                            });

                            const request = this.client.routes.post.updateFile( defOld.path, defOld.fileName );

                            request.clearAnalyses();

                            newAnalyses.forEach( analysis => request?.addAnalysis( analysis ) );

                            const result = await request.execute();

                            if ( this.onChangeFile && result.data?.file ) {
                                this.onChangeFile(result.data.file);
                            }

                        });

                    }}
                ></thermal-btn>`
                : nothing
            }

        `;
    }

}