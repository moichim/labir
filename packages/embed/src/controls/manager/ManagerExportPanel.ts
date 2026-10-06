import { consume } from "@lit/context";
import { t } from "i18next";
import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { state } from "lit/decorators.js";
import { AbstractThermalElement } from "../../hierarchy/AbstractThermalElement";
import { configContext, ConfigContextValue } from "../../hierarchy/controllers/ConfigController";
import { T } from "../../translations/Languages";

export class ManagerExportPanel extends AbstractThermalElement {

    @state()
    @consume({ context: configContext, subscribe: true })
    protected config?: ConfigContextValue;

    

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

        if (!this.config || !_changedProperties.has("config")) {
            return;
        }

        const settings = this.config.settings.export.png;
        const values = [
            ["pngWidth", settings.width],
            ["pngFs", settings.fontSize]
        ] as const;

        for (const [key, value] of values) {
            const element = this.shadowRoot?.querySelector(`input[name="${key}"]`) as HTMLInputElement | null;
            if (element && Number(element.value) !== value) {
                element.value = value.toString();
            }
        }
    }

    protected render(): unknown {

        if (!this.config) {
            return nothing;
        }

        const { png, group } = this.config.settings.export;

        return html`

        ${this.renderGroup( t(T.exportcontent), html`
            ${this.renderCheckbox( "pngExportAnalyses", t(T.analyses), png.analyses, value => this.config!.setPngSetting("analyses", value) ) }
            ${this.renderCheckbox( "pngExportScale", t(T.thermalscale), png.thermalScale, value => this.config!.setPngSetting("thermalScale", value) )}
            ${this.renderCheckbox( "pngExportFileName", t(T.exportfilenames), png.fileName, value => this.config!.setPngSetting("fileName", value) )}
            ${this.renderCheckbox( "pngExportFileDate", t(T.filedate), png.fileDate, value => this.config!.setPngSetting("fileDate", value) )}
        ` )}

        ${this.renderGroup( t(T.exportdimensions), html`
            ${this.renderSlider( "pngWidth", t(T.exportimagewidth), png.width, "px", 500, 2000, 50, value => this.config!.setPngSetting("width", value) )}

            ${this.renderSlider( "pngFs", t(T.exportimagefontsize), png.fontSize, "px", 10, 50, 1, value => this.config!.setPngSetting("fontSize", value) )}
        ` )}

        ${this.renderGroup( t(T.exportgroup), html`
            ${this.renderCheckbox( "pngExportGroupName", t(T.exportgroupname), group.groupName, value => this.config!.setGroupSetting("groupName", value) ) }
            ${this.renderSlider( "pngColumns", t(T.exportfilenames), group.columns, "sloupců", 1, 5, 1, value => this.config!.setGroupSetting("columns", value) )}
        ` )}

        `;
    }

}