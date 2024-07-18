import { describe, expect, test } from 'vitest';
import { ThermalManager } from './ThermalManager';
import { THERMOGRAM_PATHS as THERMOGRAM_PATHS } from '../../devserver/node/mocks';

describe("ThermalRegistry", () => {

    const REGISTRY_ID = "registry_id";
    const GROUP_ID = "group_id";

    test("loading of files", async () => {

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry(REGISTRY_ID);
        const group = registry.groups.addOrGetGroup(GROUP_ID);

        // First load
        await registry.loadOneFile({ thermalUrl: THERMOGRAM_PATHS.SOUSTRUH }, GROUP_ID);

        console.log( group.files );

        expect(registry.groups.value.length).toEqual(1);
        expect(group.files.value.length).toEqual(1);

        // Validate if there is only one instance of the group
        expect(registry.groups.addOrGetGroup(GROUP_ID).hash).toEqual(group.hash);


        // Second load
        await registry.loadOneFile({ thermalUrl: THERMOGRAM_PATHS.CAS }, GROUP_ID);

        expect(registry.groups.addOrGetGroup(GROUP_ID).hash).toEqual(group.hash);
        expect(group.files.value.length).toEqual(1);


        // Third load
        await registry.loadFiles({
            [GROUP_ID]: [{ thermalUrl: THERMOGRAM_PATHS.CAS }]
        });

        expect(registry.groups.addOrGetGroup(GROUP_ID).hash).toEqual(group.hash);
        expect(group.files.value.length).toEqual(1);


        // Fourth load
        await registry.loadFiles({
            [GROUP_ID]: [
                { thermalUrl: THERMOGRAM_PATHS.CAS },
                { thermalUrl: THERMOGRAM_PATHS.SOUSTRUH }
            ]
        });

        expect(registry.groups.addOrGetGroup(GROUP_ID).hash).toEqual(group.hash);
        expect(group.files.value.length).toEqual(2);


        // Fifth load to a new group

        await registry.loadFiles({
            ["new_group"]: [
                { thermalUrl: THERMOGRAM_PATHS.CAS },
                { thermalUrl: THERMOGRAM_PATHS.SOUSTRUH },
                // { thermalUrl: THERMOGRAM_PATHS.CAS }
            ]
        });

        expect(registry.groups.addOrGetGroup(GROUP_ID).hash).toEqual(group.hash);
        expect(group.instances.value.length).toEqual(0);

    });

    test("minmax is calculated from the groups", async () => {

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry(REGISTRY_ID);

        await registry.loadFiles({
            ["new_group"]: [
                { thermalUrl: THERMOGRAM_PATHS.CAS },
                { thermalUrl: THERMOGRAM_PATHS.SOUSTRUH },
                // { thermalUrl: THERMOGRAM_PATHS.CAS }
            ]
        });

        expect( registry.minmax.value!.min ).toEqual( -19.139999389648438 );
        expect( registry.minmax.value!.max ).toEqual( 26.37557029724121 );
        expect( registry.loading.value ).toEqual( false );

    });

});