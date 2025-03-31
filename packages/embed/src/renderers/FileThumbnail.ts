import { Instance, ThermalFileFailure } from "@labir/core"
import { css, CSSResultGroup, html, nothing } from "lit"
import { ifDefined } from "lit/directives/if-defined.js"
import { BaseElement } from "../hierarchy/BaseElement"
import { customElement, property, state } from "lit/decorators.js"
import { createRef, ref, Ref } from "lit/directives/ref.js"
import { FileProviderElement } from "../hierarchy/providers/FileProvider"
import { FileMirrorElement } from "../hierarchy/mirrors/FileMirror"
import { booleanConverter } from "../utils/booleanConverter"
import { FileConsumer } from "../hierarchy/consumers/FileConsumer"
import { t } from "i18next"
import { T } from "../translations/Languages"
import { ApiTimeGrouping } from "@labir/api"

@customElement("file-thumbnail")
export class FileThumbnail extends FileConsumer {
    public onInstanceCreated(instance: Instance): void {
        // throw new Error("Method not implemented.")
    }
    public onFailure(error: ThermalFileFailure): void {
        // throw new Error("Method not implemented.")
    }
    public getTourableRoot(): HTMLElement | undefined {
        // throw new Error("Method not implemented.")
        return undefined;
    }

    @property({type: Object})
    ondetail?: ( file: Instance ) => void;

    @property({converter: booleanConverter(false)})
    public norender: boolean = false;

    @property({type: String})
    public label?: string;

    @property({type: String})
    public grouping?: ApiTimeGrouping;

    

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
                <h2><file-label label="${ifDefined(this.label)}" grouping="${ifDefined(this.grouping)}"></file-label></h2>
                <div>
                    <file-opacity-icon></file-opacity-icon>
                    <file-detail-icon .onaction=${ifDefined(this.ondetail)}></file-detail-icon>
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