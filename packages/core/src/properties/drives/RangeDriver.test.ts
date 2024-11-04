import { vi, describe, test, expect } from "vitest";
import { loadFileForTests } from "../../../devserver/node/scaffold";
import { THERMOGRAM_PATHS } from "../../../devserver/node/mocks";
import { ThermalManager } from "../../hierarchy/ThermalManager";
import { ThermalFileReader } from "../../loading/workers/ThermalFileReader";

describe("RangeDriverTest", () => {

    test("standard behavior", async () => {

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry("reg");
        const group = registry.groups.addOrGetGroup("grp");
        const range = registry.range;

        let imposingCounter = 0;

        range.addListener("test", value => {
            imposingCounter++;
        });

        expect(range.value).toBeUndefined();
        expect(imposingCounter).toEqual(0);


        const reader = await registry.service.loadFile(THERMOGRAM_PATHS.SOUSTRUH) as ThermalFileReader;

        const instance = await reader.createInstance(group);

        registry.postLoadedProcessing();

        expect(range.value).not.toBeUndefined();
        expect(imposingCounter).toEqual(1);


    });

    test("with preset range", async () => {

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry("reg");
        const group = registry.groups.addOrGetGroup("grp");
        const range = registry.range;

        let imposingCounter = 0;

        range.addListener("test", value => {
            imposingCounter++;
        });

        expect(range.value).toBeUndefined();
        expect(imposingCounter).toEqual(0);

        range.imposeRange({ from: 17, to: 20 });

        expect(imposingCounter).toEqual(1);


        const reader = await registry.service.loadFile(THERMOGRAM_PATHS.SOUSTRUH) as ThermalFileReader;

        const instance = await reader.createInstance(group);


        registry.postLoadedProcessing();

        expect(range.value).not.toBeUndefined();

        expect(range.value?.from).toEqual(17);
        expect(range.value?.to).toEqual(20);
        expect(instance.group.registry.range.value?.from).toEqual(17);
        expect(instance.group.registry.range.value?.to).toEqual(20);

        expect(imposingCounter).toEqual(1);


    });

});