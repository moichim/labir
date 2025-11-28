import { consume } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { T } from "../../translations/Languages";
import { ContextSetter, IWithPngExportContext, pngExportAnalysisContext, pngExportAnalysisSetterContext, pngExportColumnsContext, pngExportColumnsSetterContext, pngExportFileDateContext, pngExportFileDateSetterContext, pngExportFileNameContext, pngExportFileNameSetterContext, pngExportFsContext, pngExportFsSetterContext, pngExportGroupNameContext, pngExportGroupNameSetterContext, pngExportLicenseContext, pngExportLicenseSetterContext, pngExportScaleContext, pngExportScaleSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../../utils/converters/pngExportContext";

@customElement("png-export-panel")
export class PngExportPanel extends BaseElement implements IWithPngExportContext {

    @consume({ context: pngExportWidthContext, subscribe: true })
    public pngWidth!: number;
    @consume({ context: pngExportWidthSetterContext, subscribe: true })
    public pngWidthSetter!: ContextSetter<number>;

    
    @consume({ context: pngExportFsContext, subscribe: true })
    public pngFs!: number;
    @consume({ context: pngExportFsSetterContext, subscribe: true })
    public pngFsSetter!: ContextSetter<number>;


    @consume({context: pngExportAnalysisContext, subscribe: true})
    public pngAnalyses!: boolean;
    @consume({context: pngExportAnalysisSetterContext, subscribe: true})
    public pngExportAnalysesSetter!: ContextSetter<boolean>;


    @consume({context: pngExportScaleContext, subscribe: true})
    public pngExportScale!: boolean;
    @consume({context: pngExportScaleSetterContext, subscribe: true})
    public pngExportScaleSetter!: ContextSetter<boolean>;


    @consume({context: pngExportLicenseContext, subscribe: true})
    public pngExportLicense!: boolean;
    @consume({context: pngExportLicenseSetterContext, subscribe: true})
    public pngExportLicenseSetter!: ContextSetter<boolean>;


    @consume({context: pngExportFileNameContext, subscribe: true})
    public pngExportFileName!: boolean;
    @consume({context: pngExportFileNameSetterContext, subscribe: true})
    public pngExportFileNameSetter!: ContextSetter<boolean>;


    @consume({context: pngExportFileDateContext, subscribe: true})
    public pngExportFileDate!: boolean;
    @consume({context: pngExportFileDateSetterContext, subscribe: true})
    public pngExportFileDateSetter!: ContextSetter<boolean>;


    @consume({context: pngExportColumnsContext, subscribe: true})
    public pngExportColumns!: number;
    @consume({context: pngExportColumnsSetterContext, subscribe: true})
    public pngExportColumnsSetter!: ContextSetter<number>;


    @consume({context: pngExportGroupNameContext, subscribe: true})
    public pngExportGroupName!: boolean;
    @consume({context: pngExportGroupNameSetterContext, subscribe: true})
    public pngExportGroupNameSetter!: ContextSetter<boolean>;

    

    protected renderRow(
        label: string,
        content: ReturnType<typeof html>,
        hint?: ReturnType<typeof html> | string
    ) {
        return html`<thermal-field label="${label}">
                <div>${content}</div>
                ${hint ? hint : nothing}
            </thermal-field>`;
    }

    protected renderGroup(
        label: string,
        content: ReturnType<typeof html>,
    ) {
        return html`<fieldset>
            <legend>${label}</legend>
            ${content}
        </fieldset>`;
    }

    protected formatTip(
        value?: ReturnType<typeof html> | string,
    ) {
        return value ? html`<div class="hint">${value}</div>` : "";
    }

    protected renderCheckbox(
        key: string,
        label: string,
        value: boolean,
        onChange: (value: boolean) => void
    ) {
        const content = html`<input name="${key}" type="checkbox" ?checked="${value}" @input=${( event: InputEvent) => {
            const target = event.target as HTMLInputElement;
            const value = target.checked;
            onChange(value);
        }}>`;
        return html`<div>${content}<label for="${key}">${label}</label></div>`;
    }

    protected renderSlider(
        key: string,
        label: string,
        value: number,
        unit: string,
        min: number,
        max: number,
        step: number,
        onChange: (value: number) => void,
        hint?: ReturnType<typeof html> | string

    ) {

        const content = html`<input 
                name="${key}"
                value="${value}"
                min="${min}"
                max="${max}"
                step="${step}"
                type="range"
                @input="${(event: { target: { value: string } }) => {
                const value = Math.min(max, Math.max(0, parseFloat(event.target.value)));
                onChange(value);
            }}"
            ></input>`;

        const help = html`<strong>${value} ${unit}</strong> (${min} - ${max} ${unit})${hint ? "<br />" + hint : "" }`;
        const tip = this.formatTip(help);

        return this.renderRow(label, content, tip);
    }



    static styles?: CSSResultGroup | undefined = css`
        
            :host {
                display: contents;
            }

            .hint {
                font-size: calc( var( --thermal-fs-sm ) * .75 );
                padding-top: .2em;
            }

            fieldset {
                border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                border-radius: var(--thermal-radius);
                margin-bottom: var(--thermal-gap);

                legend {
                    border-radius: var(--thermal-radius);
                    border: var(--thermal-border-width) var(--thermal-border-style) var(--thermal-slate);
                    padding: 0.3em 0.5em;
                }

            }
        
        `;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);

        if ( this.pngFs === undefined || this.pngWidth === undefined || this.pngWidthSetter === undefined || this.pngFsSetter === undefined ) {
            return;
        }

        const numericalValues = [ "pngFs", "pngWidth" ];
        for ( const key of numericalValues ) {
            if ( _changedProperties.has( key ) ) {
                const value = this[key as keyof PngExportPanel] as number;
                const element = this.shadowRoot?.querySelector( `input[name="${key}"]` ) as HTMLInputElement;
                if ( element && value) {
                    const oldValue = element.value;
                    if ( parseInt( oldValue ) !== value ) {
                        element.value = value.toString();
                        this.log(`Updated ${key} from ${oldValue} to ${value}`);
                    }
                }
            }
        }
    }

    protected render(): unknown {

        if ( this.pngFs === undefined || this.pngWidth === undefined || this.pngWidthSetter === undefined || this.pngFsSetter === undefined ) {
            // return nothing;
        }

        return html`

        ${this.renderGroup( t(T.exportcontent), html`
            ${this.renderCheckbox( "pngExportAnalyses", t(T.analyses), this.pngAnalyses, this.pngExportAnalysesSetter.bind(this) ) }
            ${this.renderCheckbox( "pngExportScale", t(T.thermalscale), this.pngExportScale, this.pngExportScaleSetter.bind(this) )}
            ${this.renderCheckbox( "pngExportFileName", t(T.exportfilenames), this.pngExportFileName, this.pngExportFileNameSetter.bind(this) )}
            ${this.renderCheckbox( "pngExportFileDate", t(T.filedate), this.pngExportFileDate, this.pngExportFileDateSetter.bind(this) )}
        ` )}

        ${this.renderGroup( t(T.exportdimensions), html`
            ${this.renderSlider( "pngWidth", t(T.exportimagewidth), this.pngWidth, "px", 500, 2000, 50, this.pngWidthSetter.bind(this) )}

            ${this.renderSlider( "pngFs", t(T.exportimagefontsize), this.pngFs, "px", 10, 50, 1, this.pngFsSetter.bind(this) )}
        ` )}

        ${this.renderGroup( t(T.exportgroup), html`
            ${this.renderCheckbox( "pngExportGroupName", t(T.exportgroupname), this.pngExportGroupName, this.pngExportGroupNameSetter.bind(this) ) }
            ${this.renderSlider( "pngColumns", t(T.exportfilenames), this.pngExportColumns, "sloupců", 1, 5, 1, this.pngExportColumnsSetter.bind(this) )}
        ` )}

        `;
    }

}