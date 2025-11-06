import { customElement, property, state } from "lit/decorators.js";
import { ClientConsumer } from "../../ClientConsumer";
import { html, css, CSSResultGroup, nothing } from "lit";
import { FolderInfo } from "@labir/server";
import { t } from "i18next";
import { T } from "../../../../translations/Languages";
import { booleanConverter } from "../../../../utils/converters/booleanConverter";
import { ThermalBtn } from "packages/embed/src/ui/Btn";

interface PairedFiles {
    lrc: File;
    visual?: File;
    visualUrl?: string;
    preview?: File;
    previewUrl?: string;
}

interface UnmatchedPng {
    file: File;
    url: string;
}

@customElement("folder-upload-form")
export class FolderUploadForm extends ClientConsumer {

    @property({ type: Object })
    public folder!: FolderInfo;

    @property({ type: String })
    public label: string = t(T.upload);

    @property({ type: String })
    public prompt?: string;

    @property({ type: String })
    public variant: string = "primary";

    @property({ type: String })
    private errorMessage: string = "";

    @property({ type: String, converter: booleanConverter(false) })
    private plain: boolean = false;

    @property({ type: String })
    public tooltip?: string;

    @state()
    private selectedFiles: FileList | null = null;

    @state()
    private pairedFiles: PairedFiles[] = [];

    @state()
    private unmatchedPngs: UnmatchedPng[] = [];

    @property({ type: Function })
    public onSuccess?: (files: File[]) => void;

    public static styles?: CSSResultGroup = css`

        :host {
            font-size: var(--thermal-fs);
            color: var(--thermal-foreground);
        }

        .stage {

            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap);
            box-sizing: border-box;
        
        }

        .stage-label {
            font-weight: bold;
            margin: 0;
            padding: 0;
            padding-bottom: .5em;
            font-size: 1.3em;
            line-height: 1.2em;
        }

        .stage-close {
            float: right;
        }

        .stage-preview {

            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 3em;
        
        }

        .stage-preview__actions {

            display: flex;
            flex-direction: column;
            gap: 1em;
            align-items: stretch;
            justify-content: stretch;
        
        }

        .stage-upload {
        
            min-height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        
        }

        label {
            display: block;
            width: 100%;

            cursor: pointer;

            div {
            padding-top: 1em;
                padding-bottom: 2em;
                text-align: center;
            }
        }

        input[type="file"] {
            width: 100%;
            height: 200px;

            cursor: pointer;

            position: relative;
            
            padding: calc(var(--thermal-gap) * 0.5);
            border: 1px solid var(--thermal-slate);
            border-radius: var(--thermal-radius);
            box-sizing: border-box;

            transition: all .3s ease-in-out;

            color: transparent;

            &:hover,
            &:focus {
                background: var( --thermal-slate );
            }

            &::file-selector-button {
                font-size: var( --thermal-fs );
                padding: calc(var(--thermal-gap) * 0.5) calc(var(--thermal-gap) * 1);
                background: var(--thermal-primary);
                color: var( --thermal-background );
                border: 1px solid var(--thermal-slate);
                border-radius: var(--thermal-radius);
                cursor: pointer;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
             }
        }

        .file-item {
            font-size: calc(var(--thermal-fs) * 0.9);
            margin-bottom: calc(var(--thermal-gap) * 0.25);
        }

        .paired-file-group {
            background: var(--thermal-slate-light);
            border-radius: var(--thermal-radius);
            padding: var(--thermal-gap-half);
            margin-top: var(--thermal-gap-half);
        }

        .paired-file-group strong {
            display: block;
            margin-bottom: var(--thermal-gap-quarter);
        }

        .unmatched-files {
        }

        .error {
            background: var(--thermal-danger-light, #fee);
            border: 1px solid var(--thermal-danger, #f00);
            border-radius: var(--thermal-radius);
            padding: calc(var(--thermal-gap) * 0.5);
            margin-top: var(--thermal-gap);
            color: var(--thermal-danger-dark, #800);
            font-size: calc(var(--thermal-fs) * 0.9);
        }

        .paired-files-table {

            width: 100%;
            border-collapse: collapse;

            td:not(:first-child), 
            th:not(:first-child) {
                width: calc(100% / 3);
            }

            img, file-canvas {
                display: block;
                max-width: 100%;
                height: auto;
            }

            .paired-file-group {
            
                td {
                    padding: .5em;
                }

                .centered {
                    display: flex;
                    align-items: center;
                    gap: 1em;
                }


                &.paired-file-group__header {

                    td {
                        vertical-align: middle;
                        border-radius: var(--thermal-radius);
                        background: var( --thermal-background );
                    }

                    thermal-icon {
                        display: inline-block;
                        width: 1.5em;
                        height: 1.5em;
                    }

                    .file-name {
                        font-weight: bold;
                        margin-left: var( --thermal-gap-half );
                    }

                }
            
            }

            .spacer-row {
                td {
                    height: 1em;
                }
            }

        }


.file-preview {

    display: grid;
    grid-template-columns: 5em 1fr;
    gap: .5em;

    .file-preview__icon,
    img {
        
        max-width: 5em;
        height: auto;
    }

    img {
        display: block;
    }

}

.file-preview__icon {

    color: var( --thermal-background );
    background: var( --thermal-slate-dark );
    border-radius: var( --thermal-radius );

    box-sizing: border-box;

    aspect-ratio: 160 / 120;

    display: flex;
    align-items: center;
    justify-content: center;

    thermal-icon {
        width: 1.5em;
        height: 1.5em;
        display: block;
    }
    
}

.file-preview__empty {
    .file-preview__icon {
        background: transparent;
        color: var( --thermal-slate );
        border: 1px dashed var( --thermal-slate );
    }
}


.file-preview__info {
    display: flex;
    flex-direction: column;
    gap: .2em;
}

.file-preview__info > div {
    font-size: .7em;
    color: var( --thermal-slate-dark );
}

.file-preview__label {
    font-size: var( --thermal-fs ) !important;
    color: var( --thermal-foreground );
}




    `;

    protected async handleSubmit(): Promise<boolean> {

        if (this.pairedFiles.length === 0) {
            this.errorMessage = "Vyberte alespoň jeden .lrc soubor";
            return false;
        }

        // Clear previous error
        this.errorMessage = "";

        try {
            const uploadPromises = this.pairedFiles.map(async (pair) => {
                const upload = this.client!.routes.post.uploadFile(this.folder.path, pair.lrc);

                if (pair.visual) {
                    upload.setVisual(pair.visual);
                }
                if (pair.preview) {
                    upload.setPreview(pair.preview);
                }

                const result = await upload.execute();

                if (!result?.success) {
                    throw new Error(`Nepodařilo se nahrát soubor ${pair.lrc.name}: ${result?.message}`);
                }

                return pair.lrc;
            });

            const uploadedFiles = await Promise.all(uploadPromises);

            if (this.onSuccess) {
                this.onSuccess(uploadedFiles);
            }

            this.clearFiles();
            return true;

        } catch (error) {
            this.errorMessage = error instanceof Error ? error.message : "Nepodařilo se nahrát soubory";
            return false;
        }

    }

    private handleFileChange(event: Event) {
        const target = event.target as HTMLInputElement;
        this.clearFiles();
        this.selectedFiles = target.files;
        this.pairFiles();
    }

    private clearFiles() {
        // Revoke old object URLs to prevent memory leaks
        this.pairedFiles.forEach(pair => {
            if (pair.visualUrl) URL.revokeObjectURL(pair.visualUrl);
            if (pair.previewUrl) URL.revokeObjectURL(pair.previewUrl);
        });
        this.unmatchedPngs.forEach(unmatched => URL.revokeObjectURL(unmatched.url));

        this.selectedFiles = null;
        this.pairedFiles = [];
        this.unmatchedPngs = [];
    }

    private pairFiles() {
        if (!this.selectedFiles) return;

        const files = Array.from(this.selectedFiles);
        const lrcFiles = files.filter(file => file.name.toLowerCase().endsWith('.lrc'));
        const pngFiles = files.filter(file => file.name.toLowerCase().endsWith('.png'));

        const paired: PairedFiles[] = [];
        const usedPngs = new Set<File>();

        lrcFiles.forEach(lrcFile => {
            const lrcBaseName = lrcFile.name.replace(/\.lrc$/i, '');
            const key = lrcBaseName.includes('_thermal')
                ? lrcBaseName.substring(0, lrcBaseName.lastIndexOf('_thermal'))
                : lrcBaseName;

            const visualKey = `${key}_visual`;
            const previewKey = `${key}_image_thermal`;

            const visualFile = pngFiles.find(png => png.name.replace(/\.png$/i, '').startsWith(visualKey));
            const previewFile = pngFiles.find(png => png.name.replace(/\.png$/i, '').startsWith(previewKey));

            const pair: PairedFiles = { lrc: lrcFile };
            if (visualFile) {
                pair.visual = visualFile;
                pair.visualUrl = URL.createObjectURL(visualFile);
                usedPngs.add(visualFile);
            }
            if (previewFile) {
                pair.preview = previewFile;
                pair.previewUrl = URL.createObjectURL(previewFile);
                usedPngs.add(previewFile);
            }
            paired.push(pair);
        });

        this.pairedFiles = paired;
        this.unmatchedPngs = pngFiles
            .filter(png => !usedPngs.has(png))
            .map(file => ({ file, url: URL.createObjectURL(file) }));
    }


    private get hasFiles(): boolean {
        return this.pairedFiles.length > 0 || this.unmatchedPngs.length > 0;
    }

    private get maySubmit(): boolean {
        return this.pairedFiles.length > 0;
    }




    private renderDropinArea(): unknown {

        if (this.hasFiles) {
            return nothing;
        }

        return html`<div class="stage_ stage-upload_">
    <label for="file-input">

        <div>Vyberte či přetáhněte sem LRC soubory a případně odpovídající PNG obrázky.</div>
        
        <input 
            type="file" 
            id="file-input"
            @change=${this.handleFileChange}
            multiple
            accept=".lrc,.png"
        />

        

    </label>
</div>`;

    }



    private renderFilePreview(
        label: string,
        file?: File
    ): unknown {

        if (!file) {
            return html`<div class="file-preview file-preview__empty">
    <div class="file-preview__icon">
        <thermal-icon icon="close" variant="outline"></thermal-icon>
    </div>    
    <div class="file-preview__info">
        <div class="file-preview__label">${label}</div>
        <div class="file-preview__name">Žádný soubor</div>
    </div>
</div>`;
        }

        const kbsize = (file.size / 1024).toFixed(3);

        const preview = file.name.toLowerCase().endsWith('.png')
            ? html`<img src=${URL.createObjectURL(file)} alt="File preview" />`
            : html`<div class="file-preview__icon"><thermal-icon icon="document" variant="outline"></thermal-icon></div>`;

        return html`<div class="file-preview file-preview__has-file">
    <div class="file-preview__preview">${preview}</div>
    <div class="file-preview__info">
        <div class="file-preview__label">${label}</div>
        <div class="file-preview__name">${file.name}</div>
        <div class="file-preview__size">${kbsize} kB</div>
    </div>
</div>`;

    }



    private renderPairedFileRow(pair: PairedFiles, index: number): unknown {
        return html`<tr class="paired-file-group paired-file-group__header">
    <td colspan="4">${index + 1}. snímek</td>
</tr>
<tr class="paired-file-group">
    <td></td>
    <td>${this.renderFilePreview("LRC termogram", pair.lrc)}</td>
    <td>${this.renderFilePreview("Snímek ve viditelném spektru", pair.visual)}</td>
    <td>${this.renderFilePreview("Printscreen displeje termokamery", pair.preview)}</td>
</tr>`;
    }


    private renderPairedFiles(): unknown {

        if (this.pairedFiles.length === 0) {
            return nothing;
        }

        return html`
<div class="paired-files">

<h3 class="stage-label">Soubory k uploadu (${this.pairedFiles.length}):</h3>

<table class="paired-files-table">
<tbody>
${this.pairedFiles.map((pair, index) => this.renderPairedFileRow(pair, index))}
</tbody>
</table>

</div>`;
    }

    private renderUnmatchedFiles(): unknown {

        if (this.unmatchedPngs.length === 0) {
            return nothing;
        }

        const titleStart = this.pairedFiles.length === 0
            ? "Nerozpoznané obrázky"
            : "Další nerozpoznané obrázky";

        const title = `${titleStart} (${this.unmatchedPngs.length}) nebudou nahrány`;

        const titleElement = this.pairedFiles.length === 0
            ? html`<h3 class="stage-label">${title}</h3>`
            : html`<thermal-btn
        icon="info"
        iconStyle="outline"
        size="lg"
        @click=${(event: MouseEvent) => {
                    const btn = event.target as ThermalBtn;
                    const parent = btn.parentElement;
                    const list = parent?.querySelector(".unmatched-files__list") as HTMLElement;
                    if (list) {
                        list.style.display = list.style.display === "none" ? "block" : "none";
                    }
                }}
    >${title}</thermal-btn>`;

        const defaultListStyle = this.pairedFiles.length === 0
            ? "block"
            : "none";

        return html`<div class="unmatched-files">

    ${titleElement}

    <div class="unmatched-files__list" style="display: ${defaultListStyle};">

        <table>
            <tbody>
            ${this.unmatchedPngs.map(item => html`
        <tr class="file-item">
            <td><img src=${item.url} alt="Unmatched file preview" /></td>
            <td>${item.file.name}</td>
        </tr>`)}
            </tbody>
        </table>

    </div>

</div>`;
    }

    private renderErrorMessage(): unknown {
        if (!this.errorMessage) {
            return nothing;
        }
        return html`<div class="error">${this.errorMessage}</div>`
    }

    private renderSubmitButton(): unknown {
        if (!this.hasFiles) {
            return nothing
        }

        return html`
<thermal-btn
    @click=${() => this.handleSubmit()}
    disabled=${this.maySubmit ? "false" : "true"}
    .variant=${this.maySubmit ? "primary" : "foreground"}
    icon="upload"
    iconStyle="micro"
    size="lg"
>${this.label}</thermal-btn>
<thermal-btn
    @click=${() => {
                this.clearFiles();
            }}
    .variant="foreground"
    icon="close"
    iconStyle="micro"
    size="lg"
>Vybrat jiné soubory</thermal-btn>`;
    }


    protected renderPreviewAndSubmit(): unknown {

        if (!this.hasFiles) {
            return nothing;
        }

        return html`<div class="stage stage-preview">
    <div class="stage-preview__files">
        ${this.renderPairedFiles()}
        ${this.renderUnmatchedFiles()}
    </div>
    <div class="stage-preview__actions">
        ${this.renderErrorMessage()}
        ${this.renderSubmitButton()}
    </div>
</div>`;

    }


    protected render(): unknown {

        const label = this.label !== undefined
            ? this.label
            : t(T.uploadafile);

        if (!this.isLoggedIn || !this.folder.may_manage_files_in) {
            return nothing
        }


        return html`
        
            ${this.renderDropinArea()}

            ${this.renderPreviewAndSubmit()}
        
        `;

    }
}
