import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";

// Testy na počty snímků v závislosti na filtru

describe("GET action=grid – počty snímků podle filtru", () => {
    
    test( "counts must match in every grouping", async () => {
        
        const hour = await apiCallGuest( "zihle?action=grid&by=hour" );
        const day = await apiCallGuest( "zihle?action=grid&by=day" );
        const week = await apiCallGuest( "zihle?action=grid&by=week" );
        const month = await apiCallGuest( "zihle?action=grid&by=month" );
        const year = await apiCallGuest( "zihle?action=grid&by=year" );

        const counts = [
            hour.json.data.count.displayed,
            day.json.data.count.displayed,
            week.json.data.count.displayed,
            month.json.data.count.displayed,
            year.json.data.count.displayed
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    });

    test( "counts must match in every grouping again on manetin", async () => {

        const hour = await apiCallGuest( "manetin?action=grid&by=hour" );
        const day = await apiCallGuest( "manetin?action=grid&by=day" );
        const week = await apiCallGuest( "manetin?action=grid&by=week" );
        const month = await apiCallGuest( "manetin?action=grid&by=month" );
        const year = await apiCallGuest( "manetin?action=grid&by=year" );

        const counts = [
            hour.json.data.count.displayed,
            day.json.data.count.displayed,
            week.json.data.count.displayed,
            month.json.data.count.displayed,
            year.json.data.count.displayed
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    });

    test( "counts must match in every grouping again on zihle with tag filter", async () => {

        const hour = await apiCallGuest( "zihle?action=grid&by=hour&tags=something" );
        const day = await apiCallGuest( "zihle?action=grid&by=day&tags=something" );
        const week = await apiCallGuest( "zihle?action=grid&by=week&tags=something" );
        const month = await apiCallGuest( "zihle?action=grid&by=month&tags=something" );
        const year = await apiCallGuest( "zihle?action=grid&by=year&tags=something" );

        const counts = [
            hour.json.data.count.displayed,
            day.json.data.count.displayed,
            week.json.data.count.displayed,
            month.json.data.count.displayed,
            year.json.data.count.displayed
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    });

    test( "counts must match in every grouping again on zihle with folders filter", async () => {

        const hour = await apiCallGuest( "zihle?action=grid&by=hour&folders=barevne-krabicky,trava" );
        const day = await apiCallGuest( "zihle?action=grid&by=day&folders=barevne-krabicky,trava" );
        const week = await apiCallGuest( "zihle?action=grid&by=week&folders=barevne-krabicky,trava" );
        const month = await apiCallGuest( "zihle?action=grid&by=month&folders=barevne-krabicky,trava" );
        const year = await apiCallGuest( "zihle?action=grid&by=year&folders=barevne-krabicky,trava" );

        const counts = [
            hour.json.data.count.omitted,
            day.json.data.count.omitted,
            week.json.data.count.omitted,
            month.json.data.count.omitted,
            year.json.data.count.omitted
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    });

    test( "counts must match in every grouping again on zihle with folders filter and tag", async () => {

        const hour = await apiCallGuest( "zihle?action=grid&by=hour&folders=barevne-krabicky,trava&tags=something" );
        const day = await apiCallGuest( "zihle?action=grid&by=day&folders=barevne-krabicky,trava&tags=something" );
        const week = await apiCallGuest( "zihle?action=grid&by=week&folders=barevne-krabicky,trava&tags=something" );
        const month = await apiCallGuest( "zihle?action=grid&by=month&folders=barevne-krabicky,trava&tags=something" );
        const year = await apiCallGuest( "zihle?action=grid&by=year&folders=barevne-krabicky,trava&tags=something" );

        const counts = [
            hour.json.data.count.displayed,
            day.json.data.count.displayed,
            week.json.data.count.displayed,
            month.json.data.count.displayed,
            year.json.data.count.displayed
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    });
});
