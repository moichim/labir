import { Instance } from "@labirthermal/core";
import { t } from "i18next";
import { css, html, nothing, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { createRef, Ref, ref } from 'lit/directives/ref.js';
import { FileConsumer } from "../../hierarchy/consumers/FileConsumer";
import { T } from "../../translations/Languages";
import { booleanConverter } from "../../utils/converters/booleanConverter";

@customElement("file-canvas")
export class FileCanvas extends FileConsumer {

    public container: Ref<HTMLDivElement> = createRef();

    @property({converter: booleanConverter(false)})
    public norender: boolean = false;

    getContainer(): HTMLDivElement|undefined {
        return this.container.value;
    }

    public onInstanceCreated(instance: Instance): void {

        const container = this.getContainer();

        if ( container !== undefined ) {
            instance.mountToDom( container );
            if (this.norender === false) {
                instance.draw();
            }
            
        } else {
            throw new Error( "Error mounting the instance to the canvas!" );
        }
    }

    public onFailure(): void {
        // throw new Error("Method not implemented.");
    }

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
        if ( _changedProperties.has("file") ) {

            // this.log("changed_properties",_changedProperties, this.file);

            const oldFile = _changedProperties.get( "file" ) as Instance;
            const newFile = this.file;

            if (
                oldFile === undefined
                && newFile !== undefined
                && this.container.value
                && this.file
                && this.file.dom?.built === false
            ) {
                this.file.mountToDom( this.container.value );
                this.file.draw();
            }

        }
    }

    disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this.file !== undefined) {
            this.file.unmountFromDom();
            this.parentFileProviderElement?.onSuccess.delete(this.UUID);
            this.parentFileProviderElement?.onInstanceCreated.delete(this.UUID);
            this.parentFileProviderElement?.onLoadingStart.delete(this.UUID);
            this.parentFileProviderElement?.onFailure.delete(this.UUID);
        }
    }

    static styles = css`

        :host {
            display: inline-block;
            width: 100%;
        }

        .canvas-container {

            max-width: 100vw;
            /** max-height: 100vh; */

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
            box-sizing: border-box;
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
            border-radius: var( --thermal-radius );

            padding: var( --thermal-gap );

        }

        .error-icon {
            width: calc( var( --thermal-fs ) * 2 );
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
        }
        
    `;

    protected render(): unknown {

        const isError = this.loading === false && this.failure !== undefined;

        const isSuccess = this.loading === false && this.file !== undefined;

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
                        <div class="loading-loader">
                            <thermal-spinner color="var(--thermal-background)"></thermal-spinner>
                        </div>
                    </div>`
                    : isError === true 
                        ? html`<div class="error-wrapper">
                            <div class="error-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                            </div>

                            <div class="error-title">
                                ${t(T.fileloadingerror)}
                            </div>

                            <div class="error-url">
                                ${this.failure?.thermalUrl}
                            </div>
                            <div class="error-message">
                                ${this.failure?.message}
                            </div>
                        </div>`
                        : nothing

                }
            
            </div>
        
        `;
    }

}