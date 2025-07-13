import type { API, APIResponse, APIRoute } from "./types";

export const apiRequest = async (
    api: string,
    route: APIRoute,
): Promise<APIResponse | false> => {
    try {
        const response = await fetch(`${api}${route.endpoint}`, route);

        const text = await response.text();
        let data;

        if (text) {
            try {
                data = JSON.parse(text);
            } catch (err) {
                console.error("Error parsing JSON:\n", err);
            }
        }

        return { data, status: response.status, ok: response.ok };
    } catch (err) {
        console.error("Error making fetch request: \n", err);
        return false;
    }
};
