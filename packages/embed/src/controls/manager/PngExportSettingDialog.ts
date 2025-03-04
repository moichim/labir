import { customElement } from "lit/decorators.js";
import { BaseElement } from "../../hierarchy/BaseElement";
import { html, nothing } from "lit";
import { consume } from "@lit/context";
import { ContextSetter, pngExportFsContext, pngExportFsSetterContext, pngExportWidthContext, pngExportWidthSetterContext } from "../../utils/pngExportContext";

@customElement("png-export-config")
export class PngExportSettingDialog extends BaseElement {

    @consume({context: pngExportWidthContext, subscribe: true})
    protected pngWidth!: number;

    @consume({context: pngExportWidthSetterContext, subscribe: true})
    protected pngWidthSetter!: ContextSetter<number>;

    @consume({context: pngExportFsContext, subscribe: true})
    protected pngFs!: number;

    @consume({context: pngExportFsSetterContext, subscribe: true})
    protected pngFsSetter!: ContextSetter<number>;

    protected renderRow(
        label: string,
        content: ReturnType<typeof html>,
        hint?: ReturnType<typeof html>|string
    ) {
        return html`<div>
            <div>${label}</div>
            <div>${content}</div>
            ${hint ? hint : nothing}
        </div>`;
    }

    protected renderSlider(
        label: string,
        value: number,
        unit: string,
        min: number,
        max: number,
        step: number,
        onChange: (value: number) => void,
        hint?: ReturnType<typeof html>|string

    ) {

        const content = html`<input 
            value=${value}
            min=${min}
            max=${max}
            step=${step}
            type="range"
            @input=${ (event: {target: {value: string}}) => {
                const value = Math.min( max, Math.max( 0, parseFloat( event.target.value ) ) );
                onChange( value );
            }}
        ></input>`;

        const tip = html`<strong>${value} ${unit}</strong> (${min} - ${max} ${unit})${hint ? html`<br />${hint}` : nothing}`;

        return this.renderRow( label, content, tip );
    }

    protected render(): unknown {
        return html`<thermal-dialog label="Export configuration">
            <thermal-button slot="invoker">Export config</thermal-button>
            <div slot="content">
                ${this.renderSlider( "Image width", this.pngWidth, "px", 300, 1920, 20, this.pngWidthSetter.bind(this) )}

                ${this.renderSlider( "Font size", this.pngFs, "px", 10, 50, 1, this.pngFsSetter.bind(this) )}

            </div>
        </thermal-dialog>`;
    }

}