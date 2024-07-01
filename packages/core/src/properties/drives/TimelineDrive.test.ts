import { describe, expect, test } from 'vitest';
import { THERMLGRAM_PATHS } from '../../../node/mocks/thermogram.mock';
import { ThermalManager } from '../../manager/ThermalManager';
import { ThermalLoader } from '../../parsers/thermalLoader';
import { FrameType, TimelineFrameChangedEventListener } from './TimelineDrive';

describe("TimelineDrive", () => {

    test("control the timeline", async () => {

        const lrc = await ThermalLoader.fromUrl(THERMLGRAM_PATHS.SEQUENCE);

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry("test_registry");
        const group = registry.groups.addOrGetGroup("test_group");

        const instance = lrc!.createInstance(group);

        const timeline = instance.timeline;

        expect(timeline.value).toEqual(0);

        // The duration needs to be equal to last frame ms
        expect(timeline.duration).toEqual(timeline.framesByIndex.get(instance.frameCount - 1)!.ms);


        // Test maps and current frame
        expect(timeline.framesByIndex.get(0)).not.toBeUndefined();
        expect(timeline.framesByMs.get(0)).not.toBeUndefined();
        expect(timeline.currentFrame).not.toBeUndefined();



        // No change happened yet: timeline.value === 0


        // Test the current frame
        expect(timeline.currentFrame.index).toEqual(0);
        expect(timeline.currentFrame.ms).toEqual(0);

        // Test the next frame
        expect(timeline.nextFrame).not.toEqual(false);
        expect(timeline.nextFrame).toBeInstanceOf(Object);
        expect(timeline.nextFrame?.index).toEqual(1);
        expect(timeline.nextFrame?.ms).toEqual(114);


        // Getting next frames
        expect(timeline.getNextFrameToMs(0)?.ms).toEqual(114);
        expect(timeline.getNextFrameToMs(1)?.ms).toEqual(114);
        expect(timeline.getNextFrameToMs(100)?.ms).toEqual(114);
        expect(timeline.getNextFrameToMs(113)?.ms).toEqual(114);
        expect(timeline.getNextFrameToMs(114)?.ms).toEqual(228);
        expect(timeline.getNextFrameToMs(11168)?.ms).toEqual(11169);
        expect(timeline.getNextFrameToMs(11169)?.ms).toEqual(11283);
        const lastFrame = timeline.framesByMs.get(timeline.duration);
        expect(timeline.getNextFrameToMs(lastFrame!.ms)).toBeUndefined();

        // Getting previous frames
        expect(timeline.getPreviousFrameToMs(0)).toBeUndefined();
        expect(timeline.getPreviousFrameToMs(1)?.ms).toEqual(0);
        expect(timeline.getPreviousFrameToMs(114)?.ms).toEqual(0);

        // Getting frames outside the range
        expect(timeline.getPreviousFrameToMs(-1)).toBeUndefined();
        expect(timeline.getNextFrameToMs(999 * 9999)).toBeUndefined();



        // Setting local timestamps

        // If I set 0, I should see the first frame
        timeline.setMs(0);
        expect(timeline.currentFrame.index).toEqual(0);
        expect(timeline.nextFrame?.index).toEqual(1);

        // Set MS to 1
        timeline.setMs( 1 );
        expect( timeline.currentFrame.index ).toEqual(0);
        expect( timeline.nextFrame?.index ).toEqual(1);

        // Set MS to 113
        timeline.setMs( 113 );
        expect( timeline.currentFrame.index ).toEqual(0);
        expect( timeline.nextFrame?.index ).toEqual(1);

        // Set MS to 114 (to the second frame)
        timeline.setMs( 114 );
        expect( timeline.currentFrame.index ).toEqual(1);
        expect( timeline.nextFrame?.index ).toEqual(2);

        // Set the MS to 11169
        timeline.setMs( 11169 );
        expect( timeline.currentFrame.ms ).toEqual( 11169 );
        expect( timeline.nextFrame?.ms ).toEqual( 11283 );

        // Outside the range
        timeline.setMs( -1000 );
        expect( timeline.currentFrame.ms ).toEqual( 0 );
        timeline.setMs( 99999 * 999999 );
        expect( timeline.currentFrame.ms ).toEqual( timeline.duration );


        // Going to the next frame
        timeline.setMs( 0 );
        timeline.goToNextFrame();
        expect( timeline.currentFrame.index ).toEqual(1);
        timeline.goToNextFrame();
        expect( timeline.currentFrame.index ).toEqual(2);


        // Next frame MS
        timeline.setMs( 0 );
        expect( timeline.nextFrameTimeoutDuration ).toEqual( 114 );

        timeline.setMs( 114 );
        expect( timeline.nextFrameTimeoutDuration ).toEqual( 114 );


        // Testing event listeners

        let currentFrame: undefined | FrameType;
        const currentFrameListener: TimelineFrameChangedEventListener = frame => {
            currentFrame = frame;
        }

        timeline.addChangeListener( "someId", currentFrameListener );

        expect( currentFrame ).toBeUndefined();

        timeline.setMs( 0 );
        expect( timeline.currentFrame ).toEqual( currentFrame );
        timeline.setMs( 114 );
        expect( currentFrame?.index ).toEqual( 1 );

        // Test if change event listener is called only when the frame really changes
        let numCalls = 0;
        const numCallsListener: TimelineFrameChangedEventListener = () => {
            numCalls = numCalls + 1;
        };
        timeline.addChangeListener( "incrementation", numCallsListener );

        expect( numCalls ).toEqual( 0 );
        timeline.setMs( 0 );
        expect( numCalls ).toEqual( 1 );
        timeline.setMs( 100 );
        expect( numCalls ).toEqual( 1 );

        timeline.setMs( 7000 );
        expect( numCalls ).toEqual( 1 );
        timeline.setMs( 4000 );
        expect( numCalls ).toEqual( 2 );

        timeline.setMs( 2001 );
        expect( numCalls ).toEqual( 3 );

        timeline.setMs( 5000 );
        expect( numCalls ).toEqual( 4 );

        timeline.setMs( 11111 );
        expect( numCalls ).toEqual( 5 );
        timeline.setMs( 11111 );
        expect( numCalls ).toEqual( 6 );


    });


});