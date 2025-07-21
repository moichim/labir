import { FolderInfo } from "@labir/server";
import { css, CSSResultGroup, html, nothing, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "../../../hierarchy/BaseElement";
import { BreadcrumbItem } from "packages/server/client/src/responseEntities";
import icons from "../../../utils/icons";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { classMap } from "lit/directives/class-map.js";
import { ClientConsumer } from "../ClientConsumer";

@customElement("folder-breadcrumb")
export class FolderBreadcrumb extends ClientConsumer {

    @property({ type: Object })
    public breadcrumb: BreadcrumbItem[] = [];

    @property({ type: Function })
    public onFolderClick?: (folder: BreadcrumbItem) => void;

    @property({ type: Function })
    public onUserClick?: () => void;


    protected server = icons.wifi.micro("icon");
    protected user = icons.user.micro("icon");
    protected folder = icons.folder.micro("icon");


    connectedCallback(): void {
        super.connectedCallback();

        this.log(this.client);

        this.client?.onConnection.set(this.UUID, (connection) => {
            this.log("Connection established:", connection);

            this.requestUpdate();
        });


        this.client?.auth.onIdentity.set(this.UUID, (identity, userFolders) => {

            this.log("user", identity, "folders", userFolders);

            this.requestUpdate();
        });

    }

    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: flex;
            align-items: center;
            gap: 0.5em;

            color: var(--thermal-slate);
            font-size: calc( var(--thermal-fs) * 0.8 );
        }

        button {

            margin: 0;
            padding: 0;
            background: transparent;
            border: none;
            outline: none;

            color: var(--thermal-slate);

            &.server {}
            &.user {}
            &.folder {}
            &.current {
                color: var(--thermal-foreground);
                .item-text {
                    text-decoration: none;    
                }
            }

            &.interactive {
                cursor: pointer;
                transition: color 0.2s ease-in-out;
                &:hover {
                    color: var(--thermal-primary);
                }
                .item-text {
                    text-decoration: underline;
                }
            }

            

        }

        .icon {
            display: inline-block;
            width: 1em;
            height: 1em;
            line-height: 1em;
            transform: translateY(0.1em);
        }
    
    `;


    protected renderItem(
        item: BreadcrumbItem,
        index: number
    ): TemplateResult {



        const icon = this[item.type] || this.folder;


        let callback: Function | undefined = undefined;

        if (item.type === "user" && this.onUserClick) {
            callback = this.onUserClick;
        } else if (item.type === "folder") {
            callback = () => this.onFolderClick!(item);
        }

        const classNames = {
            [item.type]: true,
            current: item.current,
            interactive: callback !== undefined
        }

        return html`
        ${index > 0 ? html`<span>/</span>` : nothing}
        <button 
            class="${classMap(classNames)}"
            @click=${callback}
        >
            <span class="item-icon">${unsafeSVG(icon)}</span>
            <span class="item-text">${item.name}</span>
        </button>`;
    }


    protected render(): unknown {

        const folderItems = this.breadcrumb.filter(item => item.type === "folder");

        const fixedItems: BreadcrumbItem[] = [];

        fixedItems.push({
            type: "server",
            name: this.serverInfo?.name || this.serverInfo?.name || "Server",
            current: false,
        } as BreadcrumbItem);

        if (this.identity) {
            fixedItems.push({
                type: "user",
                name: this.identity.meta.name || this.identity.user || "User",
                current: folderItems.length === 0,
            } as BreadcrumbItem);
        }

        const items = [
            ...fixedItems,
            ...folderItems
        ]




        return html`${items.map(this.renderItem.bind(this))}`;

    }

}