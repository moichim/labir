import { describe, expect, test } from 'vitest';
import { apiCallGuest } from './apiCallGuest';

describe("apiCallGuest()", () => {

    test("has a proper response", async () => {

        const response = await apiCallGuest("access/accessible");

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();

    });

    test("non existing folder", async () => {

        const response = await apiCallGuest("non-existing-folder");

        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();
        expect(response.json.code).toBe(404);

    });

});