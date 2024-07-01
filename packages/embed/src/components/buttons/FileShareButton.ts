import { customElement } from "lit/decorators.js";
import { ElementInheritingFile } from "../structure/file/ElementInheritingFile";
import { css, html } from "lit";

@customElement("thermal-file-share")
export class FileShareButton extends ElementInheritingFile {
    protected getClassName(): string {
        return "FileShareButton";
    }

    connectedCallback(): void {
        super.connectedCallback();
    }

    static styles = css`

        code {
            display: block;
            padding: var( --thermal-gap );
            color: var( --thermal-foreground );
            background: var( --thermal-background );
            white-space: pre-wrap;
        }
    
    `;

    protected render(): unknown {
        return html`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot; https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js &quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this._injectedFile.value?.url}c&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `
    }

}