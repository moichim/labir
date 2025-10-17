import { ApiTimeGrouping } from "@labir/api"
import { Instance } from "@labir/core"
import { t } from "i18next"
import { css, CSSResultGroup, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { ifDefined } from "lit/directives/if-defined.js"
import { FileConsumer } from "../hierarchy/consumers/FileConsumer"
import { T } from "../translations/Languages"
import { booleanConverter } from "../utils/converters/booleanConverter"

@customElement("file-thumbnail")
export class FileThumbnail extends FileConsumer {

    @property({ type: Object })
    ondetail?: (file: Instance) => void;

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

        header {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            padding-bottom: 5px;
            color: var(--thermal-foreground);
            
            h2 {
                margin: 0;
                padding: 0;
                flex-grow: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: var( --thermal-fs-sm );

                file-label {
                    white-space: preserve nowrap;
                }

                &:hover {
                    cursor: pointer;
                    color: var( --thermal-primary );
                }
            }

            & > div {
                display: flex;
                flex-wrap: nowrap;
                gap: 5px;
            }

        }

        main {

        }
    
    `;

    protected render(): unknown {

        return html`

            <header>
                <h2
                    @click=${() => this.ondetail?.(this.file!)}
                >
                    <file-label label="${ifDefined(this.label)}" grouping="${ifDefined(this.grouping)}"></file-label>
                </h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <thermal-btn size="sm" variant="background" @click=${() => this.ondetail?.(this.file!)}>${t(T.detail).toLocaleLowerCase()}</thermal-btn>
                    <file-range-propagator></file-range-propagator>
                    <file-dropdown label="...">
                        <file-info-button>
                            <file-button slot="invoker" label=${t(T.info).toLowerCase()}></file-button>
                        </file-info-button>
                        <file-download-lrc></file-download-lrc>
                        <file-download-png></file-download-png>
                    </file-dropdown>
                </div>
            </header>

            <main>
                <file-canvas norender="${this.norender}"></file-canvas>
                <file-timeline></file-timeline>
                <file-analysis-overview></file-analysis-overview>
            </main>
        
    `;
    }

}