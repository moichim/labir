/**
 * @license
 * Copyright 2014-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { html, css, LitElement, PropertyValues, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { createChartWrapper, dataTable, DataTableLike } from '../file/analysis/chart/loader';
import { CallbacksManager, Instance } from '@labir/core';
import { GroupConsumer } from '../../hierarchy/consumers/GroupConsumer';

const DEFAULT_EVENTS = ['ready', 'select'];

import '@google-web-components/google-chart';
import { addHours } from 'date-fns';

/**
 * Constructor names for supported chart types.
 *
 * `ChartWrapper` expects a constructor name and assumes `google.visualization`
 *  as the default namespace.
 */
const CHART_TYPES: Record<string, string | undefined> = {
    'area': 'AreaChart',
    'bar': 'BarChart',
    'md-bar': 'google.charts.Bar',
    'bubble': 'BubbleChart',
    'calendar': 'Calendar',
    'candlestick': 'CandlestickChart',
    'column': 'ColumnChart',
    'combo': 'ComboChart',
    'gantt': 'Gantt',
    'gauge': 'Gauge',
    'geo': 'GeoChart',
    'histogram': 'Histogram',
    'line': 'LineChart',
    'md-line': 'google.charts.Line',
    'org': 'OrgChart',
    'pie': 'PieChart',
    'sankey': 'Sankey',
    'scatter': 'ScatterChart',
    'md-scatter': 'google.charts.Scatter',
    'stepped-area': 'SteppedAreaChart',
    'table': 'Table',
    'timeline': 'Timeline',
    'treemap': 'TreeMap',
    'wordtree': 'WordTree',
};

type GoogleGraphHeader = string[];
type GoogleGraphRows = number[][];

type GoogleGraphData = [
    string[],
    number[]
];


@customElement("group-chart")
export class GroupChart extends GroupConsumer {
    public getTourableRoot(): HTMLElement | undefined {
        throw new Error('Method not implemented.');
    }

    @state()
    protected instances: Instance[] = [];

    @state()
    protected timeout?: NodeJS.Timeout;

    @state()
    protected data: (string | number | Date)[][] = [];

    @state()
    protected colors?: string[];

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

    
        this.group.files.addListener(this.UUID, value => {


            value.forEach( instance => {
                instance.analysisData.listeners.onOutput.set( this.UUID, data => {
                    console.log( data.values[1] );

                    if ( this.timeout !== undefined ) {
                        clearTimeout( this.timeout );
                    }
                    this.timeout = setTimeout( async () => { 
                        await this.calculateData() 
                    }, 0 );

                } );
            } );

            /*
            this.instances.forEach(instance => {
                instance.analysisData.removeListener(this.UUID);
            });
            */

            this.instances = value;

            /*
            this.instances.forEach(instance => {
                instance.analysisData.addListener(this.UUID, data => {
                    if (this.timeout !== undefined) {
                        clearTimeout(this.timeout);
                    }
                    this.timeout = setTimeout(() => this.calculateData(), 10);
                });
            });
            */

        });
        
        /*
        this.group.analysisSync.onSlotSync.add( this.UUID, (a, b) => {

            if ( this.timeout !== undefined ) {
                clearTimeout( this.timeout );
            }
            this.timeout = setTimeout( async () => { 
                await this.calculateData() 
            }, 0 );
        } );
        */

    }

    protected async calculateData() {

        this.log("Přepočítávám data");

        let header: string[] = [];

        let colors: string[] = [];

        let d: [Date, ...number[]][] = [];


        // Iterate the first instance and get the current analysis names
        const firstFile: Instance = this.group.files.value[0];

        if (firstFile !== undefined) {

            const firstRow = firstFile.analysisData.value.values[0];

            if (firstRow !== undefined) {

                header = firstRow;
                colors = firstFile.analysisData.value.colors;

            }

        }


        const sth = await Promise.all( this.instances.map( async ( instance ) => {
            return await Promise.all( instance.analysis.value.map( async ( analysis ) => {
                return analysis.getAnalysisData();
            } ) );
        } ) );



        this.instances.forEach( ( instance ) => {

            const affectedRow = instance.analysisData.value.values[1];

            if (affectedRow) {
                
                const time = new Date();
                time.setTime(instance.timestamp);
                const row: [Date, ...number[]] = [
                    time,
                    ...affectedRow.slice(1) as number[]
                ];

                d.push(row);

            }

        });

        d.sort( (a, b) => {
            return a[0].getTime() - b[0].getTime();
        } );

        this.data = [
            header,
            ...d
        ];

        this.colors = colors;


    }

    protected render(): unknown {

        if (this.data.length <= 1) {
            return nothing;
        }

        return html`
            <div>
                <google-chart 
                    .data=${this.data} 
                    .options=${{
                        colors: this.colors
                    }}
                    w="100" 
                    h="100"
                    type="line"
                    width="100%"
                    style="width: 100%;"
                ></google-chart>
            </div>
        `;
    }

}