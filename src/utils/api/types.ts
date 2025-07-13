import config from "../../config";

export const API = {
    GitHub: config.api.github.endpoint,
} as const;

export interface APIRoute {
    endpoint: string;
    method: string;

    headers?: Record<string, string>;
    body?: any;
}

export interface APIResponse {
    data?: any;
    status: number;
    ok: boolean;
}
