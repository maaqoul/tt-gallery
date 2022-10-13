import { ApiError, QueryOptions } from "./types";

const { REACT_APP_BASE_API_URL: BASE_API_URL, REACT_APP_CLIENT_ID: CLIENT_ID } = process.env;

function generateEndpoint(path: string): string {
    return `${BASE_API_URL}${path}`;
}

function throwCommonError(data: ApiError): Error {
    throw new Error(`${data.status_message} (error code: ${data.status_code})`);
}

function generateQuery(url: string, options: QueryOptions): string {
    return `${url}?${Object.entries(options)
        .reduce((accumulatedParams, currentEntry) =>
            (`${accumulatedParams}${accumulatedParams.length ? '&' : ''}${currentEntry[0]}=${currentEntry[1]}`), '')}`;
}

async function handleApiCall(url: string): Promise<Response[]> {
    const response = await fetch(url, { headers: { Authorization: `Client-ID ${CLIENT_ID}`, 'Content-Type': 'application/json ' } });

    const data = await response.json();

    if (!response.ok) {
        throwCommonError(data as unknown as ApiError);
    }

    return data
}

export async function fetchPhotos(): Promise<Response[]> {
    const url = generateEndpoint('photos');
    console.log('photos :', url)
    return handleApiCall(url)
}