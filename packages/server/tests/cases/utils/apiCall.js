const getPhpsessionid = (request) => {
    const setCookie = request.headers.get('set-cookie') || "";
    const match = setCookie.match(/PHPSESSID=([^;]+)/);
    return match ? match[0] : null;
};




export const apiCall = async (
    url,
    method = 'GET',
    body = null,
    sessio = null,
    headers = {}
) => {


    const options = {
        method: method,
        headers: {
            ...headers,
            "Content-Type": "application/json"
        }
    };

    if (body && typeof body === 'object' && ["GET", "HEAD"].includes(method) === false) {
        options.body = JSON.stringify(body);
    }

    if (sessio) {
        options.headers['Cookie'] = sessio;
    }

    const response = await fetch(url, options);

    const json = await response.json();
    return {
        response,
        json,
        session: getPhpsessionid(response)
    };

};

