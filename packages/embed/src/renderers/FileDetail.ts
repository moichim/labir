import { ApiTimeGrouping } from "@labir/api"
import { css, CSSResultGroup, html, nothing } from "lit"
import { customElement, property } from "lit/decorators.js"
import { FileConsumer } from "../hierarchy/consumers/FileConsumer"
import { booleanConverter } from "../utils/converters/booleanConverter"

@customElement("file-detail")
export class FileThumbnail extends FileConsumer {

    @property({ type: Object })
    onback?: () => void;

    @property({ converter: booleanConverter(false) })
    public norender: boolean = false;

    @property({ type: String })
    public label?: string;

    @property({ type: String })
    public grouping?: ApiTimeGrouping;

    public onInstanceCreated(): void {}

    public onFailure(): void {}

    static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: block;
            width: 100%;
            box-sizing: border-box;
        }

        main {
            display: grid;
            gap: var(--thermal-gap);
            grid-template-columns: 1fr;
            @media ( min-width: 900px ) {
                grid-template-columns: 2fr 1fr;
            }
            @media ( min-width: 1300px ) {
                grid-template-columns: 1fr 1fr;
            }
        }

        header {
            width: 100%;
            display: flex;
            gap: 5px;
            margin-bottom: var(--thermal-gap);
            align-items: center;
        }
    
    `;

    protected render(): unknown {

        return html`

            <header>
                <thermal-button variant="foreground" @click=${() => {
                if (this.onback)
                    this.onback();
            }}>x</thermal-button>

                ${this.label !== undefined ? html`
                    <thermal-button variant="background" interactive="false">${this.label}</thermal-button>
                ` : nothing}

                <thermal-button variant="background" interactive="false">
                    <file-label></file-label>
                </thermal-button>

                <file-info-button></file-info-button>
                <file-download-dropdown></file-download-dropdown>
            </header>

            <main>
                <section>
                    <file-canvas norender="${this.norender}"></file-canvas>
                    <file-timeline></file-timeline>
                </section>
                <section>
                    <file-analysis-complex></file-analysis-complex>
                </section>
            </main> 
        
    `;
    }

}