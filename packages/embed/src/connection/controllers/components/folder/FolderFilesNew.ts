import { FileInfo, FolderInfo } from "@labirthermal/server";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { GroupProviderElement } from "../../../../hierarchy/providers/GroupProvider";
import icons from "../../../../utils/icons";
import { DisplayMode, displayModeContext, syncAnalysisContext } from "../../../ClientContext";
import { ControlledConsumer } from "../../abstraction/ControlledConsumer";

@customElement("folder-files-new")
export class FolderFiles extends ControlledConsumer {


    @property({ type: Function })
    public onFileClick: (file: FileInfo) => void = () => { };

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void = () => { };

    @property({ type: Function })
    public onFileDelete?: (file: FileInfo) => void = () => { };

    protected icon = icons.image.outline("icon");

    @property({ type: String })
    public compact: boolean = false;



    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            gap: 2em;
            height: 100%;
            position: relative;
            width: 100%;
        }

        :host([displaymode="grid"]) {
            grid-column: 2;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1em;
        
        }

        :host([displaymode="table"]) {
            grid-column: 2;
            display: table;
            border-spacing: 1em;
            margin: -1em;
        }`;




    connectedCallback(): void {
        super.connectedCallback();
        this.content.subscribeToFolderUpdates( this );
        this.content.subscribeToFilesUpdates( this );
    }


    protected renderFile(file: FileInfo): TemplateResult {

        const callback = this.onFileClick !== undefined
            ? () => this.onFileClick(file)
            : undefined;

        return html`<server-file-thumbnail
    .file=${file}
    .folder=${this.content.folder}
    .onChange=${this.onChange}
    .onFileDelete=${this.onFileDelete}
    .onFileClick=${callback}
></server-file-thumbnail>`;
    }

    protected render(): unknown {


        if (this.content.files === undefined || this.content.files.length === 0) {
            return nothing;

        }

        return html`
        <section class="section__files">
            ${this.content.files?.map(subfolder => this.renderFile(subfolder))}
        </section>`;
    }


}