import { apiCall } from "./apiCall.js";
import { expect } from "vitest";

export const apiCallRoot = async (fullPath) => {
    // Odstraní počáteční lomítka a přidá jedno na začátek
    const normalizedPath = '/' + String(fullPath).replace(/^\/+/, '');

    const response = await apiCall(`http://localhost:8080/access/?action=login`, "POST", {
        user: "root",
        password: "abcdefghijk"
    });

    expect(response.json.success).toBe(true);

    const user = response.json.data.login.user;
    const token = response.json.data.login.token;
    const authorisation = "Basic " + Buffer.from(`${user}:${token}`).toString("base64");

    const subsequent = await apiCall(
        `http://localhost:8080${normalizedPath}`,
        "GET",
        null,
        response.session,
        {
            Authorization: authorisation
        }
    );

    const tokenOriginal = response.json.data.login.token;
    const tokenSubsequent = subsequent.json._debug.nette.user.token;

    expect(tokenOriginal).toBe(tokenSubsequent);

    return subsequent;
};

