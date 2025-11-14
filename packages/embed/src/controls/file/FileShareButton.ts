import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-share-button")
export class FileShareButton extends FileConsumer {

    public onInstanceCreated(): void {}
    public onFailure(): void {}

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

        if ( ! this.file ) {
            return nothing;
        }

        return html`
            <thermal-dialog label="Embed this file">
                <thermal-btn slot="invoker">Embed</thermal-btn>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labirthermal/webcomponents/dist/embed.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this.file.thermalUrl}&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `
    }

    

}