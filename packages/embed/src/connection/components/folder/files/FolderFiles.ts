import { FileInfo, FolderInfo } from "@labirthermal/server";
import { consume } from "@lit/context";
import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { GroupProviderElement } from "../../../../hierarchy/providers/GroupProvider";
import icons from "../../../../utils/icons";
import { DisplayMode, displayModeContext, syncAnalysisContext } from "../../../ClientContext";
import { ClientConsumer } from "../../ClientConsumer";

@customElement("folder-files")
export class FolderFiles extends ClientConsumer {

    @property({ type: String })
    public slug!: string;

    @property({ type: Object, reflect: false })
    public folder!: FolderInfo;

    @property({ type: Object, reflect: false })
    public files?: FileInfo[];

    @property({ type: Function })
    public onFileClick: (file: FileInfo) => void = () => { };

    @property({ type: Function })
    public onChange?: (file: FileInfo) => void = () => { };

    @property({ type: Function })
    public onFileDelete?: (file: FileInfo) => void = () => { };

    protected icon = icons.image.outline("icon");

    @property({ type: String })
    public compact: boolean = false;


    @property({ type: String, reflect: true })
    @consume({ context: displayModeContext, subscribe: true })
    protected displayMode: DisplayMode = DisplayMode.GRID;

    @consume({ context: syncAnalysisContext, subscribe: true })
    protected syncAnalyses: boolean = false;


    protected groupProviderRef: Ref<GroupProviderElement> = createRef();

    connectedCallback(): void {
        super.connectedCallback();

        
    }



    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        this.propagateAnalysisSync(this.syncAnalyses);

    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        // Add listener for processing end to refresh the component
        this.groupProviderRef.value?.group.registry.onProcessingEnd.set(this.UUID, () => {
            this.groupProviderRef.value?.group.registry.range.applyMinmax();
        });
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();

        // Remove listener for processing end
        this.groupProviderRef.value?.group.registry.onProcessingEnd.delete(this.UUID);
    }

    protected propagateAnalysisSync(
        on: boolean
    ): void {

        const provider = this.groupProviderRef.value;

        if (provider) {

            const group = provider.group;
            const sync = group.analysisSync;

            const hasChanged = on !== sync.value;

            if (hasChanged) {

                if (on) {
                    const firstFileWithAnalyses = group.files.value.find(
                        instance => instance.analysis.value.length > 0
                    )
                        ?? group.files.value[0]
                        ?? undefined;

                    if (firstFileWithAnalyses) {
                        sync.turnOn(firstFileWithAnalyses);
                    }

                }
                else {
                    sync.turnOff();
                }

            }

        }

    }





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
            
        }`;

    protected renderFile(file: FileInfo): TemplateResult {

        const callback = this.onFileClick !== undefined
            ? () => this.onFileClick(file)
            : undefined;

        return html`<server-file-thumbnail
    .file=${file}
    .folder=${this.folder}
    .onChange=${this.onChange}
    .onFileDelete=${this.onFileDelete}
    .onFileClick=${callback}
></server-file-thumbnail>`;
    }

    protected render(): unknown {


        if (this.files === undefined || this.files.length === 0) {
            return nothing;

        }

        return html`<group-provider slug="${this.slug}" autoclear="true" ${ref(this.groupProviderRef)} batch="true">
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