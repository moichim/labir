import { describe, expect, it } from 'vitest';
import { THERMOGRAM_PATHS } from '../../../node/mocks';
import { ThermalManager } from '../../manager/ThermalManager';
import { FileReaderService } from '../../reload/FileReaderService';
import { ReTimelineDrive } from './ReTimelineDrive';

describe("ReTimelineDrive", () => {

    it("control the timeline", async () => {



        const manager = new ThermalManager;
        const registry = manager.addOrGetRegistry("test_registry");
        const group = registry.groups.addOrGetGroup("test_group");

        const reader = await registry.service.loadFile( THERMOGRAM_PATHS.SEQUENCE ) as FileReaderService;

        const instance = await reader.createInstance( group );

        const timeline = instance.timeline;
        const buffer = timeline.buffer;

        expect( timeline ).toBeInstanceOf( ReTimelineDrive );

        expect( timeline._initial ).toEqual(0);
        expect( timeline.duration ).toEqual(instance.duration);
        expect( timeline.startTimestampRelative ).toEqual( 0 );
        expect( timeline.endTimestampRelative ).toEqual( timeline.steps[ timeline.steps.length - 1 ].relative )
        // CurrentFrame
        expect( timeline.buffer.currentFrame.pixels[0] ).toEqual( instance.pixels[0] );
        expect( timeline.buffer.bufferByAbsoluteTime.size ).toEqual(0);
        // expect( timeline.buffer.currentFrame.timestamp ).toEqual( instance.timestamp );

        expect( instance.frameCount ).toEqual( 518 );

        expect( timeline.findPreviousRelative(1).relative ).toEqual( 0 );
        expect( timeline.findPreviousRelative( 113 ).relative ).toEqual( 0 );
        expect( timeline.findPreviousRelative( 114 ).relative ).toEqual( 114 );

        const firstPixel = timeline.buffer.currentFrame.pixels[0];

        const frame2 = await timeline.setRelativeTime( 2 );

        expect( frame2.pixels[0] ).toEqual( firstPixel );

        const frame113 = await timeline.setRelativeTime( 113 );

        expect( frame113.pixels[0] ).toEqual( firstPixel );

        const frame114 = await timeline.setRelativeTime( 114 );

        expect( frame114.pixels[0] ).not.toEqual( firstPixel );
        
        // .not.toEqual( true );

    });


});