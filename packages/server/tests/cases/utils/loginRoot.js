import { apiCall } from "./apiCall";


export const loginRoot = async ( folder ) => {
    const response = await apiCall(`http://localhost:8080/?action=login`, "POST", {
        user: "root",
        password: "abcdefghijk"
    });

    return response;
};
