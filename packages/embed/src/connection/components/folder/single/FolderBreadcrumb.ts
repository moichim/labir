import { css, CSSResultGroup, html, nothing, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { BreadcrumbItem } from "packages/server/client/src/responseEntities";
import icons from "../../../../utils/icons";
import { ClientConsumer } from "../../ClientConsumer";
import { ifDefined } from "lit/directives/if-defined.js";
import { consume } from "@lit/context";
import { lockedBrowsingTo } from "../../../ClientContext";
import { t } from "i18next";
import { T } from "../../../../translations/Languages";



type BreadcrumbItemInternal = {
    onClick?: () => void;
    icon: string;
    iconStyle: string;
    label: string;
    tooltip?: string;
}



@customElement("folder-breadcrumb")
export class FolderBreadcrumb extends ClientConsumer {

    @property({ type: Object })
    public breadcrumb: BreadcrumbItem[] = [];

    @property({ type: Function })
    public onFolderClick?: (folder: BreadcrumbItem) => void;

    @property({ type: Function })
    public onUserClick?: () => void;

    @consume({ context: lockedBrowsingTo, subscribe: true })
    private lockedBrowsingTo?: string;


    protected server = icons.wifi.micro("icon");
    protected user = icons.user.micro("icon");
    protected folder = icons.folder.micro("icon");

    @state()
    private items: BreadcrumbItemInternal[] = [];


    public static styles?: CSSResultGroup | undefined = css`
    
        :host {
            display: flex;
            align-items: center;
            gap: 0.5em;

            color: var(--thermal-slate);
            font-size: calc( var(--thermal-fs) * 0.8 );
        }

        .item {
            opacity: .5;
        }

        .interactive {
            opacity: .7;
        }

        .current {
            opacity: .7;
            text-decoration: underline;
        }
    
    `;


    protected renderItem(
        item: BreadcrumbItemInternal,
        index: number
    ): TemplateResult {

        const isInteractive = item.onClick !== undefined && index < this.items.length - 1;

        const classNames = {
            item: true,
            [item.icon]: true,
            current: index === this.items.length - 1,
            interactive: isInteractive
        }

        return html`
        ${index > 0 ? html`<span>/</span>` : nothing}
        <thermal-btn 
            class="${classMap(classNames)}"
            @click=${item.onClick?.bind(this)}
            size="sm"
            plain="true"
            variant="breadcrumb"
            icon="${item.icon}"
            iconStyle="${item.iconStyle}"
            interactive=${isInteractive ? "true" : "false"}
            tooltip=${item.tooltip ? item.tooltip : undefined}
        >
            ${item.label}
        </thermal-btn>`;
    }


    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);


        if (
            _changedProperties.has("breadcrumb")
            || _changedProperties.has("lockedLocation")
            || _changedProperties.has("onFolderClick")
            || _changedProperties.has("onUserClick")
        ) {
            this.items = this.calculateItems(
                this.breadcrumb,
                this.lockedBrowsingTo
            );
        }


    }

    private calculateItems(
        breadcrumb: BreadcrumbItem[],
        lockedLocation?: string
    ) {

        const items: BreadcrumbItemInternal[] = [];

        // Odkaz na server přidáme vždy, s případnou ikonkou zamčení
        items.push({
            icon: "wifi",
            iconStyle: "micro",
            label: this.serverInfo?.name || "Server"
        });

        // Přidáme odkaz na uživatele, pokud je k dispozici
        if (this.identity) {


            const userItem: BreadcrumbItemInternal = {
                icon: "user",
                iconStyle: "micro",
                label: this.identity.meta.name || this.identity.user || "User",
            };

            // Pokud je odemčená lokace, přidáme funkci pro přechod na uživatelovo přehled
            if (!lockedLocation) {
                userItem.tooltip = t(T.overviewofyourfolders);
                userItem.onClick = () => {
                    this.onUserClick?.();
                };
            }

            items.push(userItem);

        }

        // Pokud je prohlížení uzamčeno na určitou lokaci, přidáme ještě ikonku zámku
        if (lockedLocation) {

            const lockedLabel = breadcrumb.find(item => item.path === lockedLocation)?.name || lockedLocation;

            items.push({
                icon: "lock",
                iconStyle: "micro",
                label: "",
                tooltip: `V tomto zobrazení procházíte pouze složku "${lockedLabel}".`,
            });
        }

        // Přidáme složky z breadcrumbu, ale jen ty, které obsahují lockedlocation

        for (const item of breadcrumb) {

            if (item.type !== "folder") {
                continue;
            }

            if (lockedLocation !== undefined && !item.path.includes(lockedLocation)) {
                continue;
            }

            const folderItem: BreadcrumbItemInternal = {
                icon: "folder",
                iconStyle: "micro",
                label: item.name || "Folder",
                tooltip: item.path || "Folder",
                onClick: () => this.onFolderClick?.(item),
            };

            items.push(folderItem);
        }

        return items;


    }


    protected render(): unknown {

        return html`${this.items.map(this.renderItem.bind(this))}`;

    }

}