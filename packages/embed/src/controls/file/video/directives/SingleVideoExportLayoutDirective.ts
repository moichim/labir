import { css, html, nothing } from "lit";
import { directive, Directive } from "lit/directive.js";
import { classMap } from "lit/directives/class-map.js";
import {StyleInfo, styleMap} from 'lit/directives/style-map.js';
import { ref, Ref } from "lit/directives/ref.js";
import { SingleVideoRenderProps } from "../ISingleVideoExportElement";

export class SingleVideoExportLayoutDirective {


    private static renderHistogram(
        props: SingleVideoRenderProps
    ): unknown {
        if ( ! props.hasHistogram ) {
            return nothing;
        }

        return html`<registry-histogram></registry-histogram>`;
    }

    private static renderThermalScale(
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
    
    private static renderAnalyses(
        props: SingleVideoRenderProps
    ): unknown {

        if ( ! props.hasAnalysis ) {
            return nothing;
        }

        return html`<div class="export-element-content--analyses">
            <!-- Analysis content here -->
            <file-analysis-complex></file-analysis-complex>
        </div>`;

    }

    private static renderMainContent(
        props: SingleVideoRenderProps
    ): unknown {


        const content: unknown[] = [
            html`<file-canvas></file-canvas>`,
        ];

        if ( props.hasTimeline ) {
            content.push(html`<file-timeline hasplaybutton="false"></file-timeline>`);
        }

        return html`<div>
            ${content}
        </div>`;

    }

    public static styles = css`
    
        .export-element {

            position: relative;


            --thermal-export-bg: white;
            --thermal-export-fg: black;

            --thermal-crop: 2em;

            padding: var( --thermal-crop );

            box-sizing: border-box;

            .crop {
                position: absolute;
                width: var( --thermal-crop );
                height: var( --thermal-crop );
                box-sizing: border-box;

                &.crop-t {
                    top: 0;
                }

                &.crop-b {
                    bottom: 0;
                }

                &.crop-l {
                    left: 0;
                }

                &.crop-r {
                    right: 0;
                }

                &.crop-t.crop-l {
                    border-bottom: 1px solid var(--thermal-slate);
                    border-right: 1px solid var(--thermal-slate);
                }

                &.crop-t.crop-r {
                    border-bottom: 1px solid var(--thermal-slate);
                    border-left: 1px solid var(--thermal-slate);
                }

                &.crop-b.crop-l {
                    border-top: 1px solid var(--thermal-slate);
                    border-right: 1px solid var(--thermal-slate);
                }

                &.crop-b.crop-r {
                    border-top: 1px solid var(--thermal-slate);
                    border-left: 1px solid var(--thermal-slate);
                }
            }


            .export-overlay {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 99;
                cursor: help;

                box-sizing: border-box;
                padding: var( --thermal-crop );

                transition: all .3s ease;

                display: flex;
                align-items: stretch;
                justify-content: stretch;

                span {

                    width: 100%;
                    padding: 1em;
                
                    opacity: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    box-sizing: outline-box;

                    transition: opacity .3s ease;
                    
                    color: var( --thermal-export-bg );
                    
                }

                &:hover {
                    span {
                        background: color-mix(in srgb, var( --thermal-export-fg ) 50%, transparent);
                        opacity: 1;
                    }
                }
            }

            .export-element-content {
                display: grid;
                box-sizing: border-box;
                background-color: var( --thermal-export-bg );
            }



            &.vertical {
                &.hasAnalysis {

                    .export-element-content {
                        grid-template-columns: auto;
                        grid-template-rows: auto auto;
                    }
        
                }
            }

            &.horizontal {
                &.hasAnalysis {

                    .export-element-content {
                        grid-template-columns: 1fr 1fr;
                        grid-template-rows: auto;
                    }
                }
            }

            &.hasAnalysis {

            }

            &.hasTimeline {
            
            }

            &.hasHistogram {
            
            }

            &.hasThermalScale {
            
            }

            

            &.skin-light {
                --thermal-export-bg: white;
                --thermal-export-fg: black;
            }

            &.skin-dark {
                --thermal-export-bg: black;
                --thermal-export-fg: white;
                --thermal-background: black;
                --thermal-foreground: white;
                --thermal-slate: gray;
                --thermal-slate-dark: darkgray;
                --thermal-slate-light: lightgray;
            }

            &.skin-solarized {
                --thermal-export-bg: #1d5766ff;
                --thermal-export-fg: white;
                --thermal-background: #1d5766ff;
                --thermal-foreground: white;
                --thermal-slate: #27888bff;
                --thermal-slate-dark: #39aaa1ff;
                --thermal-slate-light: #073642;
            }

        
        }
    
    `;
    
    static render(
        reference: Ref<HTMLDivElement>,
        props: SingleVideoRenderProps
    ): unknown {
        
        const classes = {

            "export-element": true,

            vertical: props.isVertical,
            horizontal: ! props.isVertical,

            hasAnalysis: props.hasAnalysis,
            hasHistogram: props.hasHistogram,
            hasTimeline: props.hasTimeline,
            hasThermalScale: props.hasThermalScale,
            ["skin-" + props.skin]: true

        }

        const containerStyle: StyleInfo = {
            width: `calc( ${props.exportFrameWidth}px + var( --thermal-crop ) * 2 )`
        };

        const contentStyle: StyleInfo = {
            width: props.exportFrameWidth + "px",
            gap: props.exportFrameGap + "px",
            padding: props.exportFramePadding + "px"
        }

        const mainContent = [
            this.renderHistogram( props ),
            this.renderThermalScale( props ),
            this.renderMainContent( props )
        ];

        const analyses = this.renderAnalyses( props );

        return html`<!-- The main content rendered through the SingleVideoExportLayoutDirective -->
        <main
            class=${classMap(classes)}
            style=${styleMap(containerStyle)}
        >
            <b class="crop crop-t crop-l"></b>
            <b class="crop crop-t crop-r"></b>
            <b class="crop crop-b crop-l"></b>
            <b class="crop crop-b crop-r"></b>

            <section 
                ${ref(reference)}
                class="export-element-content" 
                style=${styleMap(contentStyle)}
            >

                <div class="export-element-content--main">
                    ${ mainContent }
                </div>

                ${analyses}

            </section>

            <aside class="export-overlay">
                <span>
                    <strong>Náhled videa</strong>
                </span>
            </aside>

        </main>`;


    }

}

export const exportLayoutDirective = SingleVideoExportLayoutDirective.render.bind(SingleVideoExportLayoutDirective);
