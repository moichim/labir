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

    @property({ type: Boolean, attribute: "prefers-gpu" })
    public prefersGpu: boolean = true;

    @property({converter: booleanConverter(false)})
    public norender: boolean = false;

    public onInstanceCreated(instance: Instance): void {

        // Mount the incoming instance to the DOM
        this.remountInstance( undefined, instance );
    }

    public onFailure(): void {}

    protected updated(_changedProperties: PropertyValues): void {

        super.updated(_changedProperties);

        // Whenever the file context changes in this component, unmount any previous instance and mount the new one
        if ( _changedProperties.has("file") ) {

            const oldFileValue = _changedProperties.get( "file" ) as Instance | undefined;

            this.remountInstance( oldFileValue, this.file );

        }

        if ( _changedProperties.has("prefers-gpu") ) {
            if ( this.file ) {
                this.file.setPreferWebGl( this.prefersGpu );
                this.file.draw();
            }
        }
    }


    /** Any mounting or unmounting of instances to the DOM */
    private remountInstance(
        previousInstance?: Instance,
        nextInstance?: Instance
    ) {

        // Do nothing if the instances are the same
        if ( previousInstance === nextInstance ) {
            return;
        }

        // Remove the old instance of the DOM if any
        if ( previousInstance !== undefined ) {
            previousInstance.unmountFromDom();
        }

        // Mount the new instance to the DOM
        if ( nextInstance !== undefined && this.container.value ) {
            nextInstance.mountToDom( this.container.value );
            nextInstance.setPreferWebGl( this.prefersGpu );
            nextInstance.draw();
        }


    }

    public disconnectedCallback(): void {
        super.disconnectedCallback();
        if (this.file !== undefined) {
            this.file.unmountFromDom();
            this.parentFileProviderElement?.onSuccess.delete(this.UUID);
            this.parentFileProviderElement?.onInstanceCreated.delete(this.UUID);
            this.parentFileProviderElement?.onLoadingStart.delete(this.UUID);
            this.parentFileProviderElement?.onFailure.delete(this.UUID);
        }
    }

    public static readonly styles = css`

        :host {
            display: block;
            width: 100%;
            font-size: var( --thermal-fs );
        }

        :host,
        .canvas-container {
            box-sizing: border-box;
        }

        .canvas-container {

            width: 100%;

            background-color: var( --thermal-slate );
            color: var( --thermal-background );

            transition: color .3s ease-in-out, background-color .3s ease-in-out;

            &.is-loading {

                aspect-ratio: 4 / 3;
                display: flex;
                align-items: center;
                justify-content: center;

            }

            &.is-loaded {
        
            }

            &.is-success {

            }

            &.is-error {

                display: flex;
                align-items: center;
                justify-content: center;
                padding: var( --thermal-gap );
                box-sizing: border-box;
            }

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

            thermal-icon {
                width: 2em;
                height: 2em;
            }

            .error-message {
                font-size: small;
                opacity: .5;
            }

        }
    `;

    private renderPlaceholder() {

        if ( this.loading === false ) {
            return nothing;
        }

        return html`<div class="file-canvas-loading">
    <thermal-spinner color="var(--thermal-background)"></thermal-spinner>
</div>`;

    }

    private renderError() {

        if ( this.failure === undefined ) {
            return nothing;
        }

        return html`<div class="error-wrapper">
    <thermal-icon 
        icon="warning"
        variant="outline"
    ></thermal-icon>

    <div class="error-title">
        ${t(T.fileloadingerror)}
    </div>
    <div class="error-url">
        ${this.failure?.thermalUrl}
    </div>
    <div class="error-message">
        ${this.failure?.message}
    </div>
</div>`;

    }

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

        return html`<div ${ref(this.container)} class=${classMap(classes)} part="file-canvas-container">
    ${this.renderPlaceholder()}
    ${this.renderError()}
</div>`;
    }

}