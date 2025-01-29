import { css, CSSResultGroup, html } from "lit";
import { GroupConsumer } from "../../hierarchy/consumers/GroupConsumer";
import { t } from "i18next";
import { T } from "../../translations/Languages";
import { BaseElement } from "../../hierarchy/BaseElement";

export class GroupFilesGrid extends BaseElement {

    public getTourableRoot(): HTMLElement | undefined {
        return undefined;
    }



    static styles?: CSSResultGroup | undefined = css`

        :host {

        }

        .header {
        
        }

        .content {
        
        }
    
    `;

    protected render(): unknown {
        return html`
            <header class="header">
                <div></div>

                <nav>
                    <file-dropdown-lrc></file-dropdown-lrc>
                    <file-download-png></file-download-png>
                    <file-range-propagator></file-range-propagator>
                    <file-info-button>
                        <file-button slot="invoker" label="${t(T.info).toLowerCase()}"></file-button>
                    </file-info-button>
                </nav>
            </header>
            <main>
                <file-canvas></file-canvas>
                <file-timeline></file-timeline>
                <file-analysis-table></file-analysis-table>
            </main>
        `;
    }

}