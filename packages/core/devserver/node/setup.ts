import { vitest } from "vitest";
import { server } from "./server"

beforeAll( () => server.listen({ onUnhandledRequest: "error" }) );
afterAll( () => server.close() );
afterEach( () => server.resetHandlers() );

beforeEach(async () => {
    window.OffscreenCanvas = vitest.fn().mockImplementation((width: number, height: number) => {
        return {
            height,
            width,
            oncontextlost: vitest.fn(),
            oncontextrestored: vitest.fn(),
            getContext: vitest.fn(() => undefined),
            convertToBlob: vitest.fn(),
            transferToImageBitmap: vitest.fn(),
            addEventListener: vitest.fn(),
            removeEventListener: vitest.fn(),
            dispatchEvent: vitest.fn()
        } as unknown as OffscreenCanvas;
    });
});