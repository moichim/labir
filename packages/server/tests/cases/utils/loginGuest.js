import { apiCall } from "./apiCall";


export const loginGuest = async (folder) => {
    const response = await apiCall(`http://localhost:8080/access/${folder}/?action=login`, "POST", {
        user: "guest",
        password: "querty"
    });

    return response;
};
