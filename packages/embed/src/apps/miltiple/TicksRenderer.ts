import { html } from "lit";
import { AbstractMultipleApp } from "./AbstractMultipleApp";
import { HtmlResult } from "./HtmlResult";
import { format } from "date-fns";
	

import {styleMap} from 'lit/directives/style-map.js';

type RangeValue = {
    percent: number,
    value: number
}

type MinuteType = {
    from: RangeValue,
    to: RangeValue,
    seconds: SecondType[]
}

type SecondType = RangeValue

export class TicksRenderer {

    public static FORMAT_MIN = "";
    public static FORMAT_SEC = "";
    public static FORMAT_HOUR = "";

    public static WIDTH_SECOND_LABEL = 30;
    public static WIDTH_MINUTE_LABEL = 40;

    public constructor(
        public readonly parent: AbstractMultipleApp
    ) {

    }

    /**
     * - zjistit celkový teplotní rozsah
     * - rozdělit na minuty a spočítat procenta pro jednotlivé minuty (poslední bude haprovat) 
     * 2. zjisit, kolik budu mít elementů
     * 
     */



    protected renderTick(
        percent: number,
        width: number,
        value: string,
        fontSize: number,
        color: string,
        background: string,
        box: boolean = false
    ) {

        const pointer = {
            background: box 
                ? background 
                : color,
            width: box 
                ? "10px" 
                : "1px",
            height: box 
                ? "10px" 
                : "100%",
            transform: box
                ? "rotate(90deg)"
                : "none"
        }

        const label = {
            color: color,
            background: background,
            fontSize: fontSize + "px",
            fontHeight: "1em",
            padding: "3px",
            width: "100%",
        }


        return html`<div
            style="left:${percent}%;top:0px;position: absolute;width: 0;"
        >
            <div style="position: relative;width:${width}px;left:-${width/2}px;text-align:center">

                <div style="width: 100%; text-align: center; height: 5px;">
                    <div style="${styleMap(pointer)}"></div>
                </div>
                
                <div style=${styleMap(label)}>
                    ${value}
                </div>

            </div>
        </div>`

    }


    protected renderMinute(
        fromTimestamp: number,
        toTimestamp: number,
        width: number
    ) {

        const num = Math.floor( width / TicksRenderer.WIDTH_SECOND_LABEL );

        let secs: number[] = [];

        if ( num === 0 ) {
            // No seconds at all
        }
        else if ( num < 2 ) {
            secs = [50];
        } else if ( num < 12 ) {
            secs = [ 25, 50, 75 ];
        } else if ( num < 60 ) {
            secs = [ 1/12, 2/12, 3/12, 4/12, 5/12, 6/12, 7/12,8/12,9/12,10/12,11/12 ]
        } else {
            for ( let i = 1; i<60;i++ ) { secs.push( i/60 ) }
        }

        // Dělitelé: 4, 12, 60

        if ( true ) {}


        return html`<div class="minute">


            ${this.renderTick(
                100,
                TicksRenderer.WIDTH_MINUTE_LABEL,
                format( toTimestamp, TicksRenderer.FORMAT_MIN ),
                12,
                "var( --thermal-foreground )",
                "transparent",
                true
            )}

            <div>${format( toTimestamp, TicksRenderer.FORMAT_MIN )}</div>
        </div>`;


    }




    public buildElements(
        element: HTMLElement,
        timestampFrom: number,
        timestampTo: number,
        relative: boolean = true
    ): HtmlResult {



        return html``;



    }

}