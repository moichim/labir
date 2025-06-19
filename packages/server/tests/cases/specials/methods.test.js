import { describe, expect, test } from 'vitest'
import { apiCall } from '../utils/apiCall';

describe("HTTP methods test", () => {

    test('GET to a public folder as anonymous should go', async () => {

        const getToVisible = await apiCall("http://localhost:8080/zihle", "GET");

        expect(getToVisible.json.success).toBe(true);

        expect(getToVisible.json.data).not.toBeUndefined();

        expect(getToVisible.json.data.folder).not.toBeUndefined();

    });


    test('POST to a public folder as anonymous should be restricted', async () => {

        const postToVisible = await apiCall("http://localhost:8080/zihle", "POST");

        expect(postToVisible.json.success).toBe(false);

        expect(postToVisible.json.data).toBeUndefined();

    });


    test("PUT should be restricted", async () => {

        const put = await apiCall("http://localhost:8080/zihle", "PUT");

        expect(put.json.success).toBe(false);
        expect(put.json.data).toBeUndefined();

    });


    test("DELETE should be restricted", async () => {

        const del = await apiCall("http://localhost:8080/zihle", "DELETE");

        expect(del.json.success).toBe(false);
        expect(del.json.data).toBeUndefined();

    });


    test("PATCH should be restricted", async () => {

        const patch = await apiCall("http://localhost:8080/zihle", "PATCH");

        expect(patch.json.success).toBe(false);
        expect(patch.json.data).toBeUndefined();

    });

});