import { css, CSSResultGroup, html, nothing, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { consume } from "@lit/context";
import { currentFrameContext, CurrentFrameContext } from "../../hierarchy/providers/context/FileContexts";

@customElement("file-video")
export class FileVideo extends FileConsumer {

    @consume( {context: currentFrameContext, subscribe: true} )
    @state()
    protected currentFrame?: CurrentFrameContext;

    public onInstanceCreated(): void {}

    public onFailure(): void {}



    @property({type: String, reflect: true, attribute: true})
    url?: string;

    container: Ref<HTMLVideoElement> = createRef();

    protected shouldUpdate(_changedProperties: PropertyValues): boolean {

        if (  this.container.value !== undefined && this.currentFrame !== undefined ) {

            const value = parseFloat((this.currentFrame.ms / 1000).toFixed(3));

            this.container.value.fastSeek( value );

        }

        return super.shouldUpdate( _changedProperties );
    }

    static styles?: CSSResultGroup | undefined = css`
        .container {
        
            video {

                max-width: 100%;
                height: auto;
            
            }
        
        }
    `;

    protected render(): unknown {

        return html`
            <div class="container">
            
                <video ${ref(this.container)} preload="metadata">

                    ${ this.url === undefined
                        ? nothing
                        : html`<source src="${this.url}" type="video/mp4"></source>`
                    }

                </video>
            
            </div>
        
        `;
    }

}