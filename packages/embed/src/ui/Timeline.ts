import * as d3 from 'd3';
import { css, html, PropertyValues } from "lit";
import { customElement, queryAssignedElements, state } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';
import { createRef, Ref, ref } from "lit/directives/ref.js";
import { FileType } from '../apps/timeline/structure';
import { ManagerProviderElement } from '../hierarchy/providers/ManagerProvider';
import { TimelineRequest } from './TimelineRequest';

import {FileProviderElement} from "../hierarchy/providers/FileProvider";

import {FileCanvas} from "../controls/file/FileCanvas";
import { Instance, ThermalFileReader } from '@labir/core';

@customElement("timeline-element")
export class TimelineElement extends ManagerProviderElement {

    svgContainerRef: Ref<HTMLDivElement> = createRef();

    containerRef: Ref<HTMLDivElement> = createRef();

    @queryAssignedElements({slot: 'file', flatten: true})
    protected queriedFilesElements!: Array<TimelineRequest>;


    @state()
    protected files: FileType[] = [];

    @state()
    protected providers: FileProviderElement[] = [];

    @state()
    protected from?: number;

    @state()
    protected to?: number;


    connectedCallback(): void {
        super.connectedCallback();

        const observer = new MutationObserver( () => {
            this.onFilesUpdate();
        } );
    
        observer.observe( this, {
            childList: true,
            subtree: false
        } );
        
    }

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);


        if (this.svgContainerRef.value) {
            
            // this.buildD3(this.svgContainerRef.value);
            this.onFilesUpdate();
        }
    }


    protected buildD3() {

        if ( ! this.svgContainerRef.value || this.from === undefined || this.to === undefined ) {
            this.log( "WTF??" );
            return;
        }


        const width = this.svgContainerRef.value.clientWidth;
        const height = this.svgContainerRef.value.clientHeight;

        const marginTop = 20;
        const marginRight = 20;
        const marginBottom = 30;
        const marginLeft = 40;

        const from = new Date();
        from.setTime( this.from );
        const to = new Date();
        to.setTime( this.to );

        // Declare the x (horizontal position) scale.
        const x = d3.scaleUtc()
            .domain([from, to])
            .range([marginLeft, width - marginRight]);

        // Declare the y (vertical position) scale.
        const y = d3.scaleLinear()
            .domain([0, 100])
            .range([height - marginBottom, marginTop]);

        const svg = d3.create("svg")
            .attr("width", width)
            .attr("height", height);

        svg.append( "g" )
            .attr( "transform", `translate(0,${height - marginBottom})` )
            .call(d3.axisBottom(x));

        svg.append( "g" )
            .attr( "transform", `translate(${marginLeft},0)` )
            .call(d3.axisLeft(y));

        this.svgContainerRef.value.appendChild(svg.node()!);

    }

    protected async onFilesUpdate() {

        this.files = [];
        this.from = undefined;
        this.to = undefined;

        const newFiles = this.queriedFilesElements.map( element => ({
            thermalUrl: element.thermal,
            visibleUrl: element.visible
        }) );

        this.files = newFiles;

        // Remove existing children
        if ( this.containerRef.value ) {
            Array.from( this.containerRef.value.children ).forEach( el => {
                if ( el instanceof FileProviderElement ) {
                    el.disconnectedCallback();
                }
                this.containerRef.value?.removeChild(el);
            } );
        }

        const registry = this.manager.addOrGetRegistry( this.UUID );

        const service = registry.service;

        const results = await service.loadFiles(...this.files );

        const BI = await Promise.all( results
            .filter( result => result instanceof ThermalFileReader )
            .map( async ( result ) => await result.baseInfo() ) );

        BI.forEach( file => {
            
            this.from = this.from === undefined
                ? file.timestamp
                : Math.min( this.from, file.timestamp );

            this.to = this.to === undefined
                ? file.timestamp
                : Math.max( this.to, file.timestamp );

        } );

        this.buildD3();


    }



    

    public static styles = css`
        .container{
            width: 100%;
            height: 500px;
        }
    `;

    render() {
        return html`

            <registry-provider slug="timeline">
                <group-provider slug="timeline">

                    <div class="container" ${ref(this.svgContainerRef)}></div>
                    
                    <div class="" ${ref(this.containerRef)}></div>

                </group-provider>
            </registry-provider>

            <slot name="file"></slot>
        
        `;
    }


}
