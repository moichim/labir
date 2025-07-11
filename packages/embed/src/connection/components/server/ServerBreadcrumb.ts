import { consume } from "@lit/context";
import { ClientConsumer } from "../ClientConsumer";
import { currentUserTreeContext, currentUserTreeSetterContext } from "../../ClientContext";
import { TreeItem } from "@labir/server";
import { customElement, property, state } from "lit/decorators.js";
import { css, html, nothing, PropertyValues, TemplateResult } from "lit";

@customElement("server-breadcrumb")
export class ServerBreadcrumb extends ClientConsumer {

    @consume({ context: currentUserTreeContext, subscribe: true })
    protected tree: TreeItem[] = [];

    @consume({ context: currentUserTreeSetterContext, subscribe: true })
    protected treeSetter?: (tree: TreeItem[]) => void = undefined;

    @property({ type: String, reflect: true })
    public current!: string;

    @state()
    protected folders: TreeItem[] = [];

    connectedCallback(): void {
        super.connectedCallback();

        if ( this.tree.length === 0 ) {

            this.fetchTree();

        }

        this.client?.auth.onIdentity.set(this.UUID, async () => {

            this.treeSetter?.( [] );

            // await this.fetchTree();

            this.folders = this.getCurrentFolderParents();
            // this.requestUpdate();
        });

    }

    protected update(changedProperties: PropertyValues): void {
        super.update(changedProperties);

        if ( changedProperties.has("current") ) {

            this.folders = this.getCurrentFolderParents();
            this.requestUpdate();

            console.log(  "Updated folders:", this.folders, this.current, this.tree );

        }
    }

    protected async fetchTree(): Promise<void> {

        if ( !this.isClientConnected || !this.client) {
            return;
        }

        const tree = this.client.routes.get.currentUserTree();

        const treeResult = await tree.execute();

        if ( treeResult.success ) {

            this.treeSetter?.(treeResult.data.tree);
            this.folders = this.getCurrentFolderParents();

        } else {

            console.error("Failed to fetch user tree:", treeResult.message);
        }

    }


    protected renderItem(
        name: string,
        className: string,
        hasArrow: boolean = true,
        icon?: TemplateResult,
        onClick?: () => void
    ): TemplateResult {

        return html`
        ${hasArrow 
            ? html`<span class="slash">/</span>` 
        : nothing}

        <button class="${className}" @click=${onClick}>
            ${icon ? icon : nothing}
            <span>${name ?? "/"}</span>
        </button>`;

    }

    protected renderServerName(): TemplateResult {
        return this.renderItem(
            this.serverInfo?.name ?? "Server",
            "server",
            false,
            html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M.676 6.941A12.964 12.964 0 0 1 10 3c3.657 0 6.963 1.511 9.324 3.941a.75.75 0 0 1-.008 1.053l-.353.354a.75.75 0 0 1-1.069-.008C15.894 6.28 13.097 5 10 5 6.903 5 4.106 6.28 2.106 8.34a.75.75 0 0 1-1.069.008l-.353-.354a.75.75 0 0 1-.008-1.053Zm2.825 2.833A8.976 8.976 0 0 1 10 7a8.976 8.976 0 0 1 6.499 2.774.75.75 0 0 1-.011 1.049l-.354.354a.75.75 0 0 1-1.072-.012A6.978 6.978 0 0 0 10 9c-1.99 0-3.786.83-5.061 2.165a.75.75 0 0 1-1.073.012l-.354-.354a.75.75 0 0 1-.01-1.05Zm2.82 2.84A4.989 4.989 0 0 1 10 11c1.456 0 2.767.623 3.68 1.614a.75.75 0 0 1-.022 1.039l-.354.354a.75.75 0 0 1-1.085-.026A2.99 2.99 0 0 0 10 13c-.88 0-1.67.377-2.22.981a.75.75 0 0 1-1.084.026l-.354-.354a.75.75 0 0 1-.021-1.039Zm2.795 2.752a1.248 1.248 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.354.354a.75.75 0 0 1-1.06 0l-.354-.353a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>`
        );
    }

    protected renderUserName(): unknown {
        if ( this.identity === undefined ) {
            return nothing;
        }
        return this.renderItem(
            this.identity.meta.name,
            "user",
            true,
            html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
            </svg>`
        );
    }


    protected getCurrentFolderParents(): TreeItem[] {
        if (!this.current || !this.tree || this.tree.length === 0) {
            return [];
        }

        // Helper to recursively search for the path and collect the full path (parents + current)
        function findPath(
            nodes: TreeItem[],
            targetPath: string,
            parents: TreeItem[] = []
        ): TreeItem[] | null {
            for (const node of nodes) {
                const newParents = [...parents, node];
                if (node.path === targetPath) {
                    return newParents;
                }
                if (node.subfolders && node.subfolders.length > 0) {
                    const found = findPath(node.subfolders, targetPath, newParents);
                    if (found) {
                        return found;
                    }
                }
            }
            return null;
        }

        const path = findPath(this.tree, this.current);
        return path ?? [];
    }

    public static styles = css`

        :host {
            display: block;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
        }
    
        .server-breadcrumb {
            display: flex;
            flex-wrap: wrap;
            gap: calc( var(--thermal-gap) * 0.5 );
            align-items: center;
            font-size: calc( var(--thermal-fs) * 0.8 );
            color: var(--thermal-slate-dark);
            font-family: sans-serif;
        }

        button {
            display: inline-block;
            padding: 0;
            margin: 0;
            background: transparent;
            border: none;
            color: var(--thermal-slate-dark);
            font-size: calc( var(--thermal-fs) * 0.8 );
            font-family: sans-serif !important;

            transition: color 0.2s ease-in-out;

            svg {
                display: inline-block;
                transform: translateY(0.1em);
            }

        }

        svg {
            width: 1em;
            height: 1em;
            line-height: 1em;
        }

        .server {
            color: var(--thermal-slate);
        }

        .user {
            color: var(--thermal-slate);
        }

        .folder {
            color: var(--thermal-slate);
            cursor: pointer;
            &:hover {
                color: var(--thermal-primary);
            }
        }

        .current {
            color: var(--thermal-foreground);
        }

        .slash {
            color: var(--thermal-slate);
        }
    
    `;




    protected render(): unknown {

        if ( 
            ! this.isClientConnected 
            || ! this.isLoggedIn
        ) {
            return nothing;
        }


        const folders = this.folders.length === 0
            ? this.renderItem("Načítám...", "folder", true)
            : this.folders.map((folder, index) => {
                const className = index === this.folders.length - 1 ? "folder current" : "folder";
                return this.renderItem(
                    folder.name ?? "/",
                    className,
                    true,
                    html`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path d="M3.75 3A1.75 1.75 0 0 0 2 4.75v3.26a3.235 3.235 0 0 1 1.75-.51h12.5c.644 0 1.245.188 1.75.51V6.75A1.75 1.75 0 0 0 16.25 5h-4.836a.25.25 0 0 1-.177-.073L9.823 3.513A1.75 1.75 0 0 0 8.586 3H3.75ZM3.75 9A1.75 1.75 0 0 0 2 10.75v4.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 18 15.25v-4.5A1.75 1.75 0 0 0 16.25 9H3.75Z" />
                    </svg>`,
                    () => {
                        this.log(folder, index);
                        // this.client?.routes.navigate(folder.path);
                    }
                );
            });



        return html`<div class="server-breadcrumb">

        ${this.renderServerName()}

        ${this.renderUserName()}

        ${folders}

        </div>`;
    }

}