import { html, nothing } from "lit";
import { directive, Directive } from "lit/directive.js";
import { classMap } from "lit/directives/class-map.js";
import {StyleInfo, styleMap} from 'lit/directives/style-map.js';
import { ref, Ref } from "lit/directives/ref.js";
import { SingleVideoRenderProps } from "../ISingleVideoExportElement";

class SingleVideoExportLayoutDirective extends Directive {


    private renderHistogram(
        props: SingleVideoRenderProps
    ): unknown {
        if ( ! props.hasHistogram ) {
            return nothing;
        }

        return html`<registry-histogram></registry-histogram>`;
    }

    private renderThermalScale(
        props: SingleVideoRenderProps
    ): unknown {

        if ( ! props.hasThermalScale ) {
            return nothing;
        }

        return html`<div>
            <registry-range-slider></registry-range-slider>
            <registry-ticks-bar></registry-ticks-bar>
        </div>`;

    }
    
    private renderAnalyses(
        props: SingleVideoRenderProps
    ): unknown {

        if ( ! props.hasAnalysis ) {
            return nothing;
        }

        return html`<section class="">
            <!-- Analysis content here -->
            <file-analysis-complex></file-analysis-complex>
        </div>`;

    }

    private renderMainContent(
        props: SingleVideoRenderProps
    ): unknown {


        const content: unknown[] = [
            html`<file-canvas></file-canvas>`,
        ];

        if ( props.hasTimeline ) {
            content.push(html`<file-timeline></file-timeline>`);
        }

        return html`<div>
            ${content}
        </div>`;

    }
    
    render(
        reference: Ref<HTMLDivElement>,
        props: SingleVideoRenderProps
    ): unknown {
        
        const classes = {

            export: true,

            vertical: props.isVertical,
            horizontal: ! props.isVertical,

            hasAnalysis: props.hasAnalysis,
            noAnalysis: ! props.hasAnalysis,

        }

        const containerStyle: StyleInfo = {
            width: props.exportFrameWidth + "px",
            padding: props.exportFramePadding + "px",
            background: "var( --thermal-background )",
            color: "var( --thermal-foreground )",
            fontSize: "var( --thermal-fs )"
        };

        const mainContent = [
            this.renderHistogram( props ),
            this.renderThermalScale( props ),
            this.renderMainContent( props )
        ];

        const analyses = this.renderAnalyses( props );

        return html`<!-- The main content rendered through the SingleVideoExportLayoutDirective -->
        <main
            ${ref(reference)}
            class=${classMap(classes)}
            style=${styleMap(containerStyle)}
        >

            <section class="">
                ${ mainContent }
            </section>

            ${analyses}

        </main>`;


    }

}

export const exportLayoutDirective = directive( SingleVideoExportLayoutDirective)
