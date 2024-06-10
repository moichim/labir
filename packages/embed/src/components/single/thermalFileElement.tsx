import { ThermalProvider } from '@labir/react-bridge';
import { LitElement, PropertyValueMap, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import React from 'react';
import { Root, createRoot } from 'react-dom/client';
import { ThermalFile } from './thermalFile';

@customElement('thermal-file')
export class ThermalFileElement extends LitElement {
    
    #reactRoot?: Root;

    updated(): void {

        if ( this.#reactRoot === undefined ) {
            const container = this.renderRoot.querySelector( "#webcomponent-root" )!;
            this.#reactRoot = createRoot( container )
        }

        this.#reactRoot.render( <ThermalProvider>
            <ThermalFile url={this.url!}/>
        </ThermalProvider> )

    }

    // Declare reactive properties
    @property({type: String, reflect: true})
    url?: string = '';

    // Render the UI as a function of component state
    render() {
        return html`<div id="webcomponent-root"></div>`;
    }
}
