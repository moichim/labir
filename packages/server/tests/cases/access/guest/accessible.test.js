import { describe, expect, test } from 'vitest'
import { apiCallGuest } from '../../utils/apiCallGuest';



describe("Guest: Allow access to accessible folder when logged in", () => {

    test('/accessible', async () => {

        const response = await apiCallGuest("access/accessible");
        expect(response.json.success).toBe(true);
        expect(response.json.data).not.toBeUndefined();
        expect(response.json.data.folder).not.toBeUndefined();
        expect(response.json.data.folder.protected).toBe(false);

    });

    test("/accessible/accessible", async () => {

        const login = await apiCallGuest("access/accessible/accessible");
        expect(login.json.success).toBe(true);
        expect(login.json.data).not.toBeUndefined();
        expect(login.json.data.folder).not.toBeUndefined();
        expect(login.json.data.folder.protected).toBe(false);

    });

    test("/accessible/restricted", async () => {

        const login = await apiCallGuest("access/accessible/restricted");
        expect(login.json.success).toBe(false);
        expect(login.json.code).toBe(403);


    });

});