import { customElement, state } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { consume } from "@lit/context";
import { pngExportWidthContext, pngExportWidthSetterContext, ContextSetter, pngExportFsContext, pngExportFsSetterContext } from "../../utils/pngExportContext";
import { css, CSSResultGroup, html, nothing } from "lit";
import { t } from "i18next";
import { T } from "../../translations/Languages";

@customElement("png-export-panel")
export class PngExportPanel extends BaseElement {

    @state()
    @consume({ context: pngExportWidthContext, subscribe: true })
    protected pngWidth!: number;

    @consume({ context: pngExportWidthSetterContext, subscribe: true })
    protected pngWidthSetter!: ContextSetter<number>;

    @consume({ context: pngExportFsContext, subscribe: true })
    protected pngFs!: number;

    @consume({ context: pngExportFsSetterContext, subscribe: true })
    protected pngFsSetter!: ContextSetter<number>;

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

    protected renderSlider(
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
                name="${label}"
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

        const tip = html`<div class="hint"><strong>${value} ${unit}</strong> (${min} - ${max} ${unit})${hint ? html`<br />${hint}</div>` : nothing}`;

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
        
        `;

    protected render(): unknown {

        if ( this.pngFs === undefined || this.pngWidth === undefined || this.pngWidthSetter === undefined || this.pngFsSetter === undefined ) {
            return nothing;
        }

        return html`

        ${this.renderSlider( t(T.exportimagewidth), this.pngWidth, "px", 300, 2000, 50, this.pngWidthSetter.bind(this) )}

        ${this.renderSlider( t(T.exportimagefontsize), this.pngFs, "px", 10, 50, 1, this.pngFsSetter.bind(this) )}
        
        `;
    }

}