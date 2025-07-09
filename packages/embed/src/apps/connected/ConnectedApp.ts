import { html } from "lit";
import { BaseServerApp } from "../../connection/BaseServerApp";
import { customElement } from "lit/decorators.js";

@customElement("connected-app")
export class ConnectedApp extends BaseServerApp {

    protected render(): unknown {
        return html`
            <div class="connected-app">
                <h2>Connected App</h2>
                <p>Server URL: ${this.serverUrl}</p>
            </div>
        `;
    }

}