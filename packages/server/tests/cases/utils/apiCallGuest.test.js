import { describe, expect, test } from 'vitest';
import { apiCallGuest } from './apiCallGuest';

describe.skip("apiCallGuest()", () => {

    test("has a proper response", async () => {

        const response = await apiCallGuest("accessible");

        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();

    });

    test("non existing folder", async () => {

        const response = await apiCallGuest("accessible___");

        expect(response.json.success).toBe(false);
        expect(response.json.data).toBeUndefined();
        expect(response.json.code).toBe(404);

    });

});