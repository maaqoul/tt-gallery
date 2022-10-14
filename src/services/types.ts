export interface ApiError {
    status_message: string;
    status_code: number;
}

export interface QueryOptions {
    query?: string;
    color?: string;
    per_page?: number
}

interface url {
    small: string;
    full: string;
    regular: string;
}

export interface Response {
    id: string;
    urls: url;
    color: string
}