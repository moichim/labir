import { TimeFormat } from "@labirthermal/core";
import { ServerInfo } from "@labirthermal/server";
import { t } from "i18next";
import { css, CSSResultGroup, html } from "lit";
import { customElement, query, state } from "lit/decorators.js";
import { T } from "../../../translations/Languages";
import { ClientConsumer } from "../ClientConsumer";

type HistoryItem = {
    timestamp: number;
    success: boolean;
    code: boolean;
    message: boolean;
    method: string;
};

@customElement("server-info")
export class ServerBar extends ClientConsumer {

    @state()
    protected history: HistoryItem[] = [];

    @state()
    protected logExpanded: boolean = false;

    connectedCallback(): void {
        super.connectedCallback();


        this.client?.onResult.set(this.UUID, (timestamp, success, code, message, method) => {
            this.history.push({ timestamp, success, code, message, method });
            this.requestUpdate();
        });

    }

    static styles?: CSSResultGroup | undefined = css`

        :host {
            display: flex;
            align-items: flex-start;
            gap: 0.5em;
        }
    
        .icon {
            font-size: 1em;
            width: 1em;
            height: 1em;
        }
        .spinner {
            width: 1em;
            height: 1em;
            display: inline-block;
            vertical-align: middle;
            animation: spin 1s linear infinite;
            color: var(--thermal-primary);
        }
        @keyframes spin {
            100% { transform: rotate(360deg); }
        }

        .dialog-trigger {
            color: var( --thermal-primary );
            cursor: pointer;

            &:hover,
            &:focus {
                text-decoration: underline;
            }
        }

        .history {
            flex-grow: 1;

            table {
                width: 100%;
                border-collapse: collapse;
            }
        
            td {
                padding: 0.1em 0.1em;
                box-sizing: border-box;
                vertical-align: center;

                &.time {width: 55px;}
                &.method,
                &.code { width: 40px; }
                &.success,
                &.error {width: 1em;}

                &.method,
                &.code,
                &.success,
                &.error {
                    text-align: center;
                }

                i {
                    display: inline-block;
                    width: .5em;
                    height: .5em;
                    line-height: 0;
                    border-radius: 50%;
                    margin-bottom: 0.15em;
                }

                &.success i {
                    background: var( --thermal-primary );
                }

                &.error i {
                    background: red;
                }
            }
        
        }

        .history.collapsed {
            .history-header {
                display: none;
            }

            transition: all .2s ease-in-out;
            cursor: pointer;
            &:hover {
                color: var( --thermal-foreground );
            }
        }

        .history.expanded {

            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            overflow: hidden;

            .history-header {
                 
            }
            

            .history-content {

                max-height: 150px;
                overflow-y: scroll;

            }
        }

        .history-header {
            display: flex;
            gap: 0.5em;
            align-items: center;
            justify-content: space-between;
            padding: 0.2em 0.5em;
            background: var( --thermal-slate-dark );   
            color: var( --thermal-background );
            cursor: pointer;

            transition: all .3s ease-in-out;

            svg {
                transition: transform .3s ease-in-out;
            }

            &:hover,
            &:focus {
                color: var( --thermal-primary-light );
                background: var( --thermal-foreground );
                svg {
                    transform: scale(1.2);
                    
                }    
            }
            h2 {
                padding: 0;
                margin: 0;
                font-size: calc( var( --thermal-fs ) * 0.7 );
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
        }
    
    `;

    protected renderIcon(): unknown {
        // Pokud probíhá načítání, zobraz spinner
        if (this.isClientLoading) {
            // Spinner: oblouk 270°, 90° mezera
            return html`
                <svg class="spinner" viewBox="0 0 50 50">
                    <path
                        d="M25 7
                           a 18 18 0 1 1 -12.73 30.73"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="5"
                        stroke-linecap="round"
                    />
                </svg>
            `;
        }

        let col = this.isClientConnecting
            ? "var(--thermal-primary)"
            : this.client?.isConnected()
                ? "var(--thermal-primary)"
                : "red";

        return html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon" style="color: ${col};">
            <path fill-rule="evenodd" d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>`;
    }

    protected renderLoading(): unknown {
        return html`<div>Connecting to server...</div>`;
    }

    protected renderServerDialog(info: ServerInfo): unknown {

        const name = info.name ?? info.url;

        return html`<thermal-dialog label="Connection information">
            <span slot="invoker" class="dialog-trigger">${name}</span>
            <div slot="content">

                    <thermal-field label="Server URL">${info.url}</thermal-field>

                    <thermal-field label="Server name">${info.name ?? "-"}</thermal-field>

                    <thermal-field label="Description">${info.description ?? "-"}</thermal-field>

            </div>
        </thermal-dialog>`;

    }

    protected renderServerInfo(): unknown {
        if (this.isConnected === true && this.serverInfo) {

            return html`${this.renderServerDialog(this.serverInfo)} ${this.renderLog()}`;
        } else {
            return html`<div>Failed to connect to the remote server</div>`;
        }
    }

    protected renderLogItem(
        item: HistoryItem
    ): unknown {
        return html`
            <tr class="history-item">

                <td class="time">${TimeFormat.humanTime(item.timestamp, true)}</td>

                ${item.success ? html`<td class="success">
                    <i></i>
                </td>` : html`<td class="error">
                    <i></i>
                </td>`}

                <td class="method">${item.method}</td>

                <td class="code">${item.code}</td>

                <td class="message">${item.message}</td>

            </tr>
        `;
    }

    @query('.history-content')
    protected historyContent?: HTMLDivElement;

    updated(changedProps: Map<string, any>) {
        super.updated?.(changedProps);
        if (this.logExpanded && this.historyContent) {
            this.historyContent.scrollTop = this.historyContent.scrollHeight;
        }
    }

    protected renderLog(): unknown {
        const items = this.logExpanded
            ? this.history
            : this.history.slice(this.history.length - 1);
        const stateClass = this.logExpanded ? "expanded" : "collapsed";

        const tableCallback = this.logExpanded
            ? undefined
            : () => {
                this.logExpanded = true;
            }

        const closeCallback = (event: Event) => {
            event.stopPropagation();
            this.logExpanded = false;
            this.requestUpdate();
        }

        return html`
        <div class="history ${stateClass}" @click=${tableCallback}>
            <div class="history-header" @click=${closeCallback.bind(this)}>
                <h2>${t(T.networklog)}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="icon"
                >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
            </div>
            <div class="history-content">
                <table>
                    <tbody>
                        ${items.map(item => this.renderLogItem(item))}
                    </tbody>
                </table>
            </div>
        <div>
        `;
    }

    protected render(): unknown {

        const content = this.isClientConnecting
            ? this.renderLoading()
            : this.renderServerInfo();

        return html`
            ${this.renderIcon()}
            ${content}
        `
    }

}