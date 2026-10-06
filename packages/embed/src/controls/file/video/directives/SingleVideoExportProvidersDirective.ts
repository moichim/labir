import { directive, Directive } from "lit/directive.js";
import { AbstractSingleVideoExport } from "../AbstractSingleVideoExport";
import { html, nothing } from "lit";
import { ref } from "lit/directives/ref.js";
import { exportConfigDirective } from "./SingleVideoExportConfigDirective";
import { exportLayoutDirective } from "./SingleVideoExportLayoutDirective";

class SingleVideoExportDirective extends Directive {

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
                <file-copy 
                    .originalFile=${app.outerFile} 
                    .withAnalyses=${app.renderProps.hasAnalysis}
                    ${ref(app.fileCopyElementRef)}
                >
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