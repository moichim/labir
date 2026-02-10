import { directive, Directive } from "lit/directive.js";
import { AbstractSingleVideoExport } from "../AbstractSingleVideoExport";
import { html, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { ref } from "lit/directives/ref.js";
import { exportConfigDirective } from "./SingleVideoExportConfigDirective";
import { exportLayoutDirective } from "./SingleVideoExportLayoutDirective";

class SingleVideoExportDirective extends Directive {


    protected renderWrappedWithFileProvider(
        app: AbstractSingleVideoExport,
        content: unknown,
    ): unknown {
        const file = app.outerFile;

        if (!file) {
            return nothing;
        }

        return html`<file-provider
                ${ref(app.fileCopyElementRef)}
                thermal=${file.thermalUrl}
                autoclear="true"
                analysis1=${ifDefined(app.analysis1)}
                analysis2=${ifDefined(app.analysis2)}
                analysis3=${ifDefined(app.analysis3)}
                analysis4=${ifDefined(app.analysis4)}
                analysis5=${ifDefined(app.analysis5)}
                analysis6=${ifDefined(app.analysis6)}
                analysis7=${ifDefined(app.analysis7)}
                style="display: contents;"
                keepInitialHistogram="true"
            >
                ${content}
            </file-provider>`;
    }

    protected renderWrappedWithNestedProviders(
        app: AbstractSingleVideoExport,
        content: unknown
    ): unknown {

        const registry = app.registry;
        const group = app.group;

        if (!registry || !group) {
            return nothing;
        }

        return html`<registry-provider 
            slug="${app.slug}"
            style="display: contents;"
        >
            <group-provider 
                slug=${app.slug}
                style="display: contents;"
            >
                <file-copy .originalFile=${app.outerFile} ${ref(app.fileCopyElementRef)}>
                    ${content}
                </file-copy>
            </group-provider>
        </registry-provider>`;

    }



    public render(element: AbstractSingleVideoExport, content: unknown): unknown {

        return this.renderWrappedWithNestedProviders( element, content );
    }



}

export const singleVideoProviders = directive(SingleVideoExportDirective);