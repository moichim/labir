import { Instance } from "@labir/core";
import { css, html, nothing, PropertyValues } from "lit";
import {classMap} from 'lit/directives/class-map.js';
import { customElement } from "lit/decorators.js";
import { Ref, createRef, ref } from 'lit/directives/ref.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";

@customElement("file-canvas")
export class FileCanvas extends FileConsumer {

    public onLoadingStart(): void {
        // throw new Error("Method not implemented.");
    }

    public onInstanceCreated(instance: Instance): void {

        if ( this.container.value !== undefined && this.parentFileProviderElement !== undefined ) {
            instance.mountToDom( this.container.value );
            this.parentFileProviderElement.bindCanvasOnMount( this );
        } else {
            this.log( this.parentFileProviderElement, this.container.value );
            throw new Error( "Error mounting the instance to the canvas!" );
        }
    }

    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    container: Ref<HTMLDivElement> = createRef();

    static styles = css`
        .canvas-container {

            max-width: 100vw;
            max-height: 100vh;

            aspect-ratio: 4 / 3;
            width: 100%;

            background-color: var( --thermal-slate );
            color: var( --thermal-background );

            transition: color .3s ease-in-out, background-color .3s ease-in-out;

            

        }

        .is-loaded {
        
        }

        .is-loading {
        
        }

        .is-success {

        }

        .is-error {

            display: flex;
            align-items: center;
            justify-content: center;

            padding: var( --thermal-gap );

        }

        .error-wrapper {
            display: flex;
            gap: calc( var( --thermal-gap ) * 0.5 );
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            box-sizing: border-box;
            width: 100%;
            height: 100%;

            border: 2px dashed currentcolor;
            border-radius: calc( var( --thermal-radius ) * 2 );

            padding: var( --thermal-gap );

        }

        .error-icon {
            width: 2rem;
        }

        .error-message {
            font-size: small;
            opacity: .5;    
        }


        .loading-placeholder {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background: var( --thermal-slate ); */
        }
        .loading-loader {
            width: calc( var( --thermal-gap ) * 2);
            aspect-ratio: 1;
            --c: no-repeat linear-gradient(var(--thermal-background) calc(50% - 10px),#0000 0 calc(50% + 10px),var(--thermal-background) 0);
            background: 
                var(--c) 0%   100%,
                var(--c) 50%  100%,
                var(--c) 100% 100%;
            background-size: 20% calc(200% + 20px);
            animation: loading-animation 1s infinite linear;
        }
        @keyframes loading-animation {
            33%  {background-position: 0% 50%,50% 100%,100% 100%}
            50%  {background-position: 0%  0%,50%  50%,100% 100%}
            66%  {background-position: 0%  0%,50%   0%,100%  50%}
            100% {background-position: 0%  0%,50%   0%,100%   0%}
        }
    `;

    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate( _changedProperties );
        this.log( _changedProperties, this.loading );
    }

    protected render(): unknown {

        const isError = this.loading === false && this.error !== undefined;

        const isSuccess = this.loading === false && this.instance !== undefined;

        const classes = {
            "canvas-container": true,
            "is-loading": this.loading,
            "is-loaded": this.loading === false,
            "is-success": isSuccess,
            "is-error": isError
        }

        return html`
            <div ${ref(this.container)} class=${classMap(classes)} part="file-canvas-container">
            
                ${ this.loading === true

                    ? html`<div class="loading-placeholder">
                        <div class="loading-loader"></div>
                    </div>`
                    : isError === true 
                        ? html`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                File loading error
                            </div>

                            <div class="error-url">
                                ${this.error?.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${this.error?.message}
                            </div>
                        </div>`
                        : nothing

                }
            
            </div>
        
        `;
    }

}