import { apiCall } from "./apiCall";


export const loginGuest = async () => {
    const response = await apiCall(`http://localhost:8080/?action=login`, "POST", {
        user: "guest",
        password: "querty"
    });

    return response;
};
