import { describe, test, expect } from "vitest";
import { apiCallGuest } from "../../utils/apiCallGuest";


describe("GET action=grid – testování parametrů from a to (timestamp)", () => {


    test("výsledky jsou omezeny pouze na snímky v zadaném rozsahu (from–to)", async () => {
        // Nastav konkrétní hodnoty from a to podle tvých dat (timestamp v ms)
        const from = Date.UTC(2025, 4, 11, 10, 0, 7); // 1.1.2024 00:00:00 UTC
        const to = Date.UTC(2025, 0, 31, 23, 59, 59); // 31.1.2024 23:59:59 UTC
        const response = await apiCallGuest(
            `zihle?action=grid&from=${from}&to=${to}`
        );
        expect(response.json.success).toBe(true);
        const grid = response.json.data;

        // Ověř, že všechny snímky ve výsledku jsou v rozsahu from–to
        Object.values(grid.groups).forEach(group => {
            Object.values(group.folders).forEach(folder => {
                if (Array.isArray(folder)) {
                    folder.forEach(file => {
                        const fileTime = file.timestamp;
                        expect(fileTime).toBeLessThanOrEqual(from);
                        expect(fileTime).toBeGreaterThanOrEqual(to);
                    });
                }
            });
        });

        // Ověř rozsahy časů
        expect(grid.time.selection.from).toBeLessThanOrEqual(from);
        expect(grid.time.selection.to).toBeGreaterThanOrEqual(to);
        expect(grid.time.files.from).toBeLessThanOrEqual(from);
        expect(grid.time.files.to).toBeGreaterThanOrEqual(to);

        // Zjisti mi nejdřívější čas v souboru
        const min = Object.values(grid.groups).reduce((min, group) => {
            return Object.values(group.folders).reduce((min, folder) => {
                if (Array.isArray(folder)) {
                    const folderMin = Math.min(...folder.map(file => file.timestamp));
                    return Math.min(min, folderMin);
                }
                return min;
            }, min);
        }, Infinity );

        // Zjisti mi nejpozdější čas v souboru
        const max = Object.values(grid.groups).reduce((max, group) => {
            return Object.values(group.folders).reduce((max, folder) => {
                if (Array.isArray(folder)) {
                    const folderMax = Math.max(...folder.map(file => file.timestamp));
                    return Math.max(max, folderMax);
                }
                return max;
            }, max);
        }, -Infinity );

        // Ověř, že min a max jsou v rozsahu from a to
        expect( grid.time.files.from ).toEqual( min );
        expect( grid.time.files.to ).toEqual( max );

    });


    test("pokud je from větší než to, tak to bude pochopeno i tak", async () => {
        const from = Date.UTC(2026, 0, 1, 0, 0, 0);
        const to = Date.UTC(2024, 0, 1, 0, 0, 0);
        const response = await apiCallGuest(
            `zihle?action=grid&from=${from}&to=${to}`
        );
        expect(response.json.success).toBe(true);
        const grid = response.json.data;
        expect(grid.count.displayed).toBe(115);
    });


    test( "filtrování časů s různým seskupiváním", async () => {

        const from = Date.UTC(2025, 0, 1, 0, 0, 0);
        const to = Date.UTC(2025, 12, 31, 23, 59, 59);
        const hour = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=hour` );
        const day = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=day` );
        const week = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=week` );
        const month = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=month` );
        const year = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=year` );

        const counts = [
            hour.json.data.count.displayed,
            day.json.data.count.displayed,
            week.json.data.count.displayed,
            month.json.data.count.displayed,
            year.json.data.count.displayed
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    }  );



    test( "filtrování časů s různým seskupiváním", async () => {

        const from = Date.UTC(2025, 0, 1, 0, 0, 0);
        const to = Date.UTC(2025, 12, 31, 23, 59, 59);

        const hour = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=hour&tags=something` );
        const day = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=day&tags=something` );
        const week = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=week&tags=something` );
        const month = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=month&tags=something` );
        const year = await apiCallGuest( `zihle?action=grid&from=${from}&to=${to}&by=year&tags=something` );

        const counts = [
            hour.json.data.count.omitted,
            day.json.data.count.omitted,
            week.json.data.count.omitted,
            month.json.data.count.omitted,
            year.json.data.count.omitted
        ];

        counts.forEach( count => expect( count ).toBe( counts[0] ) );

    }  );



});
