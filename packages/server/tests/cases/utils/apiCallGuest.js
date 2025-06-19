import { apiCall } from "./apiCall.js";
import { expect } from "vitest";

export const apiCallGuest = async (folder) => {

    const response = await apiCall(`http://localhost:8080/access/restricted_to_guest/?action=login`, "POST", {
        user: "guest",
        password: "querty"
    });

    expect(response.json.success).toBe(true);

    const user = response.json.data.login.user;
    const token = response.json.data.login.token;

    const authorisation = "Basic " + Buffer.from(`${user}:${token}`).toString("base64");

    const subsequent = await apiCall(
        `http://localhost:8080/access/${folder}`,
        "GET",
        null,
        response.session,
        {
            Authorization: authorisation
        }
    );

    const tokenOriginal = response.json.data.login.token;
    const tokenSubsequent = subsequent.json._debug.nette.user.token;

    expect( tokenOriginal ).toBe( tokenSubsequent );

    return subsequent;

}

