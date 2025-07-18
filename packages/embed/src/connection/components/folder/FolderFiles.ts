import { customElement, property } from "lit/decorators.js";
import { ClientConsumer } from "../ClientConsumer";
import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { FileInfo } from "packages/server/client/dist";
import { TimeFormat } from "@labir/core";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { consume } from "@lit/context";
import { DisplayMode, displayModeContext } from "../../ClientContext";

@customElement("folder-files")
export class FolderFiles extends ClientConsumer {

    @property({ type: Object, reflect: false })
    public folder!: FolderInfo;

    @property({ type: Object, reflect: false })
    public files?: FileInfo[];

    @property({ type: Function })
    public onFileClick: (file: FileInfo) => void = () => {};

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void = () => {};

    @property({ type: Function})
    public onFileDelete?: ( file: FileInfo ) => void = () => {};

    protected icon = icons.image.outline("icon");

    @property({ type: String })
    public compact: boolean = false;


    @property({ type: String, reflect: true })
    @consume({ context: displayModeContext, subscribe: true })
    protected displayMode: DisplayMode = DisplayMode.GRID;


    public static styles?: CSSResultGroup | undefined = css`
        :host {
            color: var(--thermal-foreground);
            font-size: var(--thermal-fs);
            display: block;
        }


        .list-label {

            font-size: calc( var(--thermal-fs) * .8);
            color: var(--thermal-slate);
            line-height: 1;
            margin: 0;
            padding: 0;
            font-weight: normal;
            padding-bottom: calc(var(--thermal-gap) * 0.5);
        
        }

        .layout {
            display: grid;
            grid-template-columns: 1em 1fr;
            gap: 2em;
            height: 100%;
            position: relative;
        }

        .section__range {
            grid-column: 1 / -1;
        }

        .section__tools {
            grid-column: 1;
            position: sticky;
            top: 290px;
            align-self: start;
            z-index: 1000;
        }

        :host([displaymode="grid"]) {
        
            .section__files {
                grid-column: 2;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1em;
            }
        
        }

        :host([displaymode="table"]) {

            .section__files {
                grid-column: 2;
                display: table;
                border-spacing: 1em;
                margin: -1em;
            }
            
        }

        


    `;

    protected renderFile(file: FileInfo): TemplateResult {

        const label = file.label;
        const description = file.description;

        const time = TimeFormat.human(file.timestamp);


        const callback = this.onFileClick !== undefined
            ? () => this.onFileClick(file)
            : undefined;


        return html`
        
        <server-file-thumbnail
            .file=${file}
            .folder=${this.folder}
            .onChange=${this.onChange}
            .onFileDelete=${this.onFileDelete}
            .onFileClick=${callback}
        ></server-file-thumbnail>
        
        `;
    }

    protected render(): unknown {


        if (this.files === undefined || this.files.length === 0) {
            return nothing;

        }

        const slug = this.folder.path + "__list";

        return html`

        <!--
        <div class="bar">
            <h2 class="list-label">
                <span><strong>${this.files.length} soubory</strong> ve složce <i>${this.folder.name}</i>:</span>
            </h2>
            <div class="display-settings">

            </div>
        </div>
        -->

            <group-provider slug="${slug}" autoclear="true">

                <main class="layout">

                <section class="section__tools">
                    <group-tool-bar></group-tool-bar>
                </section>

                <section class="section__files">
                    ${this.files?.map(subfolder => this.renderFile(subfolder))}
                </section>

                </main>
            </group-provider>`;
    }


}