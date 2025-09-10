import { FileInfo, FolderInfo } from "@labir/server";
import { ClientConsumer } from "../ClientConsumer";
import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import { consume } from "@lit/context";
import { ThermalGroup } from "@labir/core";
import { groupContext } from "../../../hierarchy/providers/context/GroupContext";

@customElement("folder-remove-analyses")
export class FolderRemoveAllAnalyses extends ClientConsumer {

    @property({ type: Object, reflect: false })
    public folder!: FolderInfo;

    @property({ type: Object, reflect: false })
    public files?: FileInfo[];

    @property({ type: Function })
    public onChange?: (file: FileInfo[]) => void = () => {};

    @consume({ context: groupContext, subscribe: true })
    group!: ThermalGroup;

    protected render(): unknown {
        return html`<thermal-btn
            icon="trash"
            iconStyle="micro"
            tooltip="Odstranit všechny analýzy z aktuálního zobrazení (nikoliv na serveru)."
            @click=${() => {

                this.log( this.group );

                if ( this.group !== undefined) {

                    this.log( "removing analyses" );

                    this.group.files.value.forEach( instance => {

                        instance.analysis?.layers.all.forEach( analysis => {
                            instance.analysis?.layers.removeAnalysis( analysis.key );
                        } );

                    } );

                }
            }}
        >
        </thermal-btn>`;
    }

}