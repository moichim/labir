import { apiCall } from "./apiCall.js";
import { expect } from "vitest";

export const apiCallGuest = async (fullPath, method = "GET", body = null) => {
    const response = await apiCall(`http://localhost:8080/?action=login`, "POST", {
        user: "guest",
        password: "querty"
    });

    expect(response.json.success).toBe(true);

    const user = response.json.data.login.user;
    const token = response.json.data.login.token;
    const authorisation = "Basic " + Buffer.from(`${user}:${token}`).toString("base64");

    // Přidat prefix jen pokud fullPath nezačíná na http
    const url = fullPath.startsWith("http") ? fullPath : `http://localhost:8080/${fullPath}`;

    const subsequent = await apiCall(
        url,
        method,
        body,
        response.session,
        {
            Authorization: authorisation
        }
    );

    return subsequent;
};

