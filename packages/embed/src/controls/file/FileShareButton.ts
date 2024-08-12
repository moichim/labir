import { Instance, ThermalFileFailure } from "@labir/core";
import { css, html, nothing } from "lit";
import { customElement } from "lit/decorators.js";
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("button-file-share")
export class FileShareButton extends FileConsumer {
    public onInstanceCreated(instance: Instance): void {
        // throw new Error("Method not implemented.");
        // this.log( instance );
        instance;
    }
    public onFailure(error: ThermalFileFailure): void {
        // throw new Error("Method not implemented.");
        // this.log( error );
        error;
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

        if ( ! this.instance ) {
            return nothing;
        }

        return html`
            <thermal-dialog label="Embed this file">
                <thermal-button slot="invoker">Embed</thermal-button>

                
                <div slot="content">

                    <p>To display this file on your own website use the following code:</p>

                    <code>
&lt;!-- -Load the JS library (only once, preferrably in the head) -&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/@labir/embed/dist/embed.min.js&quot;&gt;&lt;/script&gt;

&lt;!-- The file itself may be placed anywhere in the body --&gt;
&lt;thermal-file-app url=&quot;${this.instance.url}&quot;&gt;&lt;/thermal-file-app&gt;
                    </code>
                </div>
            </thermal-dialog-component>
        `
    }

    

}