import { css, CSSResultGroup, html, nothing } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { GroupEntry, Grouping } from "../group/utils/TimeGrouping";
import { AbstractMultipleApp } from "./AbstractMultipleApp";
import { HtmlResult } from "./HtmlResult";
import { InstanceInteractionCallback, InstanceRenderer } from "./InstanceRenderer";

export class GroupRenderer {

    protected readonly instanceRenderer = new InstanceRenderer(this.element);

    public constructor(
        protected readonly element: AbstractMultipleApp
    ) { }


    public static styles: CSSResultGroup | undefined = css`


        .group {

            
        
        }

        .group:not(.group__bordered) {
            margin-top: calc( var( --thermal-gap ) * .5 );
        }

        .group__bordered {
            border: 1px solid var( --thermal-slate );
            border-radius: var( --thermal-radius );
            margin-top: calc( var( --thermal-gap ) * .5 );
            background-color: color-mix(in srgb, var( --thermal-slate-light ), #fff);
        }

        .group__bordered .group-files {
            padding: calc( var( --thermal-gap ) * .5 );
        }

        .group-files {
            display: flex;
            flex-wrap: wrap;
            width: calc( 100%  + 5px);
            margin: 0 -2.5px;
        }

        .group-files-1 .file { width: 100%; }
        
        .group-files-2 .file { width: 50%; }

        .group-files-3 .file { width: 33%; }

        .group-files-4 .file { width: 25%; }

        .group-files-5 .file { width: 20%; }

        .group-files-6 .file { width: calc( 100% / 6 ); }

        .group-files-7 .file { width: calc( 100% / 7 ); }

        .group-files-8 .file { width: calc( 100% / 8 ); }

        .group-files-9 .file { width: calc( 100% / 9 ); }

        .group-files-10 .file { width: calc( 100% / 10 ); }

        .group-header {

            display: flex;
            gap: var(--thermal-gap);
            align-items: center;
            padding: calc( var( --thermal-gap ) * .5 );
            border-bottom: 1px solid var( --thermal-slate-light );


        
        }

        .group-title {
            margin: 0;
            padding: 0;
            font-size: calc( var(--thermal-fs) * 1.2 );
            color: var( --thermal-foreground );
        }

        .group-info {
            color: var( --thermal-slate );
            font-size: calc( var(--thermal-fs) * .8 );
            margin: 0;
            padding: 0;
        }

    `;

    protected trimmedString(value?: string) {

        if (!value) {
            return undefined;
        }

        return value.trim().length > 0
            ? value.trim()
            : undefined;

    }


    protected renderHeader(
        title?: string,
        info?: string
    ): HtmlResult {
        if (title || info) {

            return html`
                <div class="group-header">
                
                    ${title ? html`<h2 class="group-title">${title}</h2>` : nothing}

                    ${info ? html`<p class="group-info">${info}</p>` : nothing}

                </div>
            `;

        }

        return nothing;
    }


    public renderGroup(
        group: GroupEntry,
        columns: number,
        grouping: Grouping,
        onInstanceEnter: InstanceInteractionCallback,
        onInstanceLeave: InstanceInteractionCallback,
        preservedates: boolean
    ): HtmlResult {

        const title = this.trimmedString(group.label);

        const info = this.trimmedString(group.info);

        const listClasses = {
            "group-files": true,
            [`group-files-${columns}`]: true
        }

        const containerClasses = {
            "group": true,
            "group__bordered": grouping !== "none"
        }

        return html`

            <section class="${classMap(containerClasses)}">

                ${this.renderHeader(title, info)}

                <div class=${classMap(listClasses)}>


                    ${group.files.map(({ instance, innerHtml, label, time }) => {

            return this.instanceRenderer.renderInstance(
                instance,
                onInstanceEnter,
                onInstanceLeave,
                time!,
                preservedates,
                label,
                innerHtml
            );

        })}


                </div>

            </section>

        `;

    }


}