import { ThermalManager } from "@labirthermal/core";
import Client from "@labirthermal/server";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { ConnectedAppBase } from "../abstraction/ConnectedAppBase";
import { createRef, ref } from "lit/directives/ref.js";
import { ManagerProviderElement } from "../../../hierarchy/providers/ManagerProvider";

@customElement("controller-app")
export class ControllerApp extends ConnectedAppBase {

    private managerProviderRef = createRef<ManagerProviderElement>();

    constructor() {
        super();
    }

    connectedCallback(): void {

        super.connectedCallback();

        this.log(this);

    }



    public get manager(): ThermalManager {
        if (!this.managerProviderRef.value) {
            throw new Error("Method not implemented.");
        }
        return this.managerProviderRef.value.manager;
    }


    protected render(): unknown {

        const content = html`
        <slot></slot>
        <p>Server URL: ${this.serverUrl}</p>
        <p>API Root: ${this.serverApiRoot}</p>
        <p>${this.client.isLoggedIn}</p>
        <p>Folder Name: ${this.content.folder?.name}</p>`;

        const layout = this.renderBrowserLayout(
            html`<h1>Controller App</h1>`,
            content
        )

        return this.renderAppWithInternals(layout);
    }

}