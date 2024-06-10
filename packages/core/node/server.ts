import { setupServer } from "msw/node";
import thermogramMockHandlers from "./mocks/thermogram.mock";

/** Merge all handlers */
const handlers = [
    ...thermogramMockHandlers
]

/** Create the server for test environment */
export const server = setupServer( ...handlers );