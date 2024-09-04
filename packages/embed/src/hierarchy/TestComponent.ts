import { Instance, ThermalFileFailure } from "@labir/core";
import { html, PropertyValues, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { FileConsumer } from "./consumers/FileConsumer";

@customElement("test-component")
export class TestComponent extends FileConsumer {
    

    @property({
        type: String,
        attribute: true,
        reflect: true,
    })
    public uuid!: string;


    connectedCallback(): void {
        super.connectedCallback();
        /*
        this.log( this, {
            managerId: this.manager.id, 
            registryId: this.registry.id,
            groupId: this.group.id,
            group: this.group
        });
        */
    }

    public onInstanceCreated( instance: Instance ): void {
        instance;
        // this.log( instance );
    }
    public onFailure( error: ThermalFileFailure ): void {
        error;
        // this.log( error );
    }

    attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
        super.attributeChangedCallback( name, _old, value );
        this.log( name, _old, value );
    }

    protected willUpdate(_changedProperties: PropertyValues): void {
        super.willUpdate( _changedProperties );
       //  this.log( _changedProperties, this.instance );
    }

    protected render() {

        if ( this.file === undefined && this.failure === undefined ) {
            return this.renderLoading();
        } else if ( this.file !== undefined ) {
            return this.renderSuccess();
        } else {
            return this.renderFailure();
        }

    }

    protected renderLoading(): TemplateResult {
        return html`<div>Načítám</div>`;
    }

    protected renderSuccess(): TemplateResult {
        return html`<div>${this.file?.fileName}</div>`;
    }

    protected renderFailure(): TemplateResult {
        return html`<div>${this.failure?.message}</div>`;
    }

}