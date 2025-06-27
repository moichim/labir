import { describe, test, expect } from "vitest";
import { loginRoot } from "../../utils/loginRoot.js";
import { loginGuest } from "../../utils/loginGuest.js";
import { apiCall } from "../../utils/apiCall.js";
import { apiCallGuest } from "../../utils/apiCallGuest.js";
import { apiCallRoot } from "../../utils/apiCallRoot.js";

describe("POST access", () => {

    test("unauthorised should not POST at all", async () => {

        // --- 1. Pokus o POST bez autorizace ---
        const request = await apiCall("http://localhost:8080/zihle", "POST");
        expect(request.json.success).toBe(false);
        expect(request.json.data).toBeUndefined();
        expect(request.json.code).toBe(401);

    });


    test("guest should not POST to folders that are accessuble to everybody", async () => {

        // --- 1. Guest se pokouší POSTnout do veřejné složky ---
        const request = await apiCallGuest("access/accessible", "POST");
        expect(request.json.success).toBe(false);
        expect(request.json.data).toBeUndefined();
        expect(request.json.code).toBe(403);

    });


    test("guest should not POST to folders that are accessuble to root", async () => {

        // --- 1. Guest se pokouší POSTnout do složky přístupné pouze rootovi ---
        const request = await apiCallGuest("access/restricted", "POST");
        expect(request.json.success).toBe(false);
        expect(request.json.data).toBeUndefined();
        expect(request.json.code).toBe(403);

    });


    test("guest should POST to folders that are accessible to him", async () => {

        // --- 1. Guest se pokouší POSTnout do složky přístupné guestovi ---
        const request = await apiCallGuest("access/restricted_to_guest", "POST");
        expect(request.json.success).toBe(true);
        expect(request.json.data).not.toBeUndefined();
        expect(request.json.data.message).not.toBeUndefined();
        expect(request.json.data.message).toBe("The test request was successfull, but nothing happened.");

    });


    test("root should post to public folders", async () => {

        // --- 1. Root se pokouší POSTnout do veřejné složky ---
        const request = await apiCallRoot("access/accessible", "POST");
        expect(request.json.success).toBe(true);
        expect(request.json.data).not.toBeUndefined();
        expect(request.json.data.message).not.toBeUndefined();
        expect(request.json.data.message).toBe("The test request was successfull, but nothing happened.");

    });


    test("root should post to restricted folders", async () => {

        // --- 1. Root se pokouší POSTnout do složky přístupné pouze rootovi ---
        const request = await apiCallRoot("access/restricted", "POST");
        expect(request.json.success).toBe(true);
        expect(request.json.data).not.toBeUndefined();
        expect(request.json.data.message).not.toBeUndefined();
        expect(request.json.data.message).toBe("The test request was successfull, but nothing happened.");

    });


    test("root should not POST to folders that are accessuble to guest", async () => {

        // --- 1. Root se pokouší POSTnout do složky přístupné guestovi ---
        const request = await apiCallRoot("access/restricted_to_guest", "POST");
        expect(request.json.success).toBe(true);
        expect(request.json.data).not.toBeUndefined();
        expect(request.json.data.message).not.toBeUndefined();
        expect(request.json.data.message).toBe("The test request was successfull, but nothing happened.");

    });

});