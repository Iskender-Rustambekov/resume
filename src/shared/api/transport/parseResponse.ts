export const parseResponse = async <T>(response: Response): Promise<T> => {
	if (response.status === 204) {
		return undefined as T;
	}

	const contentType = response.headers.get('content-type');

	if (contentType?.includes('application/json')) {
		return (await response.json()) as T;
	}

	return (await response.text()) as T;
};
