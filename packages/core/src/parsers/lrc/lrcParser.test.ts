import { describe, expect, it, test } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../node/mocks';
import { ThermalLoader } from '../thermalLoader';
import { ThermalManager } from '../../manager/ThermalManager';

describe("LrcParser", () => {

    it.skip("reading a thermogram from TIMI Edu camera", async () => {

        const source = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.SOUSTRUH);

        // Source may not be null
        expect(source).not.toBe(null);

        // Test min and max
        expect(source!.min).toEqual(16.880977630615234);
        expect(source!.max).toEqual(26.37557029724121);

        // Test dimensions
        expect(source!.width).toEqual(160);
        expect(source!.height).toEqual(120);

        // Data type of soustruh is 1
        expect(source!.fileDataType).toEqual(1);

        // Stream count of soustruh is 1
        expect(source!.streamCount).toEqual(1);

        // Unit of soustruh is 2 (celsuius)
        expect(source!.unit).toEqual(2);

        // Fixed timestamp
        expect(source!.timestamp).toEqual(1637749100497);

    });

    it.skip("reading thermogram from HD Camera", async () => {

        const tucnaci = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.TUCNACI);

        expect(tucnaci?.timestamp).toEqual(1590143917267);
        expect(tucnaci?.min).toEqual(10.905914306640625);
        expect(tucnaci?.max).toEqual(35.1416015625);
        expect(tucnaci?.pixels.length).toEqual(786432);
        expect(tucnaci?.unit).toEqual(2);
        expect(tucnaci?.width).toEqual(1024);
        expect(tucnaci?.height).toEqual(768);
        expect(tucnaci?.fileDataType).toEqual(0);
        expect(tucnaci?.signature).toEqual("LRC\u0000");

    });

    it.skip("parsing various timestamps", async () => {

        // Load the first thermogram
        const cas = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.CAS);

        // expect( cas ).toBeInstanceOf( ThermalFileSource );
        expect(cas!.timestamp).toEqual(1705064977788);


        // Load the first thermogram
        const soustruh = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.SOUSTRUH);

        // Test its timestamp
        expect(soustruh!.timestamp).toEqual(1637749100497);


        // Load the pinguins
        const tucnaci = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.TUCNACI);

        expect(tucnaci?.timestamp).toEqual(1590143917267);

    });

    it.skip("parsing frame count", async () => {

        // Soustruh is a TIMI camaera file and shouls have one frame
        const soustruh = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.SOUSTRUH)
        expect(soustruh!.frameCount).toEqual(1);

        // Tucnaci is a HD camera file and should have one frame
        const tucnaci = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.TUCNACI);
        expect(tucnaci!.frameCount).toEqual(1);

        // Sequence is a TIMI camera file and should have 518 frames
        const sequence = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.SEQUENCE)
        expect(sequence!.frameCount).toEqual(518);


    });

    it.skip("parsing LRC sequences", async () => {

        const lrc = await ThermalLoader.fromUrl(THERMOGRAM_PATHS.SEQUENCE);

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry("test_registry");
        const group = registry.groups.addOrGetGroup("test_group");

        const instance = lrc!.createInstance(group);

        const timeline = instance.timeline;

        expect(timeline.value).toEqual(0);

    });


});