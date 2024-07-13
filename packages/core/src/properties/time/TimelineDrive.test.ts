import { describe, expect, it } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../node/mocks';
import { ThermalManager } from '../../manager/ThermalManager';
import { FileReaderService } from '../../reload/FileReaderService';
import { TimelineDrive } from './TimelineDrive';

describe("ReTimelineDrive", () => {

    it("control the timeline", async () => {

        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry("test_registry");
        const group = registry.groups.addOrGetGroup("test_group");

        const reader = await registry.service.loadFile( THERMOGRAM_PATHS.SEQUENCE ) as FileReaderService;

        const instance = await reader.createInstance( group );

        const timeline = instance.timeline;
        const buffer = timeline.buffer;

        expect( timeline ).toBeInstanceOf( TimelineDrive );

        // Test timeline initial properties
        expect( timeline._initial ).toEqual(0);
        expect( timeline.duration ).toEqual(instance.duration);
        expect( timeline.startTimestampRelative ).toEqual( 0 );
        expect( timeline.endTimestampRelative ).toEqual( timeline.steps[ timeline.steps.length - 1 ].relative )

        // Current frame in the buffer
        expect( buffer.currentFrame.pixels[0] ).toEqual( instance.pixels[0] );
        expect( buffer.isSequence ).toEqual(true);
        // expect( timeline.buffer.currentFrame.timestamp ).toEqual( instance.timestamp );

        // Instance consistency
        expect( instance.frameCount ).toEqual( 518 );

        // Searching for the steps
        expect( timeline.findPreviousRelative(1).relative ).toEqual( 0 );
        expect( timeline.findPreviousRelative( 113 ).relative ).toEqual( 0 );
        expect( timeline.findPreviousRelative( 114 ).relative ).toEqual( 114 );

        // Store the value of the first pixel of the first frame for testing
        const firstPixel = timeline.buffer.currentFrame.pixels[0];

        // Test the first pixel
        expect( firstPixel ).toEqual( instance.pixels[0] );


        // Now try setting time and controlling the value
        
        // Setting negative time
        const result_after_negative = await timeline.setRelativeTime( -100 );
        expect( timeline.value ).toEqual( 0 );
        expect( buffer.currentFrame.timestamp ).toEqual(instance.timelineData[0].absolute );
        expect( result_after_negative.preloaded ).toEqual( false );
        expect( result_after_negative.buffer.length ).toEqual( 0 );

        const result_after_too_much = await timeline.setRelativeTime( 999 * 9999 );
        // await timeline.setRelativeTime( 999 * 9999 );
        expect( timeline.value ).toEqual( 61085 );
        expect( timeline.value ).toEqual( instance.duration );
        expect( result_after_too_much.preloaded ).toEqual( false );
        expect( result_after_too_much.buffer.length ).toEqual( 0);

        expect( result_after_too_much.relativeTime ).toEqual( 61085 );
        expect( result_after_too_much.currentStep.index ).toEqual( 517 );
        expect( result_after_too_much.preloaded ).toEqual( false );
        expect( result_after_too_much.hasChanged ).toEqual( true );

        expect( result_after_too_much.buffer ).toEqual( buffer.bufferedStepsArray );

        // Now set to the second frame
        const result_second_frame = await timeline.setRelativeTime( 114 );

        console.log( buffer.bufferRelativeTimestamps );

        expect( result_second_frame.currentStep.index ).toEqual( 1 );

        expect( buffer.currentFrame.timestamp ).toEqual( timeline.currentStep.absolute );
        expect( buffer.bufferedStepsArray[0].index ).toEqual(result_second_frame.currentStep.index + 1);

        // Now move one second later (no change should happen)
        const result_after_second_frame = await timeline.setRelativeTime( 114 + 60 );

        expect( result_after_second_frame.hasChanged ).toEqual( false );
        expect( result_after_second_frame.preloaded ).toEqual( false );

        // now set to the half of the sequence
        const result_in_half = await timeline.setValueByPercent( 50 );

        expect( result_in_half.currentFrame.timestamp ).toEqual( result_in_half.currentStep.absolute );

        expect( result_in_half.currentStep.index ).toEqual( 249 );

        expect( result_in_half.preloaded ).toEqual( true );

        expect( result_in_half.buffer[0].index ).toEqual( result_in_half.currentStep.index + 1 );

    });


});