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

import { html, css, LitElement, PropertyValues, nothing, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { createChartWrapper, dataTable, DataTableLike } from '../file/analysis/chart/loader';
import { CallbacksManager, Instance } from '@labir/core';
import { GroupConsumer } from '../../hierarchy/consumers/GroupConsumer';

const DEFAULT_EVENTS = ['ready', 'select'];

import '@google-web-components/google-chart';
import { addHours } from 'date-fns';
import { t } from 'i18next';
import { T } from '../../translations/Languages';

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
    protected data: [
        string[],
        ...[Date,...number[]][]
    ] | undefined;

    @state()
    protected colors?: string[];

    @state()
    protected on: boolean = false;

    protected firstUpdated(_changedProperties: PropertyValues): void {
        super.firstUpdated(_changedProperties);

        this.group.files.addListener( this.UUID, value => {
            this.group.analysisGraph.turnOn();
        } );

        this.group.analysisGraph.addListener( this.UUID, value => {
            this.log( value );

            if ( value !== undefined ) {
                this.data = value.data;
                this.colors = value.colors;
                this.on = true;
            } else {
                this.data = undefined;
                this.colors = undefined;
                this.on = false;
            }

        } );

    }

    static styles?: CSSResultGroup | undefined = css`
    
        .wrapper {
            transition: all 0.3s ease-in-out;
            width: 100%;
            overflow: hidden;
        }

        .on {
            height: 300px;
            border-bottom: 1px solid var( --thermalforeground );
        }

        .off {
            height: 0px;
        }

    `;

    download() {

        const svg = this.shadowRoot?.querySelectorAll( "google-chart" );

        console.log( svg );

    }


    protected render(): unknown {


        return html`
            <div class="wrapper ${this.on ? "on" : "off"}">

                ${this.on === true ? html`
                    <google-chart 
                        .data=${this.data} 
                        .options=${{
                            colors: this.colors,
                            legend: { position: 'bottom' },
                            hAxis: { title: 'Time' },
                            vAxis: { title: 'Temperature °C' },
                            chartArea: { 
                                width: '90%', 
                            },
                        }}
                        type="line"
                        width="100%"
                        style="width: 100%;height: 300px"
                    ></google-chart>
                ` : nothing}
                
            </div>
        `;
    }

}