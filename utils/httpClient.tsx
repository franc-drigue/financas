const BASE_URL = 'http://172.20.10.2:3333';

function getHeaders(authToken?: string): HeadersInit_ {
  return {
    'Content-Type': 'application/json',
    ...(authToken && { Authorization: `Bearer ${authToken}` }),
  };
}

async function handleResponse<T>(response: Response): Promise<T | null> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const error = new Error(errorBody.message || 'Erro na requisição');
    (error as any).status = response.status;
    (error as any).body = errorBody;
    throw error;
  }
  return response.status !== 204 ? response.json() : null;
}

export const fetchClient = {
  post: async <TResponse = any>(
    endpoint: string,
    body: unknown,
    authToken?: string
  ): Promise<TResponse | null> => {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(authToken),
      body: JSON.stringify(body),
    });
    return handleResponse<TResponse>(res);
  },

  get: async <TResponse = any>(
    endpoint: string,
    queryParams?: Record<string, string>,
    authToken?: string
  ): Promise<TResponse | null> => {
    const url = new URL(`${BASE_URL}${endpoint}`);
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) =>
        url.searchParams.append(key, value)
      );
    }

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: getHeaders(authToken),
    });

    return handleResponse<TResponse>(res);
  },
};
